describe ('UserEditController', function(){

    // the common instance of UserEditController
    var userEditCtrl = null;

    // the common instance of UserController
    var userCtrl = null;

    // container of injection of dependances
    var container = null;

    // before each test
    beforeEach(function(){
        // we create a new container to isolate the unit test
        container = new Em.Container ();

        // we register a faked UserController because of the 'needs'
        // which define a dependency to this controller
        container.register("controller:user", Em.Object);

        // we register the real UserEditController who will tested
        container.register("controller:userEdit", App.UserEditController);

        // we retrieves the userController instance
        userCtrl = container.lookup("controller:user");

        // we retrieves the UserEditController instance. You're probably wondering,
        // why not just create an instance of UserEditController by
        // calling create method.  It's simply because if we had create like
        // that the controller, the 'needs' property was not respected, and the
        // UserController instance injected.
        userEditCtrl = container.lookup("controller:userEdit");
    });

    // purge all commons objects
    afterEach(function(){
        userCtrl = userEditCtrl = container = null;
    });

    it('closeEditing should set to false editMode and transition to user', function (){
        // counter to check the number of call of each method
        var transitionToRouteCall = 0,
            commitCall =0;

        // userCtrl initialization
        userCtrl.set('editMode', true);

        // userEditCtrl initialization
        userEditCtrl.setProperties({
            // the 'target' property represent the router instance for a controller
            target: {
                // we mock the transitionToRoute method of the router
                transitionToRoute:function(route){
                    // we check if the targeted route by the transition
                    // is the 'user' route
                    route.should.equal('user');
                    // we increment the number of call of the transitionToRoute
                    transitionToRouteCall++;
                }
            },
            // the 'store' property represent the 'store' instance of the Ember application
            store: {
                // we mock the commit to count the number of call
                commit:function(){
                    commitCall++;
                }
            }
        });

        // Call the tested method
        userEditCtrl.save();

        // check the number the number of call of each method
        commitCall.should.equal(1);
        transitionToRouteCall.should.equal(1);
    });


});