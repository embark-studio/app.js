var Router = {
  construct: {},
  addRoute: function(key, action){
    this.construct[key] = {
      component: App.View[action]
    }
  }
}

module.exports = Router;
