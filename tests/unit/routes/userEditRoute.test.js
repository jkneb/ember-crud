describe ('Routes', function(){

    var originalTemplates;
    var container;
    var router;

    function bootTestApplication() {
        Ember.run(TestApp, 'advanceReadiness');
        router = container.lookup('router:main');
    };

    function handleURL(path) {
        return Ember.run(function() {
            return router.handleURL(path).then(function(value) {
                ok(true, 'url: `' + path + '` was handled');
                return value;
            }, function(reason) {
                ok(false, 'failed to visit:`' + path + '` reason: `' + reason);
                throw reason;
            });
        });
    };

    beforeEach(function(){
        $('<div id="route-fixtures"></div>').appendTo($('body'));
        Em.run(function(){

            // We create an Application
            TestApp = Em.Application.create({
                LOG_TRANSITIONS: true,
                name:"TestApp",
                rootElement:"#route-fixtures"
            });
            TestApp.setupForTesting();

            TestApp.LoadingRoute = Ember.Route.extend({
            });

            container = TestApp.__container__;

            TestApp.Store = DS.Store.extend({

            });

            originalTemplates = Ember.$.extend({}, Ember.TEMPLATES);

            //Ember.TEMPLATES.application = Ember.Handlebars.compile("{{outlet}}");
        });
    });


    afterEach(function(){
        Ember.run(function() {
            TestApp.destroy();
            TestApp = null;
            Ember.TEMPLATES = originalTemplates;
        });
        $('#route-fixtures').remove();
    });

    it('UserEditRoute', function (){
        Ember.run(function() {
            TestApp.Router.map(function(){
                this.resource('user',function(){
                    this.route('edit');
                });
            });

            // Save the App.UserEditRoute to test into the isolated context
            TestApp.UserEditRoute = App.UserEditRoute;

            // we define a fake UserRoute who will return the expected model of the UserEditRoute
            var expectedUserModel = Em.Object.create({name:'Model from user route'});
            TestApp.UserRoute = Em.Route.extend({
                model:function(){
                    return expectedUserModel;
                }
            });

            // Mock of UserController class
            TestApp.UserController = Em.Object.extend({
                editMode:false,
                deleteMode:true
            });

            // We define an empty template
            Ember.TEMPLATES['user/edit'] = Ember.Handlebars.compile("");

            // Start TestApp application
            bootTestApplication();

            // retrieve UserController instance
            var userCtrl = container.lookup('controller:user');

            handleURL('/user/edit');
            // assert activate hook behavior
            userCtrl.get('editMode').should.be.true;
            userCtrl.get('deleteMode').should.be.false;

            // reset tested properties
            userCtrl.setProperties({
                editMode:true,
                deleteMode:true
            });

            handleURL('/');
            // assert deactivate hook behavior
            userCtrl.get('editMode').should.be.false;
            userCtrl.get('deleteMode').should.be.false;
        });
    });

});