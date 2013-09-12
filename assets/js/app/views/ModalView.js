App.Modal = Em.View.extend({
    layoutName: 'modal_layout',

    actions: {
        hideModal: function(e){
            this.get('controller').set('modalVisible', false);
        }
    }
});
