// first things first: let's create our app
window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

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
    // nextClient: Ember.Route.transitionTo('clients.client'), 
    model: function(params){
        var clientId = parseInt(params.client_id);
        return App.Clients.findById(clientId);
    }, 
    events: { 
        nextClient: function(client){ 
            this.transitionTo('client', client);
        } 
    }

}); 

// let's declare the clients class
App.Clients = Ember.Object.extend({
    id: 0,
    name: "", 
    address: ""
});
// let's give it some static methods so we can call it later
// http://emberjs.com/guides/object-model/reopening-classes-and-instances/
// as we are not using Ember-Data let's create some convenient methods to access our json datas
// to convert them into ember objects
App.Clients.reopenClass({
    findById: function(id){
        /*debugger;
        var clientProxy = Ember.ObjectProxy.create({ 
            content: App.Clients.create({ id: id })
        });
        this.findAll().then(function(clients){
            clientProxy.set('content', clients[id - 1]);
        });
        return clientProxy;*/
        return App.Clients.create({ id:id });
    }, 
    findAll: function(){ 
        return $.getJSON('/json/clients.json').then(
            // everything went fine...
            function(json) {
                var emberClients = [];
                var len = json.length;
                for (var i=0; i<len; i++){
                    emberClients.push( App.Clients.create(json[i]) );
                }
                return emberClients;
            }, 
            // something went wrong...
            function(err) {
                throw new Error( 'json file status is: ' + err.state() );
            }
        );
    }
});

// pay attention to the handlbars data-template-name="clients" template 
// see the {{#each client in controller}} tag? In this case controller = ClientsController
App.ClientsController = Ember.ArrayController.extend();

App.ClientController = Ember.ObjectController.extend({
    goToNext: function(){
        var id = this.get('id');
        debugger;
        var nextClient = App.Clients.findById(id);
        this.send( 'nextClient', nextClient );
        // Ember.Route.transitionTo('clients.client', nextClient);
    }
});


App.ClientView = Ember.View.extend({
    classNames: ['client-profile', 'flip'], 
    
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


