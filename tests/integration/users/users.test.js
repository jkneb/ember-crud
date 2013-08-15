describe('Users', function(){

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
            $('.user-profile h2').text().should.not.be.empty;
            $('.user-profile address').text().should.not.be.empty;
            $('.user-profile p.bio').text().should.not.be.empty;
        });
    });

    it ('User deleting',function(){
        var nbUser = 0;
        visit('/users/1').then(function(){
            nbUser = $('.users-listing li').length;
            click('button.icon-trashcan.red')//
                .click('.confirm-box.confirmin button:eq(0)')//
                .then(function(){
                    $('.users-listing li').length.should.equal(nbUser-1);
            });
        });
    });

    it ('User editing',function(){
        visit('/users/1')
            .click('.user-profile .tools .icon-pencil')
            .fillIn('.user-edit input:eq(0)', "expected_img")
            .fillIn('.user-edit input:eq(1)',"expected_name")
            .fillIn('.user-edit input:eq(2)',"expected_mail")
            .fillIn('.user-edit textarea',"expected_bio")
            .click('.user-edit button').then(function(){
                $('.user-profile img').attr('src').should.equal('expected_img')
                $('.user-profile h2').text().should.equal("expected_name");
                $('.user-profile address').text().should.equal("expected_mail");
                $('.user-profile p.bio').text().should.equal("expected_bio");
            });
    });
});