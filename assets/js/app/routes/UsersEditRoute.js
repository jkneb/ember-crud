// we also want to manually set user.editMode when accessing the userEditRoute (its child route) 
// so we can use the controllerFor method to access the parent controller 
// http://emberjs.com/guides/routing/setting-up-a-controller/ 
App.UserEditRoute = App.AUserFormRoute.extend({
    model: function() {
        // here we tell the route to use its parent model 
        return this.modelFor('user'); 
    }
});