const productModel= require('../../model/productModel')

const uploadProductController=async(req, res)=>{
   try{

    const uploadProduct= req.body
    const  saveProduct=  await productModel.create(uploadProduct)

    res.status(201).json({
        message:"Product upload Successfully",
        error: false,
        success:true,
        data: saveProduct
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




module.exports= uploadProductController;