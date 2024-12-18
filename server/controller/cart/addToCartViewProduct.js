const addToCartModel= require('../../model/cartProduct')


const addToCartViewProduct= async(req, res)=>{
    try{

        const userId= req.userId
        const allProduct = await addToCartModel.find({userId: userId}).populate("productId")
        // console.log(allProduct)

        res.status(200).json({
            message: "All Product",
            error: false,
            success: true,
            data: allProduct
        })
         


    }
    catch(err){
        res.status(500).json({
            message:err.message || err,
            error: true,
            success: false
            
        })

    }


}



module.exports= addToCartViewProduct;