const orm = require('../sequelize')
const Sequelize = orm.Sequelize
const sequelize = orm.sequelize

module.exports.User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
})
module.exports.User.sync()
