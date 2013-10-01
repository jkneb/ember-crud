// each route has this `model` hook where you specify which Model the route needs to load
// http://emberjs.com/guides/routing/specifying-a-routes-model/
App.UsersRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('user');
    }
});