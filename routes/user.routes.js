const express = require('express');
const {
    getAllUser, 
    getUser, 
    saveUser, 
    deleteUser} = require('../controller/user.controller')

const userRouter = express.Router();

userRouter.get('/', getAllUser);
userRouter.get('/:userId/:password',getUser);
userRouter.post('/save',saveUser);
userRouter.delete('/:userId',deleteUser);

module.exports = userRouter;