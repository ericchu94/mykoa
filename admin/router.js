const co = require('co')
const router = require('koa-router')()
const User = require('./models').User

router.use(co.wrap(function *(ctx, next) {
  ctx.router = 'admin'
  yield next()
}))

router.get('/', (ctx, next) => {
  return User.create({firstName: 'eric', lastName: 'chu'}).then((u) => {
    ctx.body = u
    return next()
  })
}, (ctx, next) => {
  return User.count().then((c) => {
    ctx.body += c
  })
})

module.exports = router
