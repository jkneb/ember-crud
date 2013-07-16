// first things first: let's create our app
window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

// this trick will handle a basic 404 error page 
App.Router = Ember.Router.extend({
    handleURL: function (url) {
        try {
            this._super(url);
        }
        catch (e) {
            Em.debug('url not recognized: ' + url);
            this.transitionTo('404');
        }
    }
});

// ----------------- \
// ROUTING
// ----------------- \

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
    this.route('404');
});


// no need of a home page so we redirect "/" to "/users"
App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('users');
    }
});

// we can customize what's happening when accessing the users route
// here we simply retreive datas from our model and assign it to the usersRoute model
// http://emberjs.com/guides/routing/specifying-a-routes-model/
App.UsersRoute = Ember.Route.extend({
    model: function(){
        return App.User.find();
    }
});

// normally we would certainly have to set stuff on our userRoute but Ember auto generated it for us :) 
// in fact we could even delete this userRoute lines of code
App.UserRoute = Ember.Route.extend({
    // this route model is auto generated internally 
    // because we followed Ember's naming conventions 
    /*model: function(params) { 
        return App.User.find(params.post_id);
    },*/

    // force the deleteMode to false when accessing user
    setupController: function(controller){
        this.controllerFor('user').set('deleteMode', false);
    }
});


App.UsersCreateRoute = Ember.Route.extend({
    model: function(){
        return { id:new Date().getTime() };
    }
});


// we also want to manually set user.editMode when accessing the userEditRoute (its child route) 
// so we can use the controllerFor method to access the parent controller 
// http://emberjs.com/guides/routing/setting-up-a-controller/ 
App.UserEditRoute = Ember.Route.extend({
    model: function() {
        // here we tell the route to use its parent model 
        return this.modelFor('user'); 
    }, 
    // fix when trying to manually access the route 
    setupController: function(controller){
        this.controllerFor('user').setProperties({
            'editMode': true,
            'deleteMode': false
        });
    }, 
    // fix when trying to manually leave the route 
    deactivate: function(){ 
        this.controllerFor('user').setProperties({
            'editMode': false,
            'deleteMode': false
        });
    }
});


// ----------------- \
// CONTROLLERS
// ----------------- \

// the usersRoute grabs a LIST of users so we need an ArrayController 
// because ArrayController are meant to manage multiple models 
// http://emberjs.com/guides/controllers/#toc_representing-models 
App.UsersController = Ember.ArrayController.extend({
    // and here we make it inherit from the UserController
    needs: ['user']
});

// our nested user route will render only a single user at a time 
// so in this case we'll use an ObjectController
App.UserController = Ember.ObjectController.extend({
    // the property editMode is also used in the user template 
    // we will use it to manage css transitions when entering and exiting the edit route
    editMode: false, 

    deleteMode: false, 
    
    delete: function(){
        this.toggleProperty('deleteMode', true);
    },
    cancelDelete: function(){
        this.set('deleteMode', false);
    },
    confirmDelete: function(){
        this.get('content').deleteRecord();
        this.transitionToRoute('users');
    },
    edit: function(){
        this.setProperties({
            'editMode': true,
            'deleteMode': false
        });
        this.transitionToRoute('user.edit');
    }
});

App.UserEditController = Ember.ObjectController.extend({
    // we want this controller to inherit from its parent controller 
    // in this case it's userController 
    // http://emberjs.com/guides/controllers/dependencies-between-controllers/ 
    // http://darthdeus.github.com/blog/2013/01/27/controllers-needs-explained/ 
    needs: ['user'], 
    
    // in the template we used a {{action closeEditing}} tag wich will trigger this method on click 
    closeEditing: function(){
        // sets the parent controller editMode to false
        this.get('controllers.user').set('editMode', false); 
        // and then goes back to the previous route 
        this.transitionToRoute('user'); 
        // this will save modifications we made while editing the user 
        this.get('store').commit();
    }
});

App.UsersCreateController = Ember.ObjectController.extend({
    addUser: function(){
        App.User.createRecord(this.content);
        this.transitionToRoute('user');
    }
});


// ----------------- \
// VIEWS
// ----------------- \


App.UserView = Ember.View.extend({
    didInsertElement: function(){
        //$elem = this.$();
        
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
                    var newY = currX-oldX;
                    //console.log('%d - %d = %d', currY, oldY, currY-oldY);
                    //console.log('newX > ',newX);
                    //console.log('newY > ',newY);

                    $elem.css({
                        '-webkit-transform':'rotateX('+newX+'deg) rotateY('+newY+'deg)',
                        '-moz-transform':'rotateX('+newX+'deg) rotateY('+newY+'deg)',
                        'transform':'rotateX('+newX+'deg) rotateY('+newY+'deg)'
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

App.ConfirmDeleteButtonView = Ember.View.extend({
    // here we can handle the click event on the view
    // and do almost every thing we want with regular jQuery
    click: function(){
        // In Ember the jQuery-ish $(this) is a bit different, it's : this.$()
        var $thisParent = this.$().parents('.user-profile');
        
        // now we can add an animation to any div as we would do with regular jQuery
        $thisParent.addClass('delete-animation');
        
        // we know our delete-animation will take 500ms seconds to complete
        // Ember.run.later is ember's equivalent to setTimout
        Ember.run.later(this, function() {
            // and when the animation is done we can call the controller to trigger its confirmDelete method
            this.get('controller').confirmDelete();
        }, 500);
    }
});

