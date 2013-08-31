App.Modal = Em.View.extend({
    layoutName: 'modal_layout',
    $modalBackdrop: null,

    didInsertElement: function(){
        var view = this;
        this.$modalBackdrop = view.$('.modal-backdrop');
        this.$modalBackdrop.on('click', { view: view }, this.hideModal);
    },

    willDestroy:function(){
        this.$modalBackdrop.off('click', this.hideModal);
    },

    actions: {
        hideModal: function(e){
            var view = this.isView ? this : e.data.view;
            view.get('controller').set('modalVisible', false);
        }
    }
});
