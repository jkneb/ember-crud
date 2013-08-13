describe ('UsersController', function(){
    var usersCtrl = null, userCtrl = null;

    beforeEach(function(){
        var container = new Em.Container ();
        container.register("controller:users", Em.Object);
        container.register("controller:users", App.UsersController);
        userCtrl = container.lookup("controller:user");
        usersCtrl = container.lookup("controller:users");
    });
});