import mongoose from 'mongoose';

const VehicleInfoSchema = new mongoose.Schema(
    {
        departureTerminal: {type: String},
        arrivalTerminal: {type: String},
        price: {type: String},
        seatNumber: [
            {
            number:{type:Number},
            unAvailableDate:{type: [Date]}
            }]
},
{timestamps: true}
)

const BookingAppVehicleInfo = mongoose.model("BookingAppVehicleInfo", VehicleInfoSchema);
export default BookingAppVehicleInfo;