App.UsersCreateController = Ember.ObjectController.extend({
    needs: ['user'],

    actions: {
        save: function () {
            // just before saving, we set the creationDate
            this.get('model').set('creationDate', new Date());
            // create a new user and save it
            var newUser = this.store.createRecord('user', this.get('model'));
            newUser.save();

            // redirects to the user itself
            this.transitionToRoute('user', newUser);
        }
    }
});
