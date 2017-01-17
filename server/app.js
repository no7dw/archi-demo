'use strict'

const co = require('co')
const Primise = require('bluebird')
const app = require('koa')()
const config = require('./config')

app.init = co.wrap(function * () {
  yield require('./config/db')
  // yield require('./config/redis')
  // init event
  require('./service/event').init()
  require('./config/koa')(app)
  if (config.app.isProd) {
    console.info('[3s 后启动 app ]...')
    yield Primise.delay(3000)
  }
})
// 初始化 globals 变量
// require('./config/globals').init()

if (!module.parent) {
  app.init()
    .then(() => {
      app.listen(config.app.port)
      console.log('ENV: ', config.app.env)
      console.log('%s is listening port: %d !!!', config.app.name, config.app.port)
    })
    .catch((err) => {
      console.error('start error:', err.stack)
    // process.exit(0)
    })
}

module.exports = app
