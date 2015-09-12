var cookies = {},
    _ = require('lodash');

cookies.getCookie = function (name) {
  // get our session AND base64 decode the value
  if (_.isEmpty(document.cookie)) { return null; }

  var cookie = new Buffer(document.cookie.replace("session=",""), 'base64').toString();
  
  if (!cookie) { return null; };

  var parsed = JSON.parse(cookie);
  return (parsed[name] != null) ? parsed[name] : null;
}

module.exports = cookies;