const Koa = require('koa')
const co = require('co')

const Logger = require('./logger')
const router = require('./router')

const app = new Koa()

app.use(co.wrap(function *(ctx, next) {
  ctx.log = new Logger(ctx)
  yield next()
}))

app.use(co.wrap(function *(ctx, next) {
  var start = new Date()
  yield next()
  var end = new Date()
  var diff = end - start
  ctx.log.info(`${ctx.method} ${ctx.url} ${ctx.status} ${diff}ms`)
}))

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
