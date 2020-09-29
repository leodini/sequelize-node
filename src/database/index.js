const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Address = require('../models/Address')
const User = require('../models/User')

const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)
Address.associate(connection.models)

module.exports = connection