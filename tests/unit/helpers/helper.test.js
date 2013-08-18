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


    it('formatDate should return a relative date from now', function () {
        var formatDate = Em.Handlebars.helpers['formatDate'];

        view = Em.View.create({
            context: Em.Object.create({
                aYear: new moment().subtract('years', 1),
                threeMonths: new moment().subtract('months', 3),
                tenDays: new moment().subtract('days', 10)
            }),
            template: Em.Handlebars.compile("{{formatDate aYear}}|" + //
                                            "{{formatDate threeMonths}}|" + //
                                            "{{formatDate tenDays}}")
        });
        appendView(view);
        view.$().text().should.equal('a year ago|3 months ago|10 days ago');
    });
});