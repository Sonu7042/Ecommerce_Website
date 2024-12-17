const productModel= require('../../model/productModel')

const getProductDetails=async(req, res)=>{
    try{
        const {productId}= req.body
        const product=await productModel.findById(productId)

        res.json({
            success: false,
            error : false,
            message: "Product details fetched successfully",
            data: product
        })

    

    }
    catch(err){
        res.status(500).json({
            message:err.message || err,
            error : true,
            success: false
        })
    }




}


module.exports= getProductDetails