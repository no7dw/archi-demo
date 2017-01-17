'use strict'
const Assignment = require('../model/assignment')
const co = require('co')
const logger = require('../lib/logger').logger

let _products = null

exports.init = function () {
  logger.info('init globals data ing!!!')
  co(initProducts())
    .then((data) => {
      logger.info('init globals data end!!! data: ', data)
    })
}

function * initProducts () {
  _products = yield Assignment.distinct('productId').exec()
  return _products
}

exports.getProducts = function () {
  return _products
}
