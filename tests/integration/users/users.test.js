describe('Users', function(){

    it ('User creation',function(){
        visit('/users/create')//
            .fillIn('.user-edit.pane input:eq(0)', 'MatAvatar')//
            .fillIn('.user-edit.pane input:eq(1)', 'MatBreton')//
            .fillIn('.user-edit.pane input:eq(2)', 'mbreton@xebia.fr')//
            .fillIn('.user-edit.pane textarea', 'My short intro')//
            .click('.user-edit.pane .aright button.btn-desktop')//
            .then(function(){
                $('.user-profile.pane h2').text().should.be.equal('MatBreton');
                $('.user-profile.pane address').text().should.be.equal('mbreton@xebia.fr');
                $('.user-profile.pane img').attr('src').should.be.equal('MatAvatar');
                $('.user-profile.pane .bio').text().should.be.equal('My short intro');
            });
    });

   it ('User consultation',function(){
        visit('/users').//
            click('ul.users-listing li a:eq(0)').then(function(){
                $('.user-profile h2').text().should.not.be.empty;
                $('.user-profile address').text().should.not.be.empty;
                $('.user-profile p.bio').text().should.not.be.empty;
            });
    });


   /* it ('User deleting',function(){

        visit('/users/1').then(function(){
            var nbUser = $('.users-listing li').length;
            console.log(nbUser);
            return click('button.icon-trashcan.red')//
                .click('.confirm-box.confirmin button:eq(0)')//
                .then(function(){
                    var promise = $.Deferred();
                    var maxTime = 5000;
                    var waitingTime = 0;

                    var waitFor = function(){
                        console.log('waitFor ...');
                        var aCount = $('.users-listing li').length;
                        if ((nbUser-1) ==  aCount){
                            clearTimeout(h);
                            aCount.should.equal(nbUser-1);
                            console.log('test ok');
                            promise.resolve();
                        } else if (waitingTime >= maxTime){
                            clearTimeout(h);
                            assert.fail('Timeout user not removed');
                            console.log('test ko');
                            promise.resolve();
                        }
                        waitingTime += 100;
                        setTimeout(waitFor, 100, this);
                    }

                    var h = setTimeout(waitFor, 100, this);
                    return wait(promise);
            });
        });
    });*/


    it ('User editing',function(){
        visit('/users/1')
            .click('.user-profile .tools .icon-pencil')
            .fillIn('.user-edit input:eq(0)', "expected_img")
            .fillIn('.user-edit input:eq(1)',"expected_name")
            .fillIn('.user-edit input:eq(2)',"expected_mail")
            .fillIn('.user-edit textarea',"expected_bio")
            .click('.user-edit button')
            .click('ul.users-listing li a:eq(0)').then(function(){
                $('.user-profile img').attr('src').should.equal('expected_img')
                $('.user-profile h2').text().should.equal("expected_name");
                $('.user-profile address').text().should.equal("expected_mail");
                $('.user-profile p.bio').text().should.equal("expected_bio");
            });
    });
});