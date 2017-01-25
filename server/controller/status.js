'use strict'

const RES = require('../lib/body-res')

exports.update = function *() {
  let body = RES.body
  body.data = {
    'id': 1
    'name': 'wade'
  }
}
