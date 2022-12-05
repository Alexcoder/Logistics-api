import express, { Router } from "express";
import {getAllUserInfo, getOneUserInfo, updateUserInfo, deleteUserInfo
    } from "../controllers/user.js";

const router= express.Router()

// GET ALL
router.get(`/`, getAllUserInfo)
// GET ONE
router.get(`/:id`, getOneUserInfo)
// UPDATE
router.put(`/:id`, updateUserInfo)
// DELETE
router.delete(`/:id`, deleteUserInfo)


export default router;