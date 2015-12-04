const Koa = require('koa')
const co = require('co')

const app = new Koa()

app.use(co.wrap(function *(ctx, next) {
  var start = new Date()
  yield next()
  var end = new Date()
  var diff = end - start
  console.log(`${start.toISOString()} ${ctx.method} ${ctx.url} ${ctx.status} ${diff}ms`)
}))

app.use(co.wrap(function *(ctx, next) {
  ctx.body = 'Hello, World!'
}))

app.listen(3000)
