// the modal component has a {{yield}} (in the template) where content can be encapsulated by the {{#modal-box}}...{{/modal-box}} block tags
App.ModalBoxComponent = Em.Component.extend({

    // the isModalVisible property depends on the modalVisible property set inside the modal-demo controller
    // the modal-demo controller is instantiated by the {{render}} helper located inside the application template
    // the applicationRoute holds the showModal action which can be called from anywhere by passing the name of the modal as the first argument of the action (see the action at the end of the users template)
    isModalVisible: false,

    actions: {
        hideModal: function(){
            this.set('isModalVisible', false);
        }
    }
});
