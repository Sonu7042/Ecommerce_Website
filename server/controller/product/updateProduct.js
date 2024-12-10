const productModel= require('../../model/productModel')

const updateProductController=async(req, res)=>{
   try{

    const{_id, ...resBody}= req.body
    
    const updateProduct=  await productModel.findByIdAndUpdate(_id, resBody)

    res.status(201).json({
        message:"Product update Successfully",
        error: false,
        success:true,
        data: updateProduct
    })
   }
   catch(err){
    res.status(500).json({
        message:err.message || err,
        error : true,
        success:false

        })
   }

}




module.exports= updateProductController;