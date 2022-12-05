import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import VehicleInfoRoute from './routes/createVehicleInfo.js';
import UpdateDate from './routes/updateDate.js';
import BookedSeatRoute from './routes/bookSeat.js';
import AuthRoute from './routes/auth.js';
import UserRoute from './routes/user.js';
import mongoose from 'mongoose';


const app = express();
app.use(express.json());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
dotenv.config();
app.use(cors())

app.use(`/api/vehicleInfo`, VehicleInfoRoute)
app.use(`/api/bookSeat`, BookedSeatRoute)
app.use(`/api/auth`, AuthRoute)
app.use(`/api/userInfo`, UserRoute)
app.use(`/api/addDate`, UpdateDate)

app.use((err, req, res, next)=>{
    res.json({
        status: err.status || 500,
        message: err.message || "Ooops!!!" ,
        stack: err.stack,
    })
})

const PORT = 5000 || process.env.PORT

mongoose.connect(process.env.CONNECTION_URL).then(
    app.listen(PORT, ()=> {
        console.log(`Connected to server on ${PORT}`)
    })
)