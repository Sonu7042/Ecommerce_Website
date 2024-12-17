const  productModel= require('../../model/productModel')


const getCategoryProduct=async(req, res)=>{
    try{
        const {category} = req.body
        // console.log(category)
        const products = await productModel.find({category})

        res.status(200).json({
            message:"find product categorywise",
            error: false,
            success: true,
            data: products
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


module.exports= getCategoryProduct