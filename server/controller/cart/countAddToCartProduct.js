const addToCartModel= require("../../model/cartProduct")


const countAddToCartProduct=async(req, res)=>{

    try{
        const userId= req.userId
        const count= await addToCartModel.countDocuments({userId})
        
        res.status(200).json({
            message: "total counts document",
            error: false,
            success: true,
            data: {
                count: count
            }
        })

    }
    catch(err){
        res.status(200).json({
            message: err.message || err,
            success: false,
            error:true
        })
    }

    
}

module.exports=countAddToCartProduct