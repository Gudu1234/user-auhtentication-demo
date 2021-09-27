const user = require('./user/user.service.js');
const vendor = require('./vendor/vendor.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(vendor);
};
