import VehicleInfo from "../model/vehicleInfo.js";
import BookedInfo from "../model/bookSeat.js";

export const bookSeatInfo= async(req, res)=>{
    try{
        const BookedVehicleInfo =  await new BookedInfo(req.body).save();
        res.status(200).json(BookedVehicleInfo)
    }catch(err){
        console.log(err)
    }
}

export const getSeatInfo= async(req, res)=>{
    try{
        const AllBookedInfo =  await BookedInfo.find();
        res.status(200).json(AllBookedInfo)
    }catch(err){
        console.log(err)
    }
}
export const getOneSeatInfo= async(req, res)=>{
    try{
        const SingleBookedInfo =  await BookedInfo.find({creator:req.params.id}).sort({_id: -1});
        res.status(200).json(SingleBookedInfo)
    }catch(err){
        console.log(err)
    }
}

export const updateSeatInfo= async(req, res)=>{
    try{

            const Info = await VehicleInfo.findOne({_id:req.body.params});
            if(Info){
                const {departureTerminal, arrivalTerminal, adults,seat}= Info
                departureTerminal = req.body.departureTerminal || departureTerminal,
                arrivalTerminal = req.body.arrivalTerminal || arrivalTerminal,
                adults = req.body.adults || adults,
                seat = req.body.seat || seat
            }
        const UpdatedInfo = await Info().save();
        res.status(200).json(UpdatedInfo)
    }catch(err){
        console.log(err)
    }
}

export const deleteSeatInfo= async(req, res)=>{
    try{
        await BookedInfo.findByIdAndDelete({_id:req.params.id}), 
        res.status(200).json({
            message: "Booking Info Successfully Deleted"
        })
    }catch(err){
        console.log(err)
    }
}