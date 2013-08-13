App.ApplicationRoute = Em.Route.extend({
    events: {
        showModal: function(name){
            this.controllerFor(name).set('modalVisible', true);
        }, 
        customTransitionTo: function(name){
            this.transitionTo(name);
        }
    }
});