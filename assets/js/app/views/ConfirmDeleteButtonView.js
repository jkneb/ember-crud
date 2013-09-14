App.ConfirmDeleteButtonView = Ember.View.extend({
    // here we can handle the click event on the view
    // and do almost everything we want with regular jQuery
    click: function(){
        // In Ember the jQuery-ish $(this) is a bit different, it's: this.$()
        var $thisParent = this.$().parents('.user-profile');

        $thisParent.removeAttr('style').addClass('delete-animation');

        // we know our delete-animation will take 900ms seconds to complete
        // and Ember.run.later is Ember's setTimeout equivalent
        Ember.run.later(this, function() {
            // when the animation is done we can call the controller to trigger its confirmDelete action
            this.get('controller').send('confirmDelete');
        }, 900);
    }
});