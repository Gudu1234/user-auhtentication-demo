const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [ctx => {
      console.log(ctx.params);
    },authenticate({
      service: 'vendor-authentication',
      strategies: ['jwt'],
    }), ctx => {
      console.log(ctx.params);
    }],
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
