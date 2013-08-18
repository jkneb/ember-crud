describe('confirmDeleteButtonView',function(){

    var view;
    var $fixture

    before(function () {
        $fixture = $('<div id="view-fixture"></div>').appendTo($('body'));
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
    });

    it('Should toggle add css class on its "user-profile" parent and call confirmeDelete on its controller ',function(){
        var confirmDeleteCall = 0;
        view = Em.View.create({
           controller: {
               confirmDelete:function(){
                   confirmDeleteCall++;
               }
           }
        });
        var $userProfile = $('<div class="user-profile"></div>');
        $userProfile.appendTo($fixture);
        Ember.run(function () {
            view.appendTo($userProfile);
        });
        view.$().click();

        // To wait until the end of the animation
        Em.run.next(function(){
            confirmDeleteCall.should.equal(1);
            $userProfile.hasClass('delete-animation').should.be.true;
            $userProfile.remove();
        });
    });
});