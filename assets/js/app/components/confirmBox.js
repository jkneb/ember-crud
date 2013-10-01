App.ConfirmBoxComponent = Ember.Component.extend({

    isVisible: false,

    actions: {
      cancelDelete: function(){
        this.toggleProperty('isVisible');
      },

      confirmDelete: function(){
        // In Ember the jQuery-ish $(this) is a bit different, it's: this.$()
        var $thisParent = this.$().parents('.user-profile');

        $thisParent.removeAttr('style').addClass('delete-animation');

        // we know our delete-animation will take 900ms seconds to complete
        // and Ember.run.later is Ember's setTimeout equivalent
        Ember.run.later(this, function() {
            // when the animation is done we can call the controller to trigger its confirmDelete action
            this.sendAction('action', this.get('param'));
        }, 900);
      }
    }
});