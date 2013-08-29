describe('ApplicationRoute', function () {

    // common ApplicationRoute instance
    var appRoute;

    // container of injection of dependencies
    var container;

    // before each unit test
    beforeEach(function () {

        // we create a new container to isolate the unit test
        container = new Em.Container();

        // instantiation by passing it the container previously created in two
        // locations. The first in the route itself and the second in the router.
        // we need too to mock the 'router' instance with a blank object
        appRoute = App.ApplicationRoute.create({
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
        container = appRoute = null;
    });

    it('goBack event should transitionTo users',function(){
        var transitionToRouteCall =0;

        // a few dirty, but no idea to how to unit test by another manner
        appRoute.events.transitionTo = function(route){
            // we check if the targeted route by the transition
            // is the 'user' route
            route.should.be.equal('users');
            // we increment the number of call of the transitionToRoute
            transitionToRouteCall++;
        }
        appRoute.events.goBack();

        // checking ...
        transitionToRouteCall.should.be.equal(1);
    });


    it('goBack event should should set true to modalVisible to a named controller',function(){
        var controllerForCall =0;

        // create a fake who will return by the mocked controllerFor method
        var fakeCtrl = Em.Object.create({
            modalVisible : false
        });

        // a few dirty, but no idea to how to unit test by another manner
        appRoute.events.controllerFor = function(controllerName){
            // we check if the targeted route by the transition
            // is the 'user' route
            controllerName.should.be.equal('aCtrl');
            // we increment the number of call of the transitionToRoute
            controllerForCall++;
            return fakeCtrl;
        };
        appRoute.events.showModal('aCtrl');

        // checking ...
        controllerForCall.should.be.equal(1);
        fakeCtrl.modalVisible.should.be.true;
    });
});