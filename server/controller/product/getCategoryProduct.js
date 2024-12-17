const  productModel= require('../../model/productModel')

const getCategoryProduct=async(req, res)=>{
    try{

        const productCategory= await productModel.distinct('category')
        
        const productByCategory= []

        for(let category of productCategory){
            const product= await productModel.findOne({category})
            productByCategory.push(product)
        }


        res.status(200).json({
            message: "found Category Product",
            success: true,
            error: false,
            data: productByCategory

        })


    }
    catch(err){
        res.status(500).json({
            message: err.message || err,
            success: false,
            error: true
        })
    }


}


module.exports= getCategoryProduct