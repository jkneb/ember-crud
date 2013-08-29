describe('AUserFormRoute',function(){
    var userCtrl;
    var userEditRoute;

    beforeEach(function(){
        var container = new Em.Container();

        container.register("controller:user", Em.Object.extend({
            editMode: undefined,
            deleteMode: undefined
        }));

        userEditRoute = App.UserCreateAndEditRoute.create({
            router : {
                container:container,
                router:{}
            },
            container:container
        });

        userCtrl = container.lookup('controller:user');
    });

    afterEach(function(){
        userEditRoute = userCtrl = null;
    });

    it('activate should change value of editMode and deletedMode',function(){

        userCtrl.setProperties({
            editMode: false,
            deleteMode: true
        });
        userEditRoute.activate();
        userCtrl.get('editMode').should.be.true;
        userCtrl.get('deleteMode').should.be.false;
    });

    it('desactivate should change value of editMode and deleteMode',function(){
        userCtrl.setProperties({
            editMode: true,
            deleteMode: true
        });
        userEditRoute.deactivate();
        userCtrl.get('editMode').should.be.false;
        userCtrl.get('deleteMode').should.be.false;
    })
});