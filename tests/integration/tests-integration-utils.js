// inject many helpers usefull for the integration tests
App.injectTestHelpers();

// Global Integration tests beforeEach
beforeEach(function(){
    // run application initialization
    Ember.run(App, App.advanceReadiness);
});

// Global Integrations tests afterEach
afterEach(function(){
    // reset the application state after each test
    App.reset();
});