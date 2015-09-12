'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var Cookies = (function () {
  function Cookies(config) {
    _classCallCheck(this, Cookies);

    this.conf = config;
  }

  _createClass(Cookies, [{
    key: 'getCookie',
    value: function getCookie(name) {
      // get our session AND base64 decode the value
      if (_lodash2['default'].isEmpty(document.cookie)) {
        return null;
      }

      var cookieObj = this.parseCookie();
      if (_lodash2['default'].isNull(cookieObj)[name]) {
        return null;
      }

      var cookie = this.conf.base64 ? new Buffer(cookieObj[name], 'base64').toString() : cookieObj[name];
      var parsed = JSON.parse(cookie);

      return parsed;
    }
  }, {
    key: 'parseCookie',
    value: function parseCookie() {
      var str = document.cookie.split(', ');
      var result = {};
      for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
        result[cur[0]] = cur[1];
      }

      return result;
    }
  }]);

  return Cookies;
})();

module.exports = Cookies;