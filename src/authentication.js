const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');

module.exports = app => {
  const authentication = new AuthenticationService(app);
  const vendorAuthentication = new AuthenticationService(app, 'vendor_authentication');

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  vendorAuthentication.register('jwt', new JWTStrategy());
  vendorAuthentication.register('local', new LocalStrategy());

  app.use('/authentication', authentication);
  app.use('/vendor-authentication', vendorAuthentication);
  app.configure(expressOauth());
};
