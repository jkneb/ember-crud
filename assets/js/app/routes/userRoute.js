// normally we would certainly have to set stuff on our userRoute but Ember auto generated it for us :) 
// in fact we could even delete this userRoute lines of code
App.UserRoute = Ember.Route.extend({
    // this route model is auto generated internally 
    // because we followed Ember's naming conventions 

    // force the deleteMode to false when accessing user
    activate: function(){
        this.controllerFor('user').set('deleteMode', false);
    }
});