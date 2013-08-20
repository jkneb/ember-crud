App.UsersCreateController = Em.ObjectController.extend({
   save : function(){
       this.get('content').set('creationDate', new Date());
       App.User.createRecord(this.get('content'));
   }
});