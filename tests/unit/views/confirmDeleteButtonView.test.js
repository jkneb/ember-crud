describe('confirmDeleteButtonView',function(){

    var view;
    var $fixture;

    var wait = function(callback, maxWaitCount) {
        maxWaitCount = Ember.isNone(maxWaitCount) ? 100 : maxWaitCount;

        setTimeout(function() {
            if (maxWaitCount > 0 && (Ember.run.hasScheduledTimers() || Ember.run.currentRunLoop)) {
                wait(callback, maxWaitCount - 1);

                return;
            }

            callback();
        }, 10);
    };

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

    it('Should toggle add css class on its "user-profile" parent and call confirmeDelete on its controller ',function(done){
        var confirmDeleteCall = 0;
        view = App.ConfirmDeleteButtonView.create({
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
        view.click();

        wait(function(){
            console.log('em next');
            confirmDeleteCall.should.equal(1);
            $userProfile.hasClass('delete-animation').should.be.true;
            $userProfile.remove();
            done();
        },600);
    });
});