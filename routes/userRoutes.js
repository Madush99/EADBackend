import express from "express";

const router = express.Router()

import { createUser, getUser, updateUserStatus, deleteUser, userCount } from '../controllers/userController.js'

//create api routes

router.post('/createOrder', createUser);
router.get('/allOrders', getUser);
router.put('/update/:id', updateUserStatus);
router.delete('/delete/:id', deleteUser);
router.get('/vehicleCount/:phone', userCount);

export default router;