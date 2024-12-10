const  productModel= require('../../model/productModel')


const  getProductController= async(req, res)=>{
    try{
        const products = await productModel.find().sort({createdAt: -1})

        res.status(200).json({
            message: 'Products retrieved successfully',
            error: false,
            success:true,
            data:products
        })

    }
    catch(err){
        res.status(500).json({
            message: err.message || err,
            successs: false,
            error: true
        })

    }

}



module.exports= getProductController;