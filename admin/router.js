const co = require('co')
const router = require('koa-router')()

router.use(co.wrap(function *(ctx, next) {
  ctx.router = 'admin'
  yield next()
}))

router.get('/', co.wrap(function *(ctx, next) {
  ctx.body = 'admin'
}))

module.exports = router
