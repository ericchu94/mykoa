const Koa = require('koa')
const co = require('co')

const app = new Koa()

app.use(co.wrap(function *(ctx, next) {
  ctx.body = 'Hello, World!'
}))

app.listen(3000)
