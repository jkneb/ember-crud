App.UsersCreateController = Ember.ObjectController.extend({
    needs: ['user'],

    save: function () {
        this.get('content').set('creationDate', new Date());
        App.User.createRecord(this.get('content'));
        this.transitionToRoute('user', this.get('content'));
        this.get('store').commit();
    }
});