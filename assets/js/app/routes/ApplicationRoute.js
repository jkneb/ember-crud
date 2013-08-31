// the applicationRoute is the highest route possible
// here we use it to store some global events for our app
App.ApplicationRoute = Em.Route.extend({
    actions: {
        showModal: function(name){
            this.controllerFor(name).set('modalVisible', true);
        },
        goBack: function(){
            this.transitionTo('users');
        }
    }
});