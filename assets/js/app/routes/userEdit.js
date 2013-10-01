// the UserEditRoute is an extend of the UserCreateAndEditRoute
App.UserEditRoute = App.UserCreateAndEditRoute.extend({
    model: function() {
        // here we tell the route to use its parent model
        return this.modelFor('user');
    },
    actions: {
        goBack: function(){
            this.transitionTo('user');
        }
    }
});