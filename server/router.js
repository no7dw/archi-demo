'use strict'

// middleware
const auth = require('./middleware/authenticator')
const validator = require('./middleware/validator')
const filter = require('./middleware/filter')
const check = require('./middleware/check')
const matchNote = require('./middleware/matchNote')
// const splitPureAmount = require('./middleware/splitPureAmount')
const time = require('./middleware/systemTime')
const switching = require('./middleware/switching')
const Router = require('koa-router')

const router = new Router({ prefix: '/api/v1' })

// global auth
router.use('/', auth.tokenRequired)
// status
router.put('/loan/status', validator.status, status.update)

// debug && restart app
router.get('/_error', function * () {
  // this.unda()
  let exit = this.query.exit
  if (exit) process.exit(1)
  throw new Error('is test _error')
})
module.exports = router