App.UserEditController = Ember.ObjectController.extend({
    // we want this controller to inherit from another controller 
    // in this case it's userController 
    // http://emberjs.com/guides/controllers/dependencies-between-controllers/ 
    // http://darthdeus.github.com/blog/2013/01/27/controllers-needs-explained/ 
    needs: ['user'], 
    
    // in the template we used a {{action save}} tag wich will trigger this method on click
    actions: {
        save: function(){
            // this will save modifications we made while editing the user
            this.get('model').save();
            // then transitino to UserRoute
            this.transitionToRoute('user');
        }
    }
});