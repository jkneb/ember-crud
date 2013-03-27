// first things first: let's create our app
window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

// this is where we declare our routes
App.Router.map(function(){
    this.resource('users', function(){
        this.resource('user', { path:'/:user_id' }, function(){
            this.route('edit');
        });
        this.route('create');
    });
});

// no need of a home page
App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('users');
    }
});

// we can customize what's happening when accessing the user route
// http://emberjs.com/guides/routing/specifying-a-routes-model/
App.UsersRoute = Ember.Route.extend({
    model: function(){
        return App.User.find();
    }
});



// pay attention to the handlbars data-template-name="users" template 
// see the {{#each user in controller}} tag? In this case controller = UsersController
App.UsersController = Ember.ArrayController.extend();

App.UserController = Ember.ObjectController.extend({
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

