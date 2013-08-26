// This controller is an ArrayController because it handles a list of "array-ish" models.
// Usually you'll use ObjectController which deals with a single model.
// We could also do without this controller because Ember is able to figure out we're dealing with multiple models 
// and could then genereate this one for us (in memory).
App.UsersController = Em.ArrayController.extend({
    // here we tell the controller to sort Users by alphabetical order
    sortProperties: ['name'],
    sortAscending: true
});