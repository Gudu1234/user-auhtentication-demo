// Initializes the `vendor` service on path `/vendor`
const { Vendor } = require('./vendor.class');
const createModel = require('../../models/vendor.model');
const hooks = require('./vendor.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vendor', new Vendor(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vendor');

  service.hooks(hooks);
};
