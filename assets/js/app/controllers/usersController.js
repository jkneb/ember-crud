// the usersRoute grabs a LIST of users so we need an ArrayController 
// because ArrayController are meant to manage multiple models 
// http://emberjs.com/guides/controllers/#toc_representing-models 
App.UsersController = Ember.ArrayController.extend({
    // in this controller is inject the reference of another controller,
    // this practice commonly named IOC (Injection Of Dependence)
    // in this case it's userController
    // http://emberjs.com/guides/controllers/dependencies-between-controllers/
    // http://darthdeus.github.com/blog/2013/01/27/controllers-needs-explained/
    needs: ['user']
});