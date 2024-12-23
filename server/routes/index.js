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
const getCategoryProduct = require('../controller/product/getCategoryProduct')
const getCategoryyWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails');
const addToCartController = require('../controller/cart/addToCartController');
const countAddToCartProduct = require('../controller/cart/countAddToCartProduct');
const addToCartViewProduct = require('../controller/cart/addToCartViewProduct');
const deleteAddToCartProduct = require('../controller/cart/deleteAddToCartProduct')
const updateAddToCartProduct = require('../controller/cart/updateAddToCartProduct')
const filterProductController = require('../controller/product/filterProduct')
const searchProduct = require('../controller/product/searchProduct')





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
router.get('/get-productCategory', getCategoryProduct)
router.post('/category-WiseProduct', getCategoryyWiseProduct)
router.post('/product-details', getProductDetails)
router.post('/filter-product', filterProductController)
router.get('/search', searchProduct)

        
//add to cart
router.post('/addToCart', authToken, addToCartController)
router.get('/countAddToCartProduct', authToken, countAddToCartProduct)
router.get('/view-cart-product', authToken, addToCartViewProduct)
router.post('/delete-cart-product', authToken, deleteAddToCartProduct)
router.post('/update-cart-product', authToken, updateAddToCartProduct)


module.exports= router