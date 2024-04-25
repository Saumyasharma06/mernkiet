const express = require('express');
const userController = require('../controllers/usersController.js');

const userRouter = express.Router();

userRouter.route('/users/')
.get(userController.getAllUsers)
.post(userController.addUser)

userRouter.route('/users/:id')
.put(userController.updateUser)
.delete(userController.deleteUser)

module.exports = userRouter;
