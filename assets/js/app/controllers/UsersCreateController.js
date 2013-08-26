App.UsersCreateController = Ember.ObjectController.extend({
    needs: ['user'],

    save: function () {
        // just before to save, we set the creation date
        this.get('content').set('creationDate', new Date());

        // save and commit
        App.User.createRecord(this.get('content'));
        this.get('store').commit();

        // we redirect to the user himself
        this.transitionToRoute('user', this.get('content'));
    }
});