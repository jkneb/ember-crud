App.UserRoute = Ember.Route.extend({
    // this route model is auto generated internally 
    // because we followed Ember's naming conventions 
    /*model: function(params) { 
        return App.User.find(params.user_id);
    },*/

    setupController: function(controller, model){
        // force the deleteMode to false when accessing user
        this.controllerFor('user').set('deleteMode', false);
        // have no fucking idea why I have to do this
        controller.set('model', model);
    },

    events: {
        goBack: function(){
            this.transitionTo('users');
        }
    }
});