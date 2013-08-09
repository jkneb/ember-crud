describe ('UserEditController', function(){
    var userEditCtrl = null;
    var userCtrl = null;

    beforeEach(function(){
        var container = new Em.Container ();
        container.register("controller:user", Em.Object);
        container.register("controller:userEdit", App.UserEditController);
        userCtrl = container.lookup("controller:user");
        userEditCtrl = container.lookup("controller:userEdit");
    });

    it('closeEditing should set to false editMode and transition to user', function (){
        var transitionToRouteCall = 0,
            commitCall =0;

        userCtrl.set('editMode', true);
        userEditCtrl.setProperties({
            target: {
                transitionToRoute:function(route){
                    route.should.equal('user');
                    transitionToRouteCall++;
                }
            },
            store: {
                commit:function(){
                    commitCall++;
                }
            }
        });
        userEditCtrl.closeEditing();

        commitCall.should.equal(1);
        transitionToRouteCall.should.equal(1);
        userCtrl.get('editMode').should.be.false;
    });


});