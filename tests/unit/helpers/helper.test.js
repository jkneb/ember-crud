describe('Helpers', function () {

    // a view instance who will serve of container
    var view;

    // a simple method helper to append synchronously a view in the dom
    var appendView = function (view) {
        Ember.run(function () {
            view.appendTo('#helpers-fixture');
        });
    };

    // before the test suite we create a dom element to sandbox our dom experiment
    before(function () {
        $('<div id="helpers-fixture"></div>').appendTo($('body'));
    });

    // after the test suite we removed it
    after(function () {
        $('#helpers-fixture').remove();
    });

    // after each test, if the view exist we destroy it
    afterEach(function () {
        Em.run(function () {
            if (view) {
                view.destroy();
            }
        });
    });


    it('formatDate should return a relative date from now', function () {

        // the first step is to create the container view. This view will
        // contains a fake controller with specific dates. We define in the
        // same time a template of the fly containing few uses of "formatDate"
        // with specifics dates.
        view = Em.View.create({
             controller: Em.Object.create({
                aYear: new moment().subtract('years', 1),
                threeMonths: new moment().subtract('months', 3),
                tenDays: new moment().subtract('days', 10)
            }),
            template: Em.Handlebars.compile("{{formatDate aYear}}|" + //
                                            "{{formatDate threeMonths}}|" + //
                                            "{{formatDate tenDays}}")
        });
        // the second step : it's to append the view in the DOM
        appendView(view);

        // And finally : we can check here the HTML resulting and
        // verify that the helper have the expected behaviour
        view.$().text().should.equal('a year ago|3 months ago|10 days ago');
        // Note : text method here, is a JQuery method
    });
});