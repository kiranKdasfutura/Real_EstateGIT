
import express from 'express'
import { signup } from '../controller/auth.controller.js'

const router=express.Router()

//signUP user
router.post('/signup',signup)

export default router