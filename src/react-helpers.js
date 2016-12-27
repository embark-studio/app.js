var mergeState = {
  mergeState: function(data){
    var params = $.extend({}, this.state, data)
    this.setState(params);
  }
}

module.exports = {mergeState: mergeState};
