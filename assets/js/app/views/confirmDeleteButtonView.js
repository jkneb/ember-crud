App.ConfirmDeleteButtonView = Ember.View.extend({
    // here we can handle the click event on the view
    // and do almost every thing we want with regular jQuery
    click: function(){
        // In Ember the jQuery-ish $(this) is a bit different, it's : this.$()
        var $thisParent = this.$().parents('.user-profile');
        
        // now we can add an animation to any div as we would do with regular jQuery
        $thisParent.addClass('delete-animation');
        
        // we know our delete-animation will take 500ms seconds to complete
        // Ember.run.later is ember's equivalent to setTimeout
        Ember.run.later(this, function() {
            // and when the animation is done we can call the controller to trigger its confirmDelete method
            this.get('controller').confirmDelete();
        }, 500);
    }
});