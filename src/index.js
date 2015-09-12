import _ from 'lodash';

class Cookies {

  constructor(config) {
    this.conf = config;
  }

  getCookie(name) {
    // get our session AND base64 decode the value
    if (_.isEmpty(document.cookie)) { return null; }

    var cookieObj = this.parseCookie();
    if (_.isNull(cookieObj)[name]) { return null; }

    var cookie = this.conf.base64 ? new Buffer(cookieObj[name], 'base64').toString() : cookieObj[name];
    var parsed = JSON.parse(cookie);
    
    return parsed;
  }

  parseCookie(){
    var str = document.cookie.split(', ');
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }

    return result;
  }
}

module.exports = Cookies;