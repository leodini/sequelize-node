const express = require("express")
const AddressController = require("./controllers/AddressController")
const ReportController = require("./controllers/ReportController")
const TechController = require("./controllers/TechController")
const UserController = require("./controllers/UserController")

const routes = express.Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.index)

routes.post('/users/:user_id/techs', TechController.store)
routes.delete('/users/:user_id/techs', TechController.delete)
routes.get('/users/:user_id/techs', AddressController.index)

routes.get('/report', ReportController.show)

module.exports = routes