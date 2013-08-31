describe('IndexRoute',function(){

    it('should redirect to users route directly',function (){
        // to count the number of call of transitionToCall
        var transitionToCall = 0;

        // create an instance of IndexRoute
        var indexRoute = App.IndexRoute.create({
            // mock transitionTo to check the passed route
            // and count the number of call
            transitionTo:function(route){
                transitionToCall++;
                route.should.be.equal("users");
            }
        });
        indexRoute.redirect();

        // verify that transition has been called once
        transitionToCall.should.be.equal(1);
    });
})