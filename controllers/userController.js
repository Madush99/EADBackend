const searchShed = asyncHandler(async(req,res) => {

    const findlocation = req.params.location;
    const fuel = await Fuel.find({shedLocation:findlocation})

    if(fuel){
       const type = fuel.filter(f => f.fuelType == "petrol");
       const type1 = fuel.filter(f => f.shedPhoneNo == "0717965296");
       let count = Object.keys(type).length
       let count1 = Object.keys(type1).length

       res.json({Car: count1, van: count})
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
        throw new Error("Fuel not found")
    }
})