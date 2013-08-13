App.Modal = Em.View.extend({
    layoutName: 'modal_layout',

    didInsertElement: function(){
        var view = this;
        var backdrop = view.$().find('.modal-backdrop');
        backdrop.on('click', function(){
            view.hideModal();
        });
    },

    hideModal: function(){
        this.get('controller').set('modalVisible', false);
    }
});
