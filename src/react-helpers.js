var mergeState = {
  mergeState: function(data){
    var params = $.extend({}, this.state, data)
    this.setState(params);
  }
}

var handleParam = {
  handleParam: function (e) {
    var key = $(e.currentTarget).attr('data-key');
    var obj = {};

    obj[key] = e.target.value;
    this.setState(obj);
  }
}

module.exports = { mergeState: mergeState, handleParam: handleParam };
