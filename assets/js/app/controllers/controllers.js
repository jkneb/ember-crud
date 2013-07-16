// ----------------- \
// CONTROLLERS
// ----------------- \

// the usersRoute grabs a LIST of users so we need an ArrayController 
// because ArrayController are meant to manage multiple models 
// http://emberjs.com/guides/controllers/#toc_representing-models 
App.UsersController = Ember.ArrayController.extend({
    // and here we make it inherit from the UserController
    needs: ['user']
});

// our nested user route will render only a single user at a time 
// so in this case we'll use an ObjectController
App.UserController = Ember.ObjectController.extend({
    // the property editMode is also used in the user template 
    // we will use it to manage css transitions when entering and exiting the edit route
    editMode: false, 

    deleteMode: false, 
    
    delete: function(){
        this.toggleProperty('deleteMode', true);
    },
    cancelDelete: function(){
        this.set('deleteMode', false);
    },
    confirmDelete: function(){
        this.get('content').deleteRecord();
        this.transitionToRoute('users');
    },
    edit: function(){
        this.setProperties({
            'editMode': true,
            'deleteMode': false
        });
        this.transitionToRoute('user.edit');
    }
});

App.UserEditController = Ember.ObjectController.extend({
    // we want this controller to inherit from its parent controller 
    // in this case it's userController 
    // http://emberjs.com/guides/controllers/dependencies-between-controllers/ 
    // http://darthdeus.github.com/blog/2013/01/27/controllers-needs-explained/ 
    needs: ['user'], 
    
    // in the template we used a {{action closeEditing}} tag wich will trigger this method on click 
    closeEditing: function(){
        // sets the parent controller editMode to false
        this.get('controllers.user').set('editMode', false); 
        // and then goes back to the previous route 
        this.transitionToRoute('user'); 
        // this will save modifications we made while editing the user 
        this.get('store').commit();
    }
});

App.UsersCreateController = Ember.ObjectController.extend({
    addUser: function(){
        App.User.createRecord(this.content);
        this.transitionToRoute('user');
    }
});
