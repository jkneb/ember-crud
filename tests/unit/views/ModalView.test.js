describe('ModalView', function () {

    var container;
    var view;
    var $fixture;

    before(function () {
        $fixture = $('<div id="view-fixture"></div>').appendTo($('body'));
        container = new Em.Container();
    });

    after(function () {
        $fixture.remove();
    });

    afterEach(function () {
        Em.run(function () {
            if (view) {
                view.destroy();
            }
        });
        container = null;
    });

    it('when backdrop is clicked the model close', function () {
        var fakeCtrl = Em.Object.create({
            modalVisible: true
        });

        container.register('template:modal', Em.Handlebars.compile(''), { instantiate: false });
        container.register('template:modal_layout', Em.TEMPLATES['modal_layout'], { instantiate: false });

        container.register('view:modal', App.Modal.extend({
            templateName : 'modal',
            controller: fakeCtrl
        }));

        view = container.lookup('view:modal');
        Ember.run(function () {
            view.appendTo($fixture);
        });

        Em.run(function () {
            $('.modal-backdrop').click();
        });
        fakeCtrl.modalVisible.should.be.false;
    });
});