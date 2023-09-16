const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post("/", (request, response) => {
  usersController.create(request, response)
})

module.exports = usersRoutes