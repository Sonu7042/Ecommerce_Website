const userModel= require('../../model/userModel')


const userDetailsController=async(req, res)=>{
    try{
        
        const user= await userModel.findById(req.userId)
        
        if(!user){
            throw new Error("something wrong")
        }
        
        res.status(200).json({
            message:"current user got",
            success:true,
            error:false,
            data:user
        })


    }
    catch(err){
        res.status(500).json({
            message: err.message || err,
            success:false,
            error:true
        })

    }
}


module.exports= userDetailsController;

