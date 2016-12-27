var jQuery = require('jquery');

jQuery.put = function(url, params){
  return $.ajax({
      url: url,
      data: params
  })
}

jQuery.fn.try = function(key, params){
  var obj = this[0]
  var item = (obj || {})[key]
  return params && typeof item == "function" ? item(params) : $(item)
}

module.exports = jQuery;
