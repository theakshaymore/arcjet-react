import { Router } from "express";

import authController from '../controllers/authController.js'

const router = Router();

router.get('/login', authController.loginUser)

router.post('/register', authController.handleRegisterUser)

router.get('/logout', authController.logoutUser)


export default router;