'use strict'

const mongoose = require('mongoose')
const config = require('../config')
const logger = require('../lib/logger').logger
const Promise = require('bluebird')
mongoose.Promise = Promise

function create (uri) {
  const db = mongoose.createConnection(uri)
  db.on('connected', function () {
    logger.info('%s mongo connected: %s!!!', db.name, uri)
  })

  db.on('error', function (err) {
    logger.error('%s mongo Error: %s', uri, err)
  })
  return db
}


exports.IRA = create(config.Mongo_IRA.uri) //uri: 'mongodb://localhost:27017/IRA'

exports.all = [
  exports.IRA
]
