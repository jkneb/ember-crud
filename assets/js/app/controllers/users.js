// This controller is an ArrayController because it handles a collection of models.
// Usually you'll use an ObjectController which deals with single model.
// Ember is able to guess we are dealing with multiple models and can genereate this one in memory, so we could omit to declare this one, but here in addition of declaring it we also set some sorting properties (so declaration can't be omitted).
App.UsersController = Em.ArrayController.extend({
    // here we tell the controller to sort Users by alphabetical order
    sortProperties: ['name'],
    sortAscending: true, 
    // usersCount is a computed property that returns the number of users
    usersCount: function(){
        return this.get('model.length');
    }.property('@each')
});