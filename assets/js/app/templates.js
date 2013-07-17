this["App"] = this["App"] || {};
this["App"]["TEMPLATES"] = this["App"]["TEMPLATES"] || {};

this["App"]["TEMPLATES"]["assets/js/app/templates/user/create.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"user-create pane flipin\">\n    <div class=\"line\">\n        <h3>Add a new user</h3>\n    </div>\n    <div class=\"line\">\n        <label for=\"avatarUrl\">Choose user avatar</label>\n        ";
  options = {hash:{
    'valueBinding': ("avatarUrl")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options) : helperMissing.call(depth0, "view", ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options)))
    + "\n    </div>\n    <div class=\"line\">\n        <label for=\"name\">User name</label>\n        ";
  options = {hash:{
    'valueBinding': ("name")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options) : helperMissing.call(depth0, "view", ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options)))
    + "\n    </div>\n    <div class=\"line\">\n        <label for=\"email\">User email</label>\n        ";
  options = {hash:{
    'valueBinding': ("email")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options) : helperMissing.call(depth0, "view", ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options)))
    + "\n    </div>\n    <div class=\"line\">\n        <label for=\"bio\">User short bio</label>\n        ";
  options = {hash:{
    'valueBinding': ("bio")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextArea), options) : helperMissing.call(depth0, "view", ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextArea), options)))
    + "\n    </div>\n    <div class=\"line\">\n        <button class=\"blue fright\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.action || depth0.action),stack1 ? stack1.call(depth0, depth0.addUser, options) : helperMissing.call(depth0, "action", depth0.addUser, options)))
    + ">add user</button>\n    </div>\n    ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, depth0.faces, options) : helperMissing.call(depth0, "partial", depth0.faces, options)))
    + "\n</div>\n";
  return buffer;
  });

this["App"]["TEMPLATES"]["assets/js/app/templates/user/edit.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"line\">\n    <h3>Edit user</h3>\n</div>\n<div class=\"line\">\n    <label for=\"avatarUrl\">Choose user avatar</label>\n    ";
  options = {hash:{
    'valueBinding': ("avatarUrl")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options) : helperMissing.call(depth0, "view", ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options)))
    + "\n</div>\n<div class=\"line\">\n    <label for=\"name\">User name</label>\n    ";
  options = {hash:{
    'valueBinding': ("name")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options) : helperMissing.call(depth0, "view", ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options)))
    + "\n</div>\n<div class=\"line\">\n    <label for=\"email\">User email</label>\n    ";
  options = {hash:{
    'valueBinding': ("email")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options) : helperMissing.call(depth0, "view", ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextField), options)))
    + "\n</div>\n<div class=\"line\">\n    <label for=\"bio\">User short bio</label>\n    ";
  options = {hash:{
    'valueBinding': ("bio")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextArea), options) : helperMissing.call(depth0, "view", ((stack1 = depth0.Ember),stack1 == null || stack1 === false ? stack1 : stack1.TextArea), options)))
    + "\n</div>\n<div class=\"aright\">\n    <button class=\"blue\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.action || depth0.action),stack1 ? stack1.call(depth0, depth0.closeEditing, options) : helperMissing.call(depth0, "action", depth0.closeEditing, options)))
    + " title=\"Save modifications\"> ok </button>\n</div>\n";
  return buffer;
  });

this["App"]["TEMPLATES"]["assets/js/app/templates/user/user.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <div class=\"confirm-box confirmin\">\n        <h4>Really?</h4>\n        ";
  options = {hash:{
    'tagName': ("button")
  },inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.view || depth0.view),stack1 ? stack1.call(depth0, ((stack1 = depth0.App),stack1 == null || stack1 === false ? stack1 : stack1.ConfirmDeleteButtonView), options) : helperMissing.call(depth0, "view", ((stack1 = depth0.App),stack1 == null || stack1 === false ? stack1 : stack1.ConfirmDeleteButtonView), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        <button ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.action || depth0.action),stack1 ? stack1.call(depth0, depth0.cancelDelete, options) : helperMissing.call(depth0, "action", depth0.cancelDelete, options)))
    + " title=\"no\">n</button>\n    </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "y";
  }

  buffer += "\n"
    + "\n"
    + "\n"
    + "\n<div ";
  options = {hash:{
    'class': (":user-profile :pane editMode:scaleout:flipin")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.bindAttr || depth0.bindAttr),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options)))
    + ">\n    <div class=\"tools aright\">\n        <button ";
  options = {hash:{
    'class': (":icon-trashcan :red deleteMode:active")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.bindAttr || depth0.bindAttr),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options)))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.action || depth0.action),stack1 ? stack1.call(depth0, depth0['delete'], options) : helperMissing.call(depth0, "action", depth0['delete'], options)))
    + " title=\"Delete user\"></button>\n        <button ";
  options = {hash:{
    'class': (":icon-pencil editMode:active")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.bindAttr || depth0.bindAttr),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options)))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.action || depth0.action),stack1 ? stack1.call(depth0, depth0.edit, options) : helperMissing.call(depth0, "action", depth0.edit, options)))
    + " title=\"Edit user\"></button>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, depth0.deleteMode, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n    <div class=\"img\"><img ";
  options = {hash:{
    'src': ("avatarUrl")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.bindAttr || depth0.bindAttr),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options)))
    + "></div>\n    <h2>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h2>\n    <address>";
  if (stack2 = helpers.email) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.email; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</address>\n    <p class=\"bio\">";
  if (stack2 = helpers.bio) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.bio; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n\n    "
    + "\n    "
    + "\n    "
    + "\n    ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, depth0.faces, options) : helperMissing.call(depth0, "partial", depth0.faces, options)))
    + "\n\n    "
    + "\n    <div class=\"cloned-views\"></div>\n</div>\n\n"
    + "\n<div ";
  options = {hash:{
    'class': (":user-edit :pane editMode:shown:hidden")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.bindAttr || depth0.bindAttr),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options)))
    + ">\n    ";
  if (stack2 = helpers.outlet) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.outlet; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n</div>\n";
  return buffer;
  });

this["App"]["TEMPLATES"]["assets/js/app/templates/user/users.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n            <i class=\"icon-plus\"></i><span>⬅ Add user</span>\n        ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n        <li>\n        "
    + "\n        "
    + "\n        "
    + "\n        "
    + "\n        ";
  options = {hash:{
    'class': ("fadein")
  },inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "user", depth0.user, options) : helperMissing.call(depth0, "linkTo", "user", depth0.user, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </li>\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            "
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n        ";
  return buffer;
  }

  buffer += "<div ";
  options = {hash:{
    'class': (":main controllers.user.editMode:editing")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.bindAttr || depth0.bindAttr),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options)))
    + ">\n\n    <div class=\"tools\">\n        ";
  options = {hash:{
    'class': ("button blue create-btn"),
    'title': ("Add a new user")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "users.create", options) : helperMissing.call(depth0, "linkTo", "users.create", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n\n    "
    + "\n    "
    + "\n    <ul class=\"users-listing\">\n\n        "
    + "\n        ";
  stack2 = helpers.each.call(depth0, depth0.user, depth0['in'], depth0.controller, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n    </ul>\n\n    "
    + "\n    <div class=\"user-pane\">\n        ";
  if (stack2 = helpers.outlet) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.outlet; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n    </div>\n\n</div>\n";
  return buffer;
  });