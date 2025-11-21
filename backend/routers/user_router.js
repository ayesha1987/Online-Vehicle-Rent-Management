const express=require('express')
const router=express.Router()
const { validationResult } = require('express-validator')
const {validateSignupRequest,validateLoginRequest,isRequestValidated}=require('../validators/auth')

const { signup, login, getuserdeailstoad } = require('../controllers/auth')





router.post('/signup',validateSignupRequest,isRequestValidated,signup)
router.post('/login',validateLoginRequest,login)
router.post('/getusertoad',getuserdeailstoad)



module.exports=router;