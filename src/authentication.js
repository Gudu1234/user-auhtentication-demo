const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');

module.exports = app => {
  const authentication = new AuthenticationService(app);

  // Initialize vendor authentication with the newly defined vendor_authentication technique.
  const vendorAuthentication = new AuthenticationService(app, 'vendor_authentication');

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  // Register vendor authentication for both jwt and local strategy
  vendorAuthentication.register('jwt', new JWTStrategy());
  vendorAuthentication.register('local', new LocalStrategy());

  app.use('/authentication', authentication);

  // Define endpoint for the vendor authentication
  app.use('/vendor-authentication', vendorAuthentication);

  app.configure(expressOauth());
};
