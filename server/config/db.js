'use strict'

const mongoose = require('mongoose')
// mongoose.set('debug', true)
mongoose.Promise = require('bluebird')
const config = require('../config')

// module.exports = [connect(config.mongo.uri), connect(config.mongo_koala.uri)]
// module.exports = connect(config.mongo.uri)
// module.exports = createDb
// function connect (uri) {
//   return new Promise(function (resolve, reject) {
//     mongoose.connect(uri, function (err, db) {
//       if (err) {
//         console.error('connect to %s error', uri, err.message)
//         process.exit(1)
//       }
//       console.info(`mongodb connected: ${uri} !!!`, db)
//       return resolve()
//     })
//   })
// }

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
exports.koala = create(config.mongo_koala.uri)
