App.AUserFormRoute = Ember.Route.extend({
    // fix when trying to manually access the route
    activate: function(){
        console.log('activate edit')
        this.controllerFor('user').setProperties({
            'editMode': true,
            'deleteMode': false
        });
    },
    // fix when trying to manually leave the route
    deactivate: function(){
        this.controllerFor('user').setProperties({
            'editMode': false,
            'deleteMode': false
        });
    }
});