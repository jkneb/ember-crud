App.UsersCreateController = Ember.ObjectController.extend({
    needs: ['user'],

    actions: {
        save: function () {
            // just before saving, we set the creationDate
            this.get('content').set('creationDate', new Date());

            // save and commit
            this.store.createRecord(this.get('content'));
            this.get('model').save();

            // redirects to the user itself
            this.transitionToRoute('user', this.get('content'));
        }
    }
});