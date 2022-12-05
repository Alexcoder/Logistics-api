import VehicleInfo from "../model/vehicleInfo.js";



export const updateDate= async(req, res, next)=>{
    console.log(req.params.id);
    console.log(req.body.date);
    try{
        const UpdatedDate = await VehicleInfo.updateOne(
            {"seatNumber._id": req.params.id},
            {$push : {"seatNumber.$.unAvailableDate": req.body.date}},
            {new: true}
            )
            res.status(200).json(UpdatedDate)
    }catch(err){
        next(err)
    }
}
