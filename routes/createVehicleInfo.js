import express, { Router } from "express";
import { createVehicleInfo, getVehicleInfo,
     updateVehicleInfo, deleteVehicleInfo, updateSeatInfo ,
    } from "../controllers/createVehicleInfo.js";

const router= express.Router()

// CREATE
router.post(`/`, createVehicleInfo)
// GET ALL
router.get(`/`, getVehicleInfo)
// UPDATE
router.put(`/:id`, updateVehicleInfo)
// UPDATE SEAT
router.put(`/:id`, updateSeatInfo)
// DELETE
router.delete(`/:id`, deleteVehicleInfo)


export default router;