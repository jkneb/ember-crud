describe('UsersRoute', function () {

    // common UsersRoute instance
    var usersRoute;

    // container of injection of dependencies
    var container;

    var userClass;

    // before each unit test
    beforeEach(function () {

        // we backup the User class
        userClass = App.User;

        // we create a new container to isolate the unit test
        container = new Em.Container();

        // instantiation by passing it the container previously created in two
        // locations. The first in the route itself and the second in the router.
        // we need too to mock the 'router' instance with a blank object
        usersRoute = App.UsersRoute.create({
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
        container = usersRoute = null;

        // we restore the user class
        App.User = userClass;
    });

    it("'s model should return the user list", function () {
        // to count the number of call
        var findCall = 0;
        App.User.reopenClass({
            find: function (){
                // count the number of call
                findCall++;
                // verify that find is call without parameters
                arguments.should.be.empty;
            }
        });
        usersRoute.model();
        // check the number of call
        findCall.should.be.equal(1);
    });

});