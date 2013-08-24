// our nested user route will render only a single user at a time 
// so in this case we'll use an ObjectController
App.UserController = Ember.ObjectController.extend({
    // the property editMode is also used in the user template 
    // we will use it to manage css transitions when entering and exiting the edit route
    editMode: false, 

    deleteMode: false, 
    
    delete: function(){
        this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
        this.set('deleteMode', false);
    },
    confirmDelete: function(){
        this.get('content').deleteRecord();
        this.get('store').commit();
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
