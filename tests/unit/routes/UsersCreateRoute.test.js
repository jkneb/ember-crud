describe('UsersCreateRoute', function () {

    // common UserCreateRoute instance
    var usersCreateRoute;

    // container of injection of dependances
    var container;

    // before each unit test
    beforeEach(function () {

        // we create a new container to isolate the unit test
        container = new Em.Container();

        // instantiation by passing it the container previously created in two
        // locations. The first in the route itself and the second in the router.
        // we need too to mock the 'router' instance with a blank object
        usersCreateRoute = App.UsersCreateRoute.create({
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
        container = usersCreateRoute = null;
    });

    it("'s model should create a new instance each time", function () { // no comment ...
        usersCreateRoute.model().should.have.property('id').and.not.empty;
    });

    it("'s renderTemplate should render the userEdit template with the userCreate", function(){
        var renderCall = 0;
        usersCreateRoute.render = function(templateName, additionalParams){
            // count the number of call
            renderCall++;
            // check the input parameters
            templateName.should.be.equal('user.edit');
            additionalParams.should.have.property('controller').and.be.equal('usersCreate');
        };

        usersCreateRoute.renderTemplate();

        // check the number of call
        renderCall.should.be.equal(1);
    });

});