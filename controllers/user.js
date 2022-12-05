import VehicleInfo from "../model/vehicleInfo.js";


export const getAllUserInfo= async(req, res, next)=>{
    const{...detail}= req.query
    try{
        let AllVehicleInfo
        req.query? 
        AllVehicleInfo =  await VehicleInfo.find({...detail}) :
        AllVehicleInfo =  await VehicleInfo.find() 
        res.status(200).json(AllVehicleInfo)
    }catch(err){
        next(err)
    }
}

export const getOneUserInfo= async(req, res, next)=>{
    try{
        const SingleVehicleInfo =  await VehicleInfo.findById(req.params.id)
        res.status(200).json(SingleVehicleInfo)
    }catch(err){
        next(err)
    }
}

export const updateUserInfo= async(req, res, next)=>{
    try{
        const Info =  await VehicleInfo.findOne({_id:req.params.id})
        if(Info){
            Info.departureTerminal = req.body.departureTerminal || Info.departureTerminal;
            Info.arrivalTerminal = req.body.arrivalTerminal || Info.arrivalTerminal;
            Info.date = req.body.date || Info.date;
            Info.seatNumber = req.body.seatNumber || Info.seatNumber;
        }
        const updatedVehicleInfo = await Info.save()
        res.status(200).json(updatedVehicleInfo)
    }catch(err){
        next(err)
    }
}

export const deleteUserInfo= async(req, res, next)=>{
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
        await VehicleInfo.findByIdAndDelete({_id:req.params.id}), 
        res.status(200).json({
            message: "Vehicle Info Successfully Deleted"
        })
    }catch(err){
        next(err)
    }
}
