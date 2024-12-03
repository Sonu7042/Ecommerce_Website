const express= require('express');
const router = express.Router()








const userSignUpController= require("../controller/user/userSignup")
const userLogin = require('../controller/user/userLogin')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')


const allUsers = require('../controller/user/allUsers')

router.post('/signup', userSignUpController)
router.post('/login', userLogin)
router.get('/user-details', authToken, userDetailsController)

router.get('/alluser', allUsers)






module.exports= router