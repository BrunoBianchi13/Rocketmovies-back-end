const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.get('/:id', usersController.show)
usersRoutes.delete('/:id', usersController.delete)

module.exports = usersRoutes