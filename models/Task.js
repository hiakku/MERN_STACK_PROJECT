const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'todo',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: Sequelize.STRING
    },
        date: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },    
    status: {
      type: Sequelize.STRING
    }, 
  },
  {
    timestamps: false
  }
)
