describe('Users', function(){
    beforeEach(function(){
        // reset the application state before each test
        App.reset();
    });

    it ('User creation',function(){
        visit('/users/create')//
            .fillIn('.user-create.pane input:eq(0)', 'MatBreton')//
            .fillIn('.user-create.pane input:eq(1)', 'MatBreton')//
            .fillIn('.user-create.pane input:eq(2)', 'mbreton@xebia.fr')//
            .fillIn('.user-create.pane textarea', 'My short intro')//
            .click('.user-create.pane button')//
            .then(function(){
                // TODO waiting for user add works ....
                true.should.be.true;
            });
    });

    it ('User consultation',function(){
        visit('/users/1').then(function(){
            find('.user-profile h2').text().should.not.be.empty;
            find('.user-profile address').text().should.not.be.empty;
            find('.user-profile p.bio').text().should.not.be.empty;
        });
    });

    it ('User deleting',function(){
        var nbUser = 0;
        visit('/users/1').then(function(){
            nbUser = $('.users-listing li').length;
            click('button.icon-trashcan.red')//
                .click('.confirm-box.confirmin button:eq(0)')//
                .then(function(){
                    $('.users-listing li').length.should.be.equal(nbUser-1);
            });
        });
    });
});