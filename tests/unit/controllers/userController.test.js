var should = chai.should();

describe ('UserController', function(){


    var userCtrl = null;

    beforeEach(function(){
        userCtrl = App.UserController.create();
    });

    it('delete should toggle deleteMode property', function (){
        userCtrl.get('deleteMode').should.be.false;
        userCtrl.delete();
        userCtrl.get('deleteMode').should.be.true;
        userCtrl.delete();
        userCtrl.get('deleteMode').should.be.false;
    });

    it('cancelDelete should set deleteMode property to false', function (){
        userCtrl.set('deleteMode', true);
        userCtrl.cancelDelete();
        userCtrl.get('deleteMode').should.be.false;
    });

    it('confirmDelete should delete record and transition to users', function (){
        var deleteRecordCall = 0,
            transitionToRouteCall = 0
        userCtrl.setProperties({
            content:{
                deleteRecord:function(){ deleteRecordCall++; }
            },
            target:{
                transitionToRoute:function(route) {
                    route.should.equal('users');
                    transitionToRouteCall++;
                }
            }
        });
        userCtrl.confirmDelete();
        deleteRecordCall.should.equal(1);
        transitionToRouteCall.should.equal(1);
    });

    it('edit should set deleteMode to false and editMode to true then transition to user.edit', function (){
        var transitionToRouteCall = 0
        userCtrl.setProperties({
            target:{
                transitionToRoute:function(route) {
                    route.should.equal('user.edit');
                    transitionToRouteCall++;
                }
            }
        });
        userCtrl.edit();
        userCtrl.get('deleteMode').should.be.false;
        userCtrl.get('editMode').should.be.true;
        transitionToRouteCall.should.equal(1);
    });
});