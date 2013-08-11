describe('Add an user', function(){
    afterEach(function(){
        // reset the application state before each test
        App.reset();
    });

    it('tto',function(){
        false.should.be.true;
    })

    it ('test',function(){
        visit('/users/create')//
            .fillIn('.user-create.pane input:eq(0)', 'MatBreton')//
            .fillIn('.user-create.pane input:eq(1)', 'MatBreton')//
            .fillIn('.user-create.pane input:eq(2)', 'mbreton@xebia.fr')//
            .fillIn('.user-create.pane input:eq(3)', 'My short intro')//
            .click('.user-create.pane button')//
            .then(function(){
                true.should.be.true;
            });
    });
});