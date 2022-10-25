import mongoose from "mongoose";

const fuelSchema = mongoose.Schema({
    id:{
        type:String,
    },
    shedPhoneNo: {
        type: String,
        required: true
    },
    shedName: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    fuelStatus: {
        type: String,
        required: true
    },
    shedLocation: {
        type: String,
        required: false
    }
},{
    timestamp: true
})

const Fuel = mongoose.model('Fuel', fuelSchema);

export default Fuel