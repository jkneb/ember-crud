// This controller is an ArrayController because it handles a list of "array-ish" models.
// Usually you'll use an ObjectController which deals with single models.
// We could also do without this controller because Ember is able to figure out we're dealing with multiple models 
// and then could genereate this one for us (in memory).
App.UsersController = Em.ArrayController.extend({
    // but here we tell the controller to sort Users by alphabetical order
    sortProperties: ['name'],
    sortAscending: true, 
    
    usersCount: function(){
        return this.get('model.length');
    }.property('@each')
});