describe ('UsersCreateController', function(){
    var usersCreateCtrl = null;
    var oldUserClass;

    beforeEach(function(){
        oldUserClass = App.User;
        var container = new Em.Container ();
        container.register("controller:usersCreate", App.UsersCreateController);
        container.register("controller:user", Em.Object);
        usersCreateCtrl = container.lookup("controller:usersCreate");
    });

    afterEach(function(){
        App.User = oldUserClass;
    });

    it('addUser should createRecord and transition to user', function (){
        var transitionToRouteCall = 0;
        var createRecordCall = 0;
        var commitCall = 0;

        var content = Em.Object.create({
            id:"Content's UsersCreateController",
            creationDate:null
        });
        App.User = {
            createRecord:function(user){
                user.should.be.equal(content);
                createRecordCall++;
            }
        };

        usersCreateCtrl.setProperties({
            target: {
                transitionToRoute:function(route, model){
                    route.should.equal('user');
                    model.should.equal(model);
                    transitionToRouteCall++;
                }
            },
            content : content,
            store : {
                commit:function(){
                    commitCall++;
                }
            }
        });
        usersCreateCtrl.save();

        transitionToRouteCall.should.equal(1);
        createRecordCall.should.equal(1);
        commitCall.should.equal(1);
    });
});