import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//create new user details

const createUser = asyncHandler(async (req, res) => {
    const {
        shedPhoneNo,
        userName,
        userPhoneNo,
        vehicleType
    } = req.body

    const user = new User({
        shedPhoneNo,
        userName,
        userPhoneNo,
        vehicleType
    })

    try {
        await user.save();
        if (user) {
            res.status(201).json({
                _id: user.id,
                shedPhoneNo: user.shedPhoneNo,
                userName: user.userName,
                userPhoneNo: user.userPhoneNo,
                vehicleType: user.vehicleType
            })
        }
    } catch (error) {
        return res.status(400).json({ message: "Invalid user data" });
    }
})

// get all user orders

const getUser = asyncHandler(async (req, res) => {
    const user = await User.find({})
    res.json(user)
})

//update user order details by passing ID

const updateUserStatus = asyncHandler(async (req, res) => {
    const { shedPhoneNo,
        userName,
        userPhoneNo,
        vehicleType } = req.body

    const user = await User.findById(req.params.id)

    if (user) {
        user.shedPhoneNo = shedPhoneNo,
            user.userName = userName,
            user.userPhoneNo = userPhoneNo,
            user.vehicleType = vehicleType

        const updateuserStatus = await user.save()
        res.json(updateuserStatus)
    } else {
        res.status(404)
        throw new Error("user Not Found")
    }
})

//delete user oroder details by passing specific user ID

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        await user.remove();
        res.json({ message: 'user Deleted' });
    } else {
        res.status(404);
        throw new Error('user deleted!')
    }
})

//calculate the queue count

const userCount = asyncHandler(async(req,res) => {

    const findphone = req.params.phone;
    const user = await User.find({shedPhoneNo:findphone})

    if(user){
       res.json(user)

      
    }else{
        res.status(404)
        throw new Error("user not found")
    }
})



export { createUser, getUser, updateUserStatus, deleteUser, userCount }