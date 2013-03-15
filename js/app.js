window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function(){
    this.resource("client");
});

App.ApplicationView = Ember.View.extend({
    
});

App.ClientModel = Ember.Object.extend({
    //id: null,
    //name: null, 
    //adress: null
});
App.ClientModel.reopen({
    /*clients: [],
    findAll: function(){
        $.getJSON('/json/clients.json', function(data){
            console.log(data);
            clients.addObjects()
            return data;
        });
    }*/
});
App.ClientController = Ember.ArrayController.extend({
    //content: App.ClientModel,
    //clients: App.ClientModel.findAll()
});
App.ClientView = Ember.View.extend({
    findAll: function(){
        $.getJSON('/json/clients.json', function(data){
            console.log(data);
            //clients.addObjects()
            return data;
        });
    }, 
    
    didInsertElement: function(){
        debugger;
        console.log('ClientView loaded');
        //this.findAll();
        (function(){
            $.getJSON('/json/clients.json', function(data){
                console.log(data);
            });
        })();
    }
});
