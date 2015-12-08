const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysite', null, null, {
  dialect: 'sqlite',
  storage: 'db.sqlite',
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
}
