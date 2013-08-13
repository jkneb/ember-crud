describe ('UsersCreateController', function(){
    var usersCreateCtrl = null;
    var oldUserClass;

    beforeEach(function(){
        oldUserClass = App.User;
        var container = new Em.Container ();
        container.register("controller:usersCreate", App.UsersCreateController);
        usersCreateCtrl = container.lookup("controller:usersCreate");
    });

    afterEach(function(){
        App.User = oldUserClass;
    });

    it('addUser should createRecord and transition to user', function (){
        var transitionToRouteCall = 0;
        var createRecordCall = 0;

        var content = {id:"Content's UsersCreateController"};
        App.User = {
            createRecord:function(user){
                user.should.be.equal(content);
                createRecordCall++;
            }
        };

        usersCreateCtrl.setProperties({
            target: {
                transitionToRoute:function(route){
                    route.should.equal('user');
                    transitionToRouteCall++;
                }
            },
            content : content
        });
        usersCreateCtrl.addUser();

        transitionToRouteCall.should.equal(1);
        createRecordCall.should.equal(1);
    });
});