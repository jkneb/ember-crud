// first things first: let's create our app
window.App = Ember.Application.create();

// this is where we declare our routes
App.Router.map(function(){
    this.resource("client");
});

// we can customize what's happening when accessing the client route
// http://emberjs.com/guides/routing/specifying-a-routes-model/
App.ClientRoute = Ember.Route.extend({
    model:function(){
        return App.Context.get('clients');
    }
});

// let's declare a client class
App.Client = Ember.Object.extend({
    id: 0,
    name: "", 
    address: ""
});
// let's give it a static method so we can call it later
// http://emberjs.com/guides/object-model/reopening-classes-and-instances/
// here we create a findAll method, its goal is to retreive the datas from clients.json
App.Client.reopenClass({
    findAll: function(){
        return $.getJSON('/json/clients.json').then(function(json){
            var emberClients = [];
            var len = json.length;
            for (var i=0; i<len; i++){
                emberClients.push( App.Client.create(json[i]) );
            }
            return emberClients;
        });
    }
});

App.Context = Ember.Object.create({
   clients: []
});

// we need a controller to give datas to the view 
// pay attention to the handlbars template : {{#each client in controller}}
// the {{each}} loop (in the client template) is pointing to the ClientController
App.ClientController = Ember.ArrayController.extend({
    contentBinding:'App.Context.clients'
});


// App.ready will act as our init 
App.ready = function(){
    
    // now when a user acces the app for the first time we need to call our Client.findAll() method
    
    App.Client.findAll()
        .done(function(clients){
            // when the AJAX call is done fill the clients property (of the context object) with our "ember converted" clients
            App.Context.set('clients', clients);
        })
        .fail(function(err){
            // something went wrong...
            throw new Error( 'json file status is: ' + err.state() );
        });
    
};