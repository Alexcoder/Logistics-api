import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        email: {type: String, required:true, unique:true},
        firstName: {type: String},
        lastName: {type: String},
        password: {type: String},
        bio: {type: String},
        photos: [],
        isAdmin: {type: Boolean, default:false}
    },
    {timestamps: true}
)

const BookingAppUser = new mongoose.model("BookingAppUser", UserSchema);
export default BookingAppUser;