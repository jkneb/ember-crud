describe('Add an user', function(){
    beforeEach(function(){
        // reset the application state before each test
        App.reset();
    });

    it ('test',function(){
        visit('/users/create')//
            .fillIn('.user-create.pane input:eq(0)', 'MatBreton')//
            .fillIn('.user-create.pane input:eq(1)', 'MatBreton')//
            .fillIn('.user-create.pane input:eq(2)', 'mbreton@xebia.fr')//
            .fillIn('.user-create.pane textarea', 'My short intro')//
            .click('.user-create.pane button')//
            .then(function(){
                // TODO waiting for that user add works ....
                true.should.be.true;
            });
    });

    it ('test',function(){
        visit('/users/1').then(function(){
            find('.user-create.pane input:eq(0)').should.not.be.empty;
            find('.user-create.pane input:eq(1)').should.not.be.empty;
            find('.user-create.pane input:eq(2)').should.not.be.empty;
            find('.user-create.pane textarea').should.not.be.empty;
        });
    });
});