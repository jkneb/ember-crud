// first things first: let's instantiate our app
window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ConfirmBoxComponent = Ember.Component.extend({

    isVisible: false,

    actions: {
      cancelDelete: function(){
        this.toggleProperty('isVisible');
      },

      confirmDelete: function(){
        // In Ember the jQuery-ish $(this) is a bit different, it's: this.$()
        var $thisParent = this.$().parents('.user-profile');

        $thisParent.removeAttr('style').addClass('delete-animation');

        // we know our delete-animation will take 900ms seconds to complete
        // and Ember.run.later is Ember's setTimeout equivalent
        Ember.run.later(this, function() {
            // when the animation is done we can call the controller to trigger its confirmDelete action
            this.sendAction('action', this.get('param'));
        }, 900);
      }
    }
});
// the modal component has a {{yield}} (in the template) where content can be encapsulated by the {{#modal-box}}...{{/modal-box}} block tags
App.ModalBoxComponent = Em.Component.extend({

    // the isModalVisible property depends on the modalVisible property set inside the modal-demo controller
    // the modal-demo controller is instantiated by the {{render}} helper located inside the application template
    // the applicationRoute holds the showModal action which can be called from anywhere by passing the name of the modal as the first argument of the action (see the action at the end of the users template)
    isModalVisible: false,

    actions: {
        hideModal: function(){
            this.set('isModalVisible', false);
        }
    }
});

// our nested user route will render only a single user at a time so it's an ObjectController
App.UserController = Ember.ObjectController.extend({
    // editMode / deleteMode properties are used in the user template 
    // we use them to manage css transitions when entering and exiting the edit route
    // see also the UserCreateAndEditRoute for more
    editMode: false,

    deleteMode: false,

    actions: {
        delete: function(){
            this.toggleProperty('deleteMode');
        },
        cancelDelete: function(){
            this.set('deleteMode', false);
        },
        confirmDelete: function(){
            // delete a user
            this.get('model').deleteRecord();
            this.get('model').save();
            // then transition to the UsersRoute
            this.transitionToRoute('users');
            // set deleteMode back to false
            this.set('deleteMode', false);
        }
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
    // we want this controller to inherit from another controller 
    // in this case it's userController 
    // http://emberjs.com/guides/controllers/dependencies-between-controllers/ 
    // http://darthdeus.github.com/blog/2013/01/27/controllers-needs-explained/ 
    needs: ['user'], 
    
    // in the template we used an {{action "save"}} wich will trigger these methods on click
    actions: {
        save: function(){
            var user = this.get('model');
            // this will save modifications we made while editing the user
            user.save();
            // then transition to UserRoute
            this.transitionToRoute('user', user);
        }
    }
});
// This controller is an ArrayController because it handles a collection of models.
// Usually you'll use an ObjectController which deals with single model.
// Ember is able to guess we are dealing with multiple models and can genereate this one in memory, so we could omit to declare this one, but here in addition of declaring it we also set some sorting properties (so declaration can't be omitted).
App.UsersController = Em.ArrayController.extend({
    // here we tell the controller to sort Users by alphabetical order
    sortProperties: ['name'],
    sortAscending: true, 
    // usersCount is a computed property that returns the number of users
    usersCount: function(){
        return this.get('model.length');
    }.property('@each')
});
App.UsersCreateController = Ember.ObjectController.extend({
    needs: ['user'],

    actions: {
        save: function () {
            // just before saving, we set the creationDate
            this.get('model').set('creationDate', new Date());
            // create a new user and save it
            var newUser = this.store.createRecord('user', this.get('model'));
            newUser.save();

            // redirects to the user itself
            this.transitionToRoute('user', newUser);
        }
    }
});

// ----------------
// For static datas you can use basic helpers
// ----------------


// this helper takes a raw date and format it with the moment.js library -> `2 days ago`
Ember.Handlebars.helper('formatDate', function(date){
    return moment(date).fromNow();
});


// ----------------
// For datas that can be data-binded you should use BoundHelpers
// ----------------

// this helper takes a raw price and format it with 2 digits -> `0.00`
/* Ember.Handlebars.registerBoundHelper('formatPrice', function(price){
    return parseFloat(price).toFixed(2);
});
*/

// this helper takes a raw date and format it with the moment.js library -> `August 9 2013`
/* Ember.Handlebars.registerBoundHelper('formatDate', function(date){
    return moment(date).format('LL');
});
*/
// the model for a user
App.User = DS.Model.extend({
    name   : DS.attr('string'),
    email  : DS.attr('string'),
    bio    : DS.attr('string'),
    avatarUrl : DS.attr('string'),
    creationDate : DS.attr('date')
});

// These are fakes datas for the FixtureAdapter.
// The FixtureAdapter lets you work with fake datas while in development stage.
/*App.User.FIXTURES = [
    {
        id: 1,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Fri Aug 09 2013 15:13:16 GMT+0200 (CEST)'
    }, 
    {
        id: 2,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Fri Aug 07 2013 10:10:10 GMT+0200 (CEST)'
    },
    {
        id: 3,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Mon Aug 17 2012 15:43:12 GMT+0200 (CEST)'
    }, 
    {
        id: 4,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Tue May 22 2013 12:12:12 GMT+0200 (CEST)'
    },
    {
        id: 5,
        name: 'Dean Winchester',
        email: 'deany@plopmail.com',
        bio: ':)',
        avatarUrl: './assets/images/avatars/dean.jpg',
        creationDate: 'Mon Jan 30 2013 12:12:12 GMT+0200 (CEST)'
    },
    {
        id: 6,
        name: 'John Doe',
        email: 'john@doe.com',
        bio: 'Sed do eiusmod tempor velit esse cillum dolore eu fugiat pariatur.',
        avatarUrl: './assets/images/avatars/default.png',
        creationDate: 'Tue May 22 2013 12:12:12 GMT+0200 (CEST)'
    },
    {
        id: 7,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Mon Apr 02 2012 12:12:12 GMT+0200 (CEST)'
    }, 
    {
        id: 8,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Tue Jun 12 2012 12:12:12 GMT+0200 (CEST)'
    },
    {
        id: 9,
        name: 'John Doe',
        email: 'john@doe.com',
        bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatarUrl: './assets/images/avatars/default.png',
        creationDate: 'Mon Aug 17 2013 15:43:12 GMT+0200 (CEST)'
    },
    {
        id: 10,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Mon Aug 17 2013 15:43:12 GMT+0200 (CEST)'
    }, 
    {
        id: 11,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Mon Aug 17 2013 15:43:12 GMT+0200 (CEST)'
    },
    {
        id: 12,
        name: 'John Doe',
        email: 'john@doe.com',
        bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatarUrl: './assets/images/avatars/default.png',
        creationDate: 'Mon Aug 12 2013 15:43:12 GMT+0200 (CEST)'
    },
    {
        id: 13,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Mon Oct 12 2013 13:13:13 GMT+0200 (CEST)'
    }, 
    {
        id: 14,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Tue May 22 2013 12:12:12 GMT+0200 (CEST)'
    },
    {
        id: 15,
        name: 'John Doe',
        email: 'john@doe.com',
        bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatarUrl: './assets/images/avatars/default.png',
        creationDate: 'Thu Sep 17 2013 11:11:11 GMT+0200 (CEST)'
    }
];*/

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
// the applicationRoute is the highest route possible
// here we use it to store some global events for our app
App.ApplicationRoute = Em.Route.extend({
    actions: {
        showModal: function(name){
            this.controllerFor(name).set('modalVisible', true);
        },
        goBack: function(){
            this.transitionTo('users');
        }
    }
});
// no need of a home page so we redirect "/" to "/users"
App.IndexRoute = Ember.Route.extend({
    redirect: function(){
        this.transitionTo('users');
    }
});
App.UserRoute = Ember.Route.extend({
    // this route model is auto generated by Ember internally (in memory) 
    // because we followed Ember's naming conventions 
    // so we could omit to set the model hook
    model: function(params) { 
        return this.store.find('user', params.user_id);
    },

    // each route has this goBack event to transition to the correct "parent route"
    actions: {
        goBack: function(){
            this.transitionTo('users');
        }
    }
});

// this route will be used by the edit AND the create route
// in other words the edit and the create routes will inherit from this one
App.UserCreateAndEditRoute = Ember.Route.extend({
    // when trying to manually access the route
    activate: function(){
        this.controllerFor('user').setProperties({
            'editMode': true,
            'deleteMode': false
        });
    },
    // when trying to manually leave the route
    deactivate: function(){
        this.controllerFor('user').setProperties({
            'editMode': false,
            'deleteMode': false
        });
    }
});
// the UserEditRoute is an extend of the UserCreateAndEditRoute
App.UserEditRoute = App.UserCreateAndEditRoute.extend({
    model: function() {
        // here we tell the route to use its parent model
        return this.modelFor('user');
    },
    actions: {
        goBack: function(){
            this.transitionTo('user');
        }
    }
});
// each route has this `model` hook where you specify which Model the route needs to load
// http://emberjs.com/guides/routing/specifying-a-routes-model/
App.UsersRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('user');
    }
});
// the UsersCreateRoute is an extend of the UserCreateAndEditRoute
App.UsersCreateRoute = App.UserCreateAndEditRoute.extend({
    model: function(){
        // the model for this route is a new empty Ember.Object
        return Em.Object.create({});
    },
    
    // in this case (the create route) we can re-use the user/edit template
    // associated with the usersCreateController
    renderTemplate: function(){
        this.render('user.edit', {
            controller: 'usersCreate'
        });
    }
});
// App.ApplicationAdapter = DS.FixtureAdapter;

// in this demo we are using the LocalStorageAdapter to persist data
App.ApplicationAdapter = DS.LSAdapter;
/*
 * The touch code logic is originally coming from this guy: http://evanyou.me
 * Who made this awesome demo: http://sketch.evanyou.me/layers
 * I tweaked it so it can fit the needs of a draggable panel
*/

App.DraggableView = Em.View.extend({

    // touch gestures properties
    startX      : 0,
    dist        : 0,
    active      : null,
    maxDist     : 250,
    threshold   : 40,
    activeWidth : null,

    didInsertElement: function(){
        var view = this;
        var $view = this.$().find('.pane');

        var dragTrigger = '<div class="mobile-drag-trigger"></div>';
        $(dragTrigger).appendTo($view);

        Em.run.later($view, function(){
            $view.css({ '-webkit-transform': 'translate3d(-100%, 0, 0)' });
        }, 100);
    },

    touchStart: function(event){
        var touchEvent = event.originalEvent.changedTouches[0];
        var layer = $(touchEvent.target).closest('.mobile-drag-trigger')[0];
        if (layer) {
            this.active = $(layer).parents('.pane')[0];
            this.onStart(event, touchEvent);
            this.activeWidth = $(this.active).outerWidth();
        }
    },

    touchMove: function(event){
        event.preventDefault();
        if (!this.active) return;
        this.onMove(event, event.originalEvent.changedTouches[0]);
    },

    touchEnd: function(event){
        if (!this.active) return;
        this.onEnd(event);
    },

    onStart: function(e,d) {
        e.stopPropagation();
        this.startX = d.pageX;
        this.active.classList.add('drag');
    },

    onMove: function(e,d) {
        e.stopPropagation();
        this.dist = (d.pageX - this.startX) / 2;

        // drag ⇚
        if (this.dist > 0) { 
            this.active.style.webkitTransform = 'translate3d(' + (-this.activeWidth + this.dist) + 'px, 0, 0)';
        } 
        // drag ⇛
        else { 
            this.active.style.webkitTransform = 'translate3d(' + (-this.activeWidth + this.dist) + 'px, 0, 0)';
        }
    },

    onEnd: function(e) {
        e.stopPropagation();
        this.active.classList.remove('drag');

        // dragged ⇛
        if (this.dist >= this.threshold) { 
            this.active.classList.remove('active');
            this.goBackAfterTransition('collapsePanel');
        }
        // dragged ⇚
        else { 
            this.openPanel();
        }

        this.dist = 0;
        this.active = null;
    },
    
    collapsePanel: function(){
        this.active.style.webkitTransform = 'translate3d(0%, 0, 0)';
    },
    
    openPanel: function(){
        this.active.style.webkitTransform = 'translate3d(-100%, 0, 0)';
    },
    
    goBackAfterTransition: function(transitionType){
        if (transitionType === 'collapsePanel' || !transitionType) {

            this.collapsePanel();

            Em.run.later(this, function(){
                // there is no goBack method in the controller so it will bubble up to routes
                // until it finds the goBack event located in the ApplicationRoute
                this.get('controller').send('goBack');
            }, 600);

        }
    }, 
    
    actions: {
        closeUserWithTransition: function(){
            this.$().find('.pane').css({ '-webkit-transform': 'translate3d(0%, 0, 0)' });

            Em.run.later(this, function(){
                this.get('controller').send('goBack');
            }, 600);
        },

        saveWithTransition: function(){
            var controller = this.get('controller');

            this.$().find('.pane').css({ '-webkit-transform': 'translate3d(0%, 0, 0)' });

            Em.run.later(this, function(){
                controller.send('save');
                controller.send('goBack');
            }, 600);
        }
    }
    
});
// only inherit from the DraggableView
App.UserView = App.DraggableView.extend({

    didInsertElement: function(){
        // the didInsertElement hook is the guarantee that the view is in the DOM. 
        // So from here, you can perform any DOM manipulation 
        // or what ever you want with or without jQuery.
    }
});

// only inherit from the DraggableView
App.UserEditView = App.DraggableView.extend();