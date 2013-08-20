// we can customize what's happening when accessing the users route
// here we simply retreive datas from our model and assign it to the usersRoute model
// http://emberjs.com/guides/routing/specifying-a-routes-model/
App.UsersRoute = Ember.Route.extend({
    model: function(){
        return App.User.find();
    },
    
    events: {
        // no need of a whole createRoute/template/view/controller
        // this createUser event creates a new empty user with only its new id
        // and then it redirects to the edit route for this new user
        createUser: function(){
            var users = App.User.find();
            var newUser = Em.Object.create({
                id: new Date().getTime()
            });
            this.transitionTo('user.edit', newUser);
        }
    }
});