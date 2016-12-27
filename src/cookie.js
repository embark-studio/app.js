var Cookies = require("js-cookie")
var Cookie = {
    get: function(key){
        try {
            return $.parseJSON(Cookies.get(key))
        }catch(e){

        }
    },
    set: function(key, value){
        return Cookies.set(key, JSON.stringify(value),  { domain: `.${this.host}`, path: '/'  })
    },
    remove: function(key){
        Cookies.remove(key, { domain: `.${this.host}` })
    }
}

Cookie.host = location.host.split(".")
Cookie.host.shift()
Cookie.host = Cookie.host.join(".")
Cookie.host = Cookie.host.split(":")[0]

module.exports = Cookie;
