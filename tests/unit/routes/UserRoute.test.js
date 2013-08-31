describe('UserRoute', function () {

    // common UserRoute instance
    var userRoute;

    // container of injection of dependencies
    var container;

    // before each unit test
    beforeEach(function () {

        // we create a new container to isolate the unit test
        container = new Em.Container();

        // instantiation by passing it the container previously created in two
        // locations. The first in the route itself and the second in the router.
        // we need too to mock the 'router' instance with a blank object
        userRoute = App.UserRoute.create({
            router: {
                container: container,
                router: {}
            },
            container: container
        });
    });

    // after each unit test
    afterEach(function () {
        // deleting all objects created for the test, to reset state
        container = userRoute = null;
    });

    it("setupController should initialize model and deleteMode", function () {
        // we create controller with a container for the future potential needs
        container.register('controller:user', Em.Object.extend({
            deleteMode: true,
            model: null
        }));
        var userCtrl = container.lookup("controller:user");
        var expectedModel = {}; // fake expected model passed to setupController

        userRoute.setupController(userCtrl, expectedModel);

        // checking...
        userCtrl.deleteMode.should.be.false;
        userCtrl.model.should.be.equal(expectedModel);
    });


    it('goBack event should transitionTo users',function(){
        var transitionToRouteCall =0;

        // a few dirty, but no idea to how to unit test by another manner
        userRoute.events.transitionTo = function(route){
            // we check if the targeted route by the transition
            // is the 'user' route
            route.should.be.equal('users');
            // we increment the number of call of the transitionToRoute
            transitionToRouteCall++;
        }
        userRoute.events.goBack();

        // checking ...
        transitionToRouteCall.should.be.equal(1);
    });
});