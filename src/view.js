var reactHelpers = require("./react-helpers");

var View = {
  add: function(key, component){
    component.displayName = key
    component.mixins = component.mixins || [];
    component.mixins = component.mixins.concat([Store.ReactMixin, reactHelpers.mergeState]);
    this[key] = React.createClass(component);
  }
}

module.exports = View;
