/**
 * IT19123950 Madusanka G.A.P
 * IT19214580 S.M Bulner
 * 26/10/2022
 */


import mongoose from "mongoose";

// creating a user model by adding fields 

const userSchema = mongoose.Schema({
    id:{
        type:String,
    },
    shedPhoneNo: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userPhoneNo: {
        type: String,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    }
},{
    timestamp: true
})

const User = mongoose.model('User', userSchema);

export default User