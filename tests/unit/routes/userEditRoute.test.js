describe('UserEditRoute', function () {

    // common UserEditRoute instance
    var userEditRoute;

    // container of injection of dependencies
    var container;

    // before each unit test
    beforeEach(function () {

        // we create a new container to isolate the unit test
        container = new Em.Container();

        // instantiation by passing it the container previously created in two
        // locations. The first in the route itself and the second in the router.
        // we need too to mock the 'router' instance with a blank object
        userEditRoute = App.UserEditRoute.create({
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
        container = userEditRoute = null;
    });

    it("the model is that this parent route, the UserRoute", function () {
        // we create model who will be return by the fake UserRoute
        var expectedUserModel = Em.Object.create({name: 'Model from user route'});

        // we register a faked UserRoute with the mocked model
        container.register("route:user", Em.Route.extend({
            currentModel: expectedUserModel
        }));

        // we check that when we call the model method of UserEditRoute,
        // it's return the model of the UserRoute
        userEditRoute.model().should.be.equal(expectedUserModel);
    });

});