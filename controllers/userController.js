import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

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


const getUser = asyncHandler(async (req, res) => {
    const user = await User.find({})
    res.json(user)
})

// const getuserByShed = asyncHandler(async(req,res) => {

//     const findPhone = req.params.number;
//     const user = await user.find({shedPhoneNo:findPhone})

//     if(user){
//         res.json(user)
//     }else{
//         res.status(404)
//         throw new Error("user not found")
//     }
// })

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


const userCount = asyncHandler(async(req,res) => {

    const findphone = req.params.phone;
    const user = await User.find({shedPhoneNo:findphone})

    if(user){
       res.json(user)
    //    if(type){
    //     console.log(type)
    //     let count = Object.keys(type).length
    //     res.json({number:count})
    //    }else if(type1){
    //     let count1 = Object.keys(type1).length
    //     res.json({number:count1})
    //    }
      
    }else{
        res.status(404)
        throw new Error("user not found")
    }
})


// const searchShed = asyncHandler(async(req,res) => {

//     const findlocation = req.params.location;
//     const user = await user.find({shedLocation:findlocation})

//     if(user){
//        const type = user.filter(f => f.userType == "petrol");
//        const type1 = user.filter(f => f.shedPhoneNo == "0717965296");
//        let count = Object.keys(type).length
//        let count1 = Object.keys(type1).length

//        res.json({Car: count1, van: count})
//     //    if(type){
//     //     console.log(type)
//     //     let count = Object.keys(type).length
//     //     res.json({number:count})
//     //    }else if(type1){
//     //     let count1 = Object.keys(type1).length
//     //     res.json({number:count1})
//     //    }

//     }else{
//         res.status(404)
//         throw new Error("user not found")
//     }
// })


export { createUser, getUser, updateUserStatus, deleteUser, userCount }