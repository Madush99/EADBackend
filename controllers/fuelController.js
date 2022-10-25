import asyncHandler from 'express-async-handler';
import Fuel from '../models/fuelModel.js';

const createFuel = asyncHandler(async (req,res) => {
    const {
    shedPhoneNo,
    shedName,
    fuelType,
    fuelStatus,
    shedLocation
    } = req.body

    const fuel = new Fuel({
        shedPhoneNo,
        shedName,
        fuelType,
        fuelStatus,
        shedLocation
    })

    try{
        await fuel.save();
        if(fuel){
            res.status(201).json({
                _id: fuel.id,
                shedPhoneNo: fuel.shedPhoneNo,
                shedName: fuel.shedName,
                fuelType: fuel.fuelType,
                fuelStatus: fuel.fuelStatus,
                shedLocation: fuel.shedLocation
            })
        }
    }catch(error){
        return res.status(400).json({message: "Invalid fuel data"});
    }
})

const getFuel = asyncHandler(async(req,res) => {
    const fuel = await Fuel.find({})
    res.json(fuel)
})

const getFuelByShed = asyncHandler(async(req,res) => {

    const findPhone = req.params.number;
    const fuel = await Fuel.find({shedPhoneNo:findPhone})

    if(fuel){
        res.json(fuel)
    }else{
        res.status(404)
        throw new Error("Fuel not found")
    }
})

const updateFuelStatus = asyncHandler(async(req,res) => {
    const {shedPhoneNo, shedName, fuelStatus, fuelType, shedLocation } = req.body

  const fuel = await Fuel.findById(req.params.id)

  if (fuel) {
        fuel.shedPhoneNo = shedPhoneNo,
        fuel.shedName = shedName,
        fuel.fuelType = fuelType,
        fuel.fuelStatus = fuelStatus
        fuel.shedLocation = shedLocation

        const updateFuelStatus = await fuel.save()
        res.json(updateFuelStatus)
  } else {
        res.status(404)
        throw new Error("Room Not Found")
  }
})

const deleteFuel = asyncHandler(async (req, res) => {
    const fuel = await Fuel.findById(req.params.id)

    if(fuel){
        await fuel.remove();
        res.json({message: 'Fuel Deleted'});
    }else{
        res.status(404);
        throw new Error('Fuel deleted!')
    }
})

const searchShed = asyncHandler(async(req,res) => {

    const findlocation = req.params.location;
    const fuel = await Fuel.find({shedLocation:findlocation})

    if(fuel){
        res.json(fuel)
    }else{
        res.status(404)
        throw new Error("Fuel not found")
    }
})


export {createFuel,getFuel, getFuelByShed, updateFuelStatus, deleteFuel, searchShed}