// create and set as root element
$('<div id="ember-application-for-test"></div>').appendTo('body');
App.rootElement = "#ember-application-for-test";


// define Mocha adpater
Ember.Test.adapter = Ember.Test.MochaAdapter.create();

// defer ember initialisation, set router location to none
App.setupForTesting();

// inject many helpers usefull for the integration tests
App.injectTestHelpers();
