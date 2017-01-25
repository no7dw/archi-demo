'use strict'

const mongoose = require('mongoose')
// mongoose.set('debug', true)
mongoose.Promise = require('bluebird')
const config = require('../config')


function create (uri) {
  const db = mongoose.createConnection(uri)
  db.on('connected', function () {
    console.info('%s mongo connected: %s!!!', db.name, uri)
  })

  db.on('error', function (err) {
    console.error('%s mongo Error: %s', uri, err)
  })
  // const db2 = mongoose.createConnection(config.mongo_koala.uri)
  return db
}

exports.main = create(config.mongo.uri)
