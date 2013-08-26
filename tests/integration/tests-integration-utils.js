// inject many helpers usefull for the integration tests
App.injectTestHelpers();

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