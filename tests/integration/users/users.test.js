describe('Users', function () {

    it('User creation', function () {
        visit('/users/create') // go to form for new user
            .fillIn('.user-edit.pane input:eq(0)', 'MatAvatar') // then... Fill "MatAvatar" into the first field
            .fillIn('.user-edit.pane input:eq(1)', 'MatBreton') // then... Fill "MatBreton" into this second field
            .fillIn('.user-edit.pane input:eq(2)', 'mbreton@xebia.fr') // then... Fill "mbreton@xebia.fr" into this third field
            .fillIn('.user-edit.pane textarea', 'My short intro') // then... Fill "My short bio" into the last field
            .click('.user-edit.pane .aright button.btn-desktop')  // then ... Click on the validation button
            .then(function () { // then, the application should redirect us to the user card index ...
                // we asssert that we have all informations filled in the fields
                $('.user-profile.pane h2').text().should.be.equal('MatBreton');
                $('.user-profile.pane address').text().should.be.equal('mbreton@xebia.fr');
                $('.user-profile.pane img').attr('src').should.be.equal('MatAvatar');
                $('.user-profile.pane .bio').text().should.be.equal('My short intro');
            });
    });

    it('User consultation', function () {
        visit('/users') // go to the list of user
            .click('ul.users-listing li a:eq(0)').then(function () { // then ... click on the first user in the list
                // check if its index card is not empty
                $('.user-profile h2').text().should.not.be.empty;
                $('.user-profile address').text().should.not.be.empty;
                $('.user-profile p.bio').text().should.not.be.empty;
            });
    });


    it('User deleting', function () {
        visit('/users/1') // go to the user with id 1
            .then(function () {
                // count the number of user in the list
                var nbUser = $('.users-listing li a').length;

                // when we are in a then callback we need to return the
                // value of click to chain the call
                return click('button.icon-trashcan.red')// then ... click on the delete button
                    .click('.confirm-box.confirmin button:eq(0)')// then ... click on the confirmation button
                    .then(function(){
                        // re-count the number of user in the list
                        var newNbUser = $('.users-listing li a').length;
                        // check that there is one user less
                        (nbUser - newNbUser).should.be.equal(1);
                    });
            });
    });


    it('User editing', function () {
        visit('/users/1') // go to the user with id 1
            .click('.user-profile .tools .icon-pencil')// then ... click on edit button
            .fillIn('.user-edit input:eq(0)', "expected_img")// then ... update field one by one
            .fillIn('.user-edit input:eq(1)', "expected_name")
            .fillIn('.user-edit input:eq(2)', "expected_mail")
            .fillIn('.user-edit textarea', "expected_bio")
            .click('.user-edit button')// then ... click on the validation button
            .click('ul.users-listing li a:eq(0)').then(function () { // then ...
                // check that all field are updated
                $('.user-profile img').attr('src').should.equal('expected_img')
                $('.user-profile h2').text().should.equal("expected_name");
                $('.user-profile address').text().should.equal("expected_mail");
                $('.user-profile p.bio').text().should.equal("expected_bio");
            });
    });
});