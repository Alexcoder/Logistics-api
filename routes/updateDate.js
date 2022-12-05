import express, { Router } from "express";
import { updateDate } from "../controllers/updateDate.js";

const router= express.Router()

router.put(`/:id`, updateDate)


export default router;





