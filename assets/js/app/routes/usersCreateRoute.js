App.UsersCreateRoute = Ember.Route.extend({
    model: function(){
        return { id:new Date().getTime() };
    }
});