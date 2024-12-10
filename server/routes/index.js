const express= require('express');
const router = express.Router()




const userSignUpController= require("../controller/user/userSignup")
const userLogin = require('../controller/user/userLogin')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const updateUser = require('../controller/user/updateUser')
const allUsers = require('../controller/user/allUsers')


const uploadProductController= require('../controller/product/uploadProduct')
const getProductController= require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')





//authication
router.post('/signup', userSignUpController)
router.post('/login', userLogin)



//admin panel
router.get('/user-details', authToken, userDetailsController)
router.post('/update-user', authToken, updateUser)
router.get('/alluser', allUsers)


//product
router.post('/upload_product', authToken, uploadProductController )
router.get('/get-product', getProductController )
router.post('/update-product', authToken, updateProductController)










module.exports= router