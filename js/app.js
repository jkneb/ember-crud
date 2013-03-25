// first things first: let's create our app
window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

// this is where we declare our routes
App.Router.map(function(){
    this.resource('users', function(){
        this.resource('user', { path:'/:user_id' });
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
    },
    setupController:function(controller){
        /*App.User.findAll().done(function(users){
            // when the AJAX call is done fill the content property with our "ember converted" users
            controller.set('content', users);
        });*/
    }
});
App.UserRoute = Ember.Route.extend({
    /*model: function(params){
        return params.user_id;
    }, 
    setupController: function(controller, params){
        var userId = parseInt(params);

        App.User.findById(userId).done(function(user){
            controller.set('content', user);
        });
    }, 
    serialize: function(id){
        return { user_id: id }
    }*/
}); 


// let's give it some static methods so we can call it later
// http://emberjs.com/guides/object-model/reopening-classes-and-instances/
// as we are not using Ember-Data let's create some convenient methods to access our json datas
// to convert them into ember objects
/*App.User.reopenClass({
    findById: function(id){
        return this.findAll().then(function(users){
            return users[id];
        });
    }, 
    findAll: function(){ 
        return $.getJSON('/json/users.json').then(
            // everything went fine...
            function(json) {
                var emberUsers = [];
                var len = json.length;
                for (var i=0; i<len; i++){
                    emberUsers.push( App.User.create(json[i]) );
                }
                return emberUsers;
            }, 
            // something went wrong...
            function(err) {
                throw new Error( 'json file status is: ' + err.state() );
            }
        );
    }
});*/

// pay attention to the handlbars data-template-name="users" template 
// see the {{#each user in controller}} tag? In this case controller = UsersController
App.UsersController = Ember.ArrayController.extend();

App.UserController = Ember.ObjectController.extend();

App.UserView = Ember.View.extend({
    classNames: ['profile', 'flip-in'], 
    
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


