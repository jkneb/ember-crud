// first things first: let's create our app
window.App = Ember.Application.create();

// this is where we declare our routes
App.Router.map(function(){
    this.resource('clients', function(){
        this.resource('client', { path:'/:client_id' });
    });
});

// get rid of the /#/ in the urls
/*App.Router.reopen({ 
    location: 'history' 
});*/

// we can customize what's happening when accessing the client route
// http://emberjs.com/guides/routing/specifying-a-routes-model/
App.ClientsRoute = Ember.Route.extend({
    model:function(){
        return App.Context.get('clients');
    }
});
App.ClientRoute = Ember.Route.extend({
    model: function(params){
        var clientId = parseInt(params.client_id);
        return App.Context.get('clients')[clientId];
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
    findAll: function(){ 
        return $.getJSON('/json/clients.json').then(function(json){
            var emberClients = [];
            var len = json.length;
            for (var i=0; i<len; i++){
                emberClients.push( App.Clients.create(json[i]) );
            }
            return emberClients;
        });
    }
});

App.Context = Ember.Object.create({
   clients: []
});

// pay attention to the handlbars data-template-name="clients" template 
// see the {{#each client in controller}} tag? In this case controller = ClientsController
App.ClientsController = Ember.ArrayController.extend({
    contentBinding:'App.Context.clients'
});

App.ClientController = Ember.ObjectController.extend();


App.ClientView = Ember.View.extend({
    classNames: ['client-profile', 'flip'], 
    
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
                    console.log('%d - %d = %d', currY, oldY, currY-oldY);
                    console.log('newX > ',newX);
                    //console.log('newY > ',newY);

                    $elem.css({
                        '-webkit-transform':'rotateY(-35deg) rotateX(-'+newX+'deg)',
                        '-moz-transform':'rotateY(-35deg) rotateX(-'+newX+'deg)',
                        'transform':'rotateY(-35deg) rotateX(-'+newX+'deg)'
                    });
                });

            } else {
                // console.log('mouseup');
                $this.off('mousemove');
                $elem.removeClass('unselectable');
            }

            return false;
        });
    }
});


// App.ready will act as our init 
App.ready = function () {
    
    // now when a user acces the app for the first time we need to call our Client.findAll() method
    
    App.Clients.findAll()
        .done(function(clients){
            // when the AJAX call is done fill the clients property (of the context object) with our "ember converted" clients
            App.Context.set('clients', clients);
        })
        .fail(function(err){
            // something went wrong...
            throw new Error( 'json file status is: ' + err.state() );
        });
    
};