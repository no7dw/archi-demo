'use strict'

// middleware
const validator = require('./middleware/validator')
// const status = require('./controller/status')
const Router = require('koa-router')

const router = new Router({ prefix: '/api/v1' })

// global auth
// router.use('/', auth.tokenRequired)
// status
// router.put('/loan/status', validator.status, status.update)
router.put('/loan/status', validator.status)

// debug && restart app
router.get('/_error', function * () {
  // this.unda()
  let exit = this.query.exit
  if (exit) process.exit(1)
  throw new Error('is test _error')
})
module.exports = router
