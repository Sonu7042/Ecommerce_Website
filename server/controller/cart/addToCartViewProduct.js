const addToCartModel= require('../../model/cartProduct')


const addToCartViewProduct= async()=>{
    try{

        const userId= req.userId
        const allProduct = await addToCartModel.find({userId: userId})

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