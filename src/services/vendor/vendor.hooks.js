const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [
      authenticate({
        service: 'vendor-authentication', // requires the service for authentication
        strategies: ['jwt'], // requires the strategy for authentication check
      })
    ],
    get: [authenticate('jwt')],
    create: [hashPassword('password')],
    update: [],
    patch: [hashPassword('password')],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
