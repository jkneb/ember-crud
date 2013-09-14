// the Router is where we declare our routes
App.Router.map(function(){
    // this route will be our collection of users
    this.resource('users', function(){
        // this one is nested and dynamic, we need it to see one user at a time with its id
        this.resource('user', { path:'/:user_id' }, function(){
            // another nested one for editing the current user
            this.route('edit');
        });
        // and a last one to create users
        this.route('create');
    });

    // this is our 404 error route - see MissingRoute just bellow
    this.route('missing', { path: '/*path' });
});

// this handles wrong routes - you could use it to redirect to a 404 route or like here to redirect to the index page
App.MissingRoute = Em.Route.extend({
    redirect: function(){
        this.transitionTo('users.index');
    }
});