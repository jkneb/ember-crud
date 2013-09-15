// the modal view is a layout, take a look at the modal_layout template it has a {{yield}} where content can be encapsulated by the ModalView
App.ModalView = Em.View.extend({
    layoutName: 'modal_layout',

    // each modal has a hideModal method triggered from inside the modal_layout template
    actions: {
        hideModal: function(e){
            this.get('controller').set('modalVisible', false);
        }
    }
});
