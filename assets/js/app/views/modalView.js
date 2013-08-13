App.Modal = Em.View.extend({
    layoutName: 'modal_layout',
    classNames: ['modal'],
    classNameBindings: ['controller.modalVisible:modal-show:modal-hide'],
    
    hideModal: function(){
        this.get('controller').set('modalVisible', false);
    }
});