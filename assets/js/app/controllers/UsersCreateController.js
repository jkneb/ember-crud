App.UsersCreateController = Ember.ObjectController.extend({
    needs: ['user'],

    actions: {
        save: function () {
            // just before saving, we set the creationDate
            this.get('model').set('creationDate', new Date());
            // save and commit
            this.store.createRecord('user', this.get('model'));

            // redirects to the user itself
            this.transitionToRoute('user', this.get('model'));
        }
    }
});