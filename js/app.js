// first things first: let's create our app
window.App = Ember.Application.create();

// this is where we declare our routes
App.Router.map(function(){
    this.resource('clients', function(){
        this.resource('client', { path:'/:client_id' });
    });
});

// we can customize what's happening when accessing the client route
// http://emberjs.com/guides/routing/specifying-a-routes-model/
App.ClientsRoute = Ember.Route.extend({
    setupController:function(controller){
        App.Clients.findAll().done(function(clients){
            // when the AJAX call is done fill the content property with our "ember converted" clients
            controller.set('content', clients);
        });
    }
});
App.ClientRoute = Ember.Route.extend({
    model: function(params){
        return params.client_id;
    }, 
    setupController: function(controller, params){
        var clientId = parseInt(params);

        App.Clients.findById(clientId).done(function(client){
            controller.set('content', client);
        });
    }, 
    serialize: function(id){
        return { client_id: id }
    }
});

// let's declare the clients class
App.Clients = Ember.Object.extend({
    id: 0,
    name: "", 
    address: ""
});
// let's give it a static method so we can call it later
// http://emberjs.com/guides/object-model/reopening-classes-and-instances/
// here we create a findAll method, its goal is to retreive the datas from clients.json
// and to convert the json objects into ember objects
App.Clients.reopenClass({
    findById: function(id){
        return this.findAll().then(function(clients){
            return clients[id];
        });
    }, 
    findAll: function(){ 
        return $.getJSON('/json/clients.json').then(function(json){
            var emberClients = [];
            var len = json.length;
            for (var i=0; i<len; i++){
                emberClients.push( App.Clients.create(json[i]) );
            }
            return emberClients;
        }, function(err){
            // something went wrong...
            throw new Error( 'json file status is: ' + err.state() );
        });
    }
});

// pay attention to the handlbars data-template-name="clients" template 
// see the {{#each client in controller}} tag? In this case controller = ClientsController
App.ClientsController = Ember.ArrayController.extend();

App.ClientController = Ember.ObjectController.extend();


App.ClientView = Ember.View.extend({
    classNames: ['client-profile', 'flip'], 
    rangeSliderValue: 35, // degrees
    
    didInsertElement: function(){
        var $elem = this.$();
        
        /* rotate things with mousemove for debug mode */
        $(window).on('mousedown mouseup', function(e){
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
        });
    }
});

App.ClientSliderView = Ember.View.extend({
    // values are representing degrees units
    defaultValue: 35, 
    minValue: 0,
    maxValue: 360
});


