const express=require("express");

const usersController=require('../controllers/usersController.js');

const userRouter= express.Router();

userRouter.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.addUser);
    //.delete(userController.deleteUser);
userRouter.route('/:id')
    //.post(userController.addUser)
    //.put(productsController.replaceProduct)
     .delete(usersController.deleteUser);


    
module.exports=userRouter;