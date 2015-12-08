const co = require('co')
const router = require('koa-router')()

const admin = require('./admin/router')

router.use(co.wrap(function *(ctx, next) {
  ctx.router = 'default'
  yield next()
}))

router.get('/', co.wrap(function *(ctx, next) {
  ctx.body = 'Hello, world!'
}))

router.use('/admin', admin.routes(), admin.allowedMethods())

module.exports = router;
