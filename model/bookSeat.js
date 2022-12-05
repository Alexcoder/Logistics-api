import mongoose from 'mongoose';

const BookSchema = mongoose.Schema(
    {
        departureTerminal: {type: String},
        arrivalTerminal: {type: String},
        adults: {type: String},
        firstName: {type: String},
        lastName: {type: String},
        date: {type: String},
        creator: {type: String},
        bookingNumber: {type: String},
        price: {type: Number},
        amount: {type: Number},
        seat: [],
    },
    {timestamps: true}
)

const BookingAppBookedInfo = mongoose.model("BookingAppBookedInfo", BookSchema);
export default BookingAppBookedInfo;