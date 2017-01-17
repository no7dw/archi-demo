'use strict'

const path = require('path')
const _ = require('lodash')

const NODE_ENV = process.env.NODE_ENV || 'development'
const root = path.resolve(__dirname, '..')

const baseConfig = {
  app: {
    name: 'archi-test',
    root: root,
    env: NODE_ENV,
    isDev: NODE_ENV === 'development',
    isProd: NODE_ENV === 'production',
    keys: ['key', 'keys'],
    secret: process.env.SECRET || 'mysecret!',
    debugMode: process.env.DEBUG_MODE === 'true' || true,
    limit: 50, // filter limit default
    worker: {
      numCPUs: 1,
      limit: 20
    },
    redis: {
      port: process.env.REDIS_PORT || 6379,
      host: process.env.REDIS_HOST || 'localhost',
      family: 4
    },
    log: {
      dir: process.env.LOG_DIR || path.resolve(root, 'log'),
      level: process.env.LOG_LEVEL || 'debug',
      fileLevel: process.env.LOG_FILE_LEVEL || 'debug',
      colorize: process.env.LOG_COLORIZE ? process.env.LOG_COLORIZE === 'true' : true,
      size: process.env.LOG_SIZE || 1024 * 1024 * 128
    }
  // token: 'archi-demo' //  archi-demo
  },
}

const platformConfig = {
  development: {
    app: {
      port: 9040,
      token: '123456'
    },
    mongo: {
      uri: process.env.MONGO_URI_DEV || 'mongodb://localhost:27017/archi-test'
    }
  },
  local: {
    app: {
      port: 9040,
      token: '123456'
    },
    mongo: {
      uri: process.env.MONGO_URI_DEV || 'mongodb://localhost:27017/archi-test'
    }
  },
  test: {
    app: {
      port: 9042,
      token: '123456'
    },
    mongo: {
      uri: process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/archi-test'
    }
  },
  production: {
    app: {
      port: process.env.PORT || 9040,
      token: process.env.TOKEN || 'archi-demo'
    },
    mongo: {
      uri: process.env.MONGO_URI || 'mongodb://MONGO_HOST:27017/archi-test'
    }
  }
}

module.exports = _.merge(baseConfig, platformConfig[NODE_ENV])
