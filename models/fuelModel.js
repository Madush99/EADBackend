/**
 * IT19123950 Madusanka G.A.P
 * IT19214580 S.M Bulner
 * 26/10/2022
 */
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