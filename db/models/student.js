'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
const Campus = require('./campus')

module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: Sequelize.STRING
}, {
  defaultScope: { //pretty cool use of defaultScope
    include: [
      { model: Campus}
    ]
  }
})
