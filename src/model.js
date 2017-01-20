"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(item) {
    _classCallCheck(this, Model);

    var schema = this.schema();
    var m = this;
    Object.keys(schema).forEach(function (key) {
      m[key] = item[key];
    });

    return this;
  }

  _createClass(Model, [{
    key: "toJSON",
    value: function toJSON() {
      var schema = this.schema();
      var item = {};
      var m = this;
      Object.keys(schema).forEach(function (key) {
        item[key] = m[key];
      });

      return item;
    }
  }, {
    key: "save",
    value: function save() {
      var m = this;
      return new Promise(function (resolve, reject) {
        m.constructor.client.update({ id: m.id }, m.toJSON())
        .then(function (response) {
          resolve(new m.constructor(response));
        })
        .catch(reject);
      });
    }
  }, {
    key: "update",
    value: function update(item) {
      var m = this;

      return new Promise(function (resolve, reject) {
        m.constructor.client.update({ id: m.id }, item)
        .then(function (response) {
          resolve(new m.constructor(response));
        })
        .catch(reject);
      });
    }
  },{
    key: "destroy",
    value: function destroy() {
      var m = this;

      return new Promise(function (resolve, reject) {
        m.constructor.client.remove({ id: m.id })
        .then(function (response) {
          response = new m.constructor(response);
          resolve(response);
        })
        .catch(reject);
      });
    }
  }], [{
    key: "find",
    value: function find(params) {
      var m = this;
      return new Promise(function (resolve, reject) {
        m.client.find(params)
        .then(function (response) {
          resolve(response.map(function (item) {
            return new m(item);
          }));
        })
        .catch(reject);
      });
    }
  }, {
    key: "findOne",
    value: function findOne(params) {
      var m = this;
      return new Promise(function (resolve, reject) {
        m.client.findOne(params)
        .then(function (response) {
          resolve(response[0]);
        })
        .catch(reject);
      });
    }
  }, {
    key: "create",
    value: function create(item) {
      var m = this;
      return new Promise(function (resolve, reject) {
        m.client.create(item)
        .then(function (response) {
          resolve(new m(response));
        })
        .catch(reject);
      });
    }
  }, {
    key: "update",
    value: function update(search, item) {
      var m = this;

      return new Promise(function (resolve, reject) {
        m.client.update(search, item)
        .then(function (response) {
          response = new m(response);
          resolve(response);
        })
        .catch(reject);
      });
    }
  }]);

  return Model;
}();

module.exports = Model;
