describe('Helpers', function () {

    var view;

    var appendView = function (view) {
        Ember.run(function () {
            view.appendTo('#helpers-fixture');
        });
    };

    before(function () {
        $('<div id="helpers-fixture"></div>').appendTo($('body'));
    });

    after(function () {
        $('#helpers-fixture').remove();
    });

    afterEach(function () {
        Em.run(function () {
            if (view) {
                view.destroy();
            }
        });
    });

    it('formatDate should exist', function () {
        var formatDate = Em.Handlebars.helpers['formatDate'];
        formatDate.should.not.be.null;
    });


    it('formatDate should return a year ago when the input date is one year before', function () {
        var formatDate = Em.Handlebars.helpers['formatDate'];
        var now = new moment();

        view = Em.View.create({
            context: Em.Object.create({date: now.subtract('years', 1)}),
            template: Em.Handlebars.compile("{{formatDate date}}")
        });
        appendView(view);
        view.$().text().should.equal('a year ago');
    });

    it('formatDate should return three months ago when the input date is three months before', function () {
        var formatDate = Em.Handlebars.helpers['formatDate'];
        var now = new moment();

        view = Em.View.create({
            context: Em.Object.create({date: now.subtract('months', 3)}),
            template: Em.Handlebars.compile("{{formatDate date}}")
        });
        appendView(view);
        view.$().text().should.equal('3 months ago');
    });

    it('formatDate should return ten days ago when the input date is ten days before', function () {
        var formatDate = Em.Handlebars.helpers['formatDate'];
        var now = new moment();

        view = Em.View.create({
            context: Em.Object.create({date: now.subtract('days', 10)}),
            template: Em.Handlebars.compile("{{formatDate date}}")
        });
        appendView(view);
        view.$().text().should.equal('10 days ago');
    });
});