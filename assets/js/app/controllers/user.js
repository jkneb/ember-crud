// our nested user route will render only a single user at a time so it's an ObjectController
App.UserController = Ember.ObjectController.extend({
    // editMode / deleteMode properties are used in the user template 
    // we use them to manage css transitions when entering and exiting the edit route
    // see also the UserCreateAndEditRoute for more
    editMode: false,

    deleteMode: false,

    actions: {
        delete: function(){
            this.toggleProperty('deleteMode');
        },
        cancelDelete: function(){
            this.set('deleteMode', false);
        },
        confirmDelete: function(){
            // delete a user
            this.get('model').deleteRecord();
            this.get('model').save();
            // then transition to the UsersRoute
            this.transitionToRoute('users');
            // set deleteMode back to false
            this.set('deleteMode', false);
        }
    },
    edit: function(){
        this.setProperties({
            'editMode': true,
            'deleteMode': false
        });
        this.transitionToRoute('user.edit');
    }
});
