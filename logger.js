'use strict'

const winston = require('winston')

class Logger extends winston.Logger {
  constructor(ctx) {
    super({
      transports: [
        new (winston.transports.Console)({
          timestamp: true,
          color: true,
        })
      ]
    })
    this.ctx = ctx;
  }

  log(level, msg, meta, callback) {
    if(typeof meta !== 'object') {
      callback = meta
      meta = {}
    }
    meta.router = this.ctx.router
    let args = [level, msg, meta]
    if(typeof callback !== 'undefined') args.append(callback)
    winston.Logger.prototype.log.apply(this, args)
  }
}

module.exports = Logger
