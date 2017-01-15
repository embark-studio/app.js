require("html5-history-api");
var App = require("./src/app");
var Controller = require("./src/controller");
var Component = require("./src/component");
var Cookie = require("./src/cookie");
var jQuery = require("./src/jquery");
var Model = require("./src/model");
var Router = require("./src/router");
var View = require("./src/view");
var React = require("react");
var ReactDOM = require("react-dom");
var Page = require("page");
var Promise = require('es6-promise').Promise;
var Store = require("simple-store");

App.Promise = Promise;
window.Promise = Promise;

var subdomain = window.location.host.split(".")[0]

App.host = location.host.split(".")
App.host.shift()
App.host = App.host.join(".")
App.subdomain = location.host.split(".")[0]

window.Component = Component;
App.Component = Component;
window.Component = App.Component;

App.Cookie = Cookie
window.Cookie = App.Cookie

App.jQuery = jQuery;
window.jQuery = jQuery;
window.$ = window.jQuery;

window.Model = Model;
App.Model = Model;

App.Router = Router;

App.View = View;

App.React = React;
App.ReactDOM = ReactDOM;
window.React = React;
window.ReactDOM = ReactDOM;

App.Page = Page;
window.page = Page;
App.Store = Store;

App.Controller = Controller;

module.exports = App;
