var assert = require('assert');
var MockBrowser = require('mock-browser').mocks.MockBrowser

var mock = new MockBrowser()
window = mock.getWindow()
global.window = window
global.location = window.location
global.document = window.document
global.navigator = window.navigator

var App = require("../index")

describe('Main', function() {
  describe('Require Modules', function() {
    it('App', function() {
      assert.ok(App.start);
    });
    it('Component', function() {
      assert.ok(App.Component.add);
      assert.ok(window.Component.add);
    });
    it('Cookie', function() {
      assert.ok(App.Cookie.set);
    });
    it('Model', function() {
      assert.ok(App.Model.find);
    });
    it('Router', function() {
      assert.ok(App.Router.addRoute);
    });
    it('View', function() {
      assert.ok(App.View.add);
    });
    it('jQuery', function() {
      assert.ok(App.jQuery.fn);
    });
    it('Page', function() {
      assert.ok(App.Page);
      assert.ok(window.page);
    });
  });



});
