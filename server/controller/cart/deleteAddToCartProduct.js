const addToCartModel= require('../../model/cartProduct')


const deleteAddToCartProduct= async(req, res)=>{
    try{
        const currentUser= req.userId
        const productId=req.body?._id
       
        const deleteProduct= await addToCartModel.deleteOne({_id: productId})

        res.status(200).json({
            message: "Product Deleted",
            error: false,
            success:true,
            data : deleteProduct
        })

    }
    catch(err){
        res.status(500).json({
            message: err.message || err,
            success: false,
            error : true
        })
    }

}

module.exports= deleteAddToCartProduct