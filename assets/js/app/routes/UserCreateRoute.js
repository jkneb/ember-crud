App.UsersCreateRoute = Em.Route.extend({
    model:function(){
        // Model will create a "template" of User object with an id already computed
        return Em.Object.create({
            id: new Date().getTime()
        });
    }
})