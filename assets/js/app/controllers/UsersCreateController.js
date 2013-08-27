App.UsersCreateController = Ember.ObjectController.extend({
    needs: ['user'],

    save: function () {
        // just before saving, we set the creationDate
        this.get('content').set('creationDate', new Date());

        // save and commit
        App.User.createRecord(this.get('content'));
        this.get('store').commit();

        // redirects to the user itself
        this.transitionToRoute('user', this.get('content'));
    }
});