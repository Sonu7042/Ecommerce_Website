const addToCartModel= require('../../model/cartProduct')


const updateAddToCartProduct= async(req, res)=>{
    try{
       
        const {_id, quantity}=req.body
    
        if (!_id) {
            return res.status(400).json({
                message: "Product ID is required",
                success: false,
                error: true
            });
        }
        
        
        
        const updateProduct= await addToCartModel.updateOne({_id}, {...(quantity && {quantity: quantity})})

        res.status(200).json({
            message: "update proudct",
            error: false,
            success:true,
            data : updateProduct
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

module.exports= updateAddToCartProduct