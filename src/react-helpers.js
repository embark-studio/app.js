var mergeState = {
  mergeState: function(data){
    var params = $.extend({}, this.state, data)
    this.setState(params);
  }
}

var handleParam = {
  handleParam: function (e) {
    var key = $(e.target).attr('data-key');
    var obj = {};
    var myStore = $(e.target).attr('data-store');

    obj[key] = e.target.value;

    if (myStore) {
      if (this.stores[myStore]) {
        this.stores[myStore].merge(obj);
      } else {
        Store(myStore).merge(obj);
      }
    }

    this.setState(obj);
  }
}

module.exports = { mergeState: mergeState, handleParam: handleParam };
