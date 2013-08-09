// this is where we declare our routes
App.Router.map(function(){
    // this route will be our list of all users
    this.resource('users', function(){
        // this one is nested and is dynamic, we need it to see one user at a time with its id
        this.resource('user', { path:'/:user_id' }, function(){
            // and another nested one for editing the current user
            this.route('edit');
        });
        // and finally the create route nested in users
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