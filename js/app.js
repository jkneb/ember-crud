window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ApplicationView = Ember.View.extend({
    //classNames:['wrap']
});

App.Router.map(function(){
    this.resource("client");
});