App.UserEditController = Ember.ObjectController.extend({
    // we want this controller to inherit from another controller 
    // in this case it's userController 
    // http://emberjs.com/guides/controllers/dependencies-between-controllers/ 
    // http://darthdeus.github.com/blog/2013/01/27/controllers-needs-explained/ 
    needs: ['user'], 
    
    // in the template we used an {{action "save"}} wich will trigger these methods on click
    actions: {
        save: function(){
            var user = this.get('model');
            // this will save modifications we made while editing the user
            user.save();
            // then transition to UserRoute
            this.transitionToRoute('user', user);
        }
    }
});