// first things first: let's create our app
window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

// this is where we declare our routes
App.Router.map(function(){
    // this route will be our list of all users
    this.resource('users', function(){
        // this one is nested and dynamic we need it to see one user at a time with its id
        this.resource('user', { path:'/:user_id' }, function(){
            // and another nested one for editing the current user
            this.route('edit');
        });
        // and finally the create route nested in users
        this.route('create');
    });
});

// no need of a home page so we redirect "/" to "/users"
App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('users');
    }
});

// we can customize what's happening when accessing the user route
// here we simply retreive datas from our model and assign it to the usersRoute model
// http://emberjs.com/guides/routing/specifying-a-routes-model/
App.UsersRoute = Ember.Route.extend({
    model: function(){
        return App.User.find();
    }
});

// we would need to define model for our nested/dynamic userRoute 
// but by following Ember's naming conventions we get it for free 
// in fact we don't even need to declare the userRoute 
/*App.UserRoute = Ember.Route.extend();*/


// the users route will render a list of users so we need an ArrayController
// and also pay attention to the handlbars users template 
// you'll see the {{#each user in controller}} which starts the loop 
// well in that particular case controller means UsersController
App.UsersController = Ember.ArrayController.extend();

// our nested user route will render only a single user at a time 
// so in this case we'll use an ObjectController
App.UserController = Ember.ObjectController.extend({
    // the property isEditing is also used in the user template 
    // this will let us switch class names if false or true
    isEditing: false, 
    
    edit: function(){
        this.set('isEditing', true); 
        this.transitionToRoute('user.edit'); 
    }
});

App.UserView = Ember.View.extend({
    didInsertElement: function(){
        var $elem = this.$();
        
        /* rotate things with mousemove for debug mode */
        /*$(window).on('mousedown mouseup', function(e){
            var $this = $(this); 
            var oldX = e.pageX; 
            var oldY = e.pageY; 

            if (e.type == 'mousedown') {
                //console.group();
                //  console.log('$this > ',$this);
                //  console.log('oldX > ',oldX);
                //  console.log('oldY > ',oldY);
                //console.groupEnd();

                $elem.addClass('unselectable');

                $this.on('mousemove', function(e){
                    var currX = e.pageX;
                    var currY = e.pageY;
                    //console.log(currX +' < x | y > '+currY);
                    var newX = currY-oldY;
                    //var newY = currX-oldX;
                    //console.log('%d - %d = %d', currY, oldY, currY-oldY);
                    //console.log('newX > ',newX);
                    //console.log('newY > ',newY);

                    $elem.css({
                        '-webkit-transform':'rotateX('+newX+'deg)',
                        '-moz-transform':'rotateX('+newX+'deg)',
                        'transform':'rotateX('+newX+'deg)'
                    });
                });

            } else {
                // console.log('mouseup');
                $this.off('mousemove');
                $elem.removeClass('unselectable');
            }

            e.stopPropagation();
        });*/
    }
});

App.EditController = Ember.ObjectController.extend();

