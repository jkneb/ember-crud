App.UsersCreateRoute = App.AUserFormRoute.extend({
    model:function(){
        // Model will create a "template" of User object with an id already computed
        return Em.Object.create({
            id: new Date().getTime()
        });
    },
    renderTemplate:function(){
        this.render('user.edit',{
            controller:'usersCreate'
        });
    }
});