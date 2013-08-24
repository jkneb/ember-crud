// this is where we declare our routes
App.Router.map(function(){
    // this route will be our list of all users
    this.resource('users', function(){
        // this one is dynamic
        this.resource('user', { path:'/:user_id' }, function(){
            //we need it to see one user at a time with its id
            // and another nested one for editing the current user
            this.route('edit');
        });
        this.route('create');
    });


    // our 404 error route
    this.route('missing', {path:"/*path"});
});

App.MissingRoute = Em.Route.extend({
   redirect:function(){
       this.transitionTo('users.index');
   }
});