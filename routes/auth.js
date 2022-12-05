import express, { Router } from "express";
import { SignIn, SignUp} from "../controllers/auth.js";

const router= express.Router()

// SignIn
router.post(`/signIn`, SignIn)
// SignUp
router.post(`/signUp`, SignUp)


export default router;