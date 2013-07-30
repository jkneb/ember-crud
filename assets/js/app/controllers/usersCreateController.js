App.UsersCreateController = Ember.ObjectController.extend({
    addUser: function(){
        App.User.createRecord(this.content);
        this.transitionToRoute('user');
    }
});