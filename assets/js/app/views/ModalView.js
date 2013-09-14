App.Modal = Em.View.extend({
// the modal view is a layout, take a look at the modal_layout template it has a {{yield}} where content can be encapsulated by the ModalView
    layoutName: 'modal_layout',

    // each modal has a hideModal method triggered from inside the modal_layout template
    actions: {
        hideModal: function(e){
            this.get('controller').set('modalVisible', false);
        }
    }
});
