// the UsersCreateRoute is an extend of the UserCreateAndEditRoute
App.UsersCreateRoute = App.UserCreateAndEditRoute.extend({
    model: function(){
        // the model for this route is a new empty Ember.Object
        return Em.Object.create({});
    },
    
    // in this case (the create route) we can re-use the user/edit template
    // associated with the usersCreateController
    renderTemplate: function(){
        this.render('user.edit', {
            controller: 'usersCreate'
        });
    }
});