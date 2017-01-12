var reactHelpers = require("./react-helpers");

var Component = {
  add: function(naming, content){
    var names = naming.split(".");
    var scope = window;

    content.displayName = naming;
    names.forEach(function(name, i){
      if(i == names.length - 1){
        content.mixins = content.mixins || [];
        content.mixins = content.mixins.concat([Store.ReactMixin, reactHelpers.mergeState, reactHelpers.handleParam])
        scope[name] = React.createClass(content)
      }else{
        scope[name] = scope[name] || Object()
        scope = scope[name]
      }
    })
  }
}

module.exports = Component;
