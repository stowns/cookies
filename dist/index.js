import _ from 'lodash';

var Cookies = (function(){"use strict";var PRS$0 = (function(o,t){o["__proto__"]={"a":t};return o["a"]===t})({},{});var DP$0 = Object.defineProperty;var GOPD$0 = Object.getOwnPropertyDescriptor;var MIXIN$0 = function(t,s){for(var p in s){if(s.hasOwnProperty(p)){DP$0(t,p,GOPD$0(s,p));}}return t};var proto$0={};

  function Cookies(config) {
    this.conf = config;
  }DP$0(Cookies,"prototype",{"configurable":false,"enumerable":false,"writable":false});

  proto$0.getCookie = function(name) {
    // get our session AND base64 decode the value
    if (_.isEmpty(document.cookie)) { return null; }

    var cookieObj = this.parseCookie();
    if (_.isNull(cookieObj)[name]) { return null; }

    var cookie = this.conf.base64 ? new Buffer(cookieObj[name], 'base64').toString() : cookieObj[name];
    var parsed = JSON.parse(cookie);
    
    return parsed;
  };

  proto$0.parseCookie = function(){
    var str = document.cookie.split(', ');
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }

    return result;
  };
MIXIN$0(Cookies.prototype,proto$0);proto$0=void 0;return Cookies;})();

module.exports = Cookies;