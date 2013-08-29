Ember.Test.registerHelper('waitFor', function (app, testFx, onReady, onTimeout, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000; //< Default Max Timout is 3s
    var start = new Date().getTime();
    var condition = false;

    Em.run.begin();
    var interval = setInterval(function() {
        if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
            // If not time-out yet and condition not yet fulfilled
            condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
        } else {
            if(!condition) {
                // If condition still not fulfilled (timeout but condition is 'false')
                typeof(onTimeout) === "string" ? eval(onTimeout) : onTimeout(); //< Do what it's supposed to do once the condition is fulfilled
            } else {
                // Condition fulfilled (timeout and/or condition is 'true')
                console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
            }
            clearInterval(interval);
            Em.run.end();
        }
    }, 250); //< repeat check every 250ms

    return wait(app);
});

// inject many helpers usefull for the integration tests
App.injectTestHelpers();

App.Store = DS.Store.extend({
     adapter: 'DS.FixtureAdapter'
});

// Global Integration tests beforeEach
beforeEach(function(){
    // run application initialization
    App.User.FIXTURES = [
        {
            id: 1,
            name: 'Julien Knebel',
            email: 'julienknebel@gmail.com',
            bio: 'Freelance web & print designer + front-end developer',
            avatarUrl: './assets/images/avatars/jk.jpg',
            creationDate: 'Fri Aug 09 2013 15:13:16 GMT+0200 (CEST)'
        }
    ];
    Ember.run(App, App.advanceReadiness);
});

// Global Integrations tests afterEach
afterEach(function(){
    // reset the application state after each test
    Ember.run(App, App.reset);
});