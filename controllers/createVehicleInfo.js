import VehicleInfo from "../model/vehicleInfo.js";

export const createVehicleInfo= async(req, res, next)=>{
    try{
        const createdVehicleInfo =  await new VehicleInfo(req.body).save();
        res.status(200).json(createdVehicleInfo)
    }catch(err){
        next(err)
    }
}

export const getVehicleInfo= async(req, res, next)=>{
    const{ ...detail }= req.query
    try{
        let AllVehicleInfo;
        req.query? 
        AllVehicleInfo =  await VehicleInfo.find({...detail}) :
        AllVehicleInfo =  await VehicleInfo.find() 
        res.status(200).json(AllVehicleInfo)
    }catch(err){
        next(err)
    }
}

export const getSingleVehicleInfo= async(req, res, next)=>{
    try{
        const SingleVehicleInfo =  await VehicleInfo.find(req.params.id)
        res.status(200).json(SingleVehicleInfo)
    }catch(err){
        next(err)
    }
}

export const updateVehicleInfo= async(req, res, next)=>{
    try{
        const Info =  await VehicleInfo.findOne({_id:req.params.id})
        if(Info){
            Info.departureTerminal = req.body.departureTerminal || Info.departureTerminal;
            Info.arrivalTerminal = req.body.arrivalTerminal || Info.arrivalTerminal;
            Info.price = req.body.price || Info.price;
            Info.date = req.body.date || Info.date;
            Info.seatNumber = req.body.seatNumber || Info.seatNumber;
        }
        const updatedVehicleInfo = await Info.save()
        res.status(200).json(updatedVehicleInfo)
    }catch(err){
        next(err)
    }
}

export const updateSeatInfo= async(req, res, next)=>{
    try{
        const UpdatedVehicleInfo =  await VehicleInfo.updateOne(
            {"seatNumber._id":req.params.id}, 
            {$push: {"seatNumber.$.unAvailableDate": req.body.date}},
            {new:true})
        res.status(200).json(UpdatedVehicleInfo)
    }catch(err){
        next(err)
    }
}
export const deleteSeatInfo= async(req, res, next)=>{
    try{
        const DeletedVehicleInfo =  await VehicleInfo.updateOne(
            {"seatNumber._id":req.params.id}, 
            {$pull: {"seatNumber.$.unAvailableDate": req.body.date}},
            {new:true})
        res.status(200).json(DeletedVehicleInfo)
    }catch(err){
        next(err)
    }
}


export const deleteVehicleInfo= async(req, res, next)=>{
    try{
        await VehicleInfo.findByIdAndDelete(req.params.id), 
        res.status(200).json({
            message: "Vehicle Info Successfully Deleted"
        })
    }catch(err){
        next(err)
    }
}
