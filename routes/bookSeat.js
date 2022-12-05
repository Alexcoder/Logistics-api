import express, { Router } from "express";
import { bookSeatInfo, getSeatInfo, updateSeatInfo, deleteSeatInfo, getOneSeatInfo } from "../controllers/bookSeat.js";

const router= express.Router()

// CREATE
router.post(`/`, bookSeatInfo)
// GET ALL
router.get(`/`, getSeatInfo)
router.get(`/:id`, getOneSeatInfo)
// UPDATE
router.put(`/:id`, updateSeatInfo)
// DELETE
router.delete(`/:id`, deleteSeatInfo)


export default router;