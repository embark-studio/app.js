var Controller = {
  add: function (controllerName, actions) {
    var c = this;
    Object.keys(actions).forEach(function(action) {
      c[controllerName + '#' + action] = actions[action];
    });
  }
};

module.exports = Controller;
