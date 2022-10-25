import mongoose from "mongoose";

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