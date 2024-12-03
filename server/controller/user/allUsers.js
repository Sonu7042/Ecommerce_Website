const  userModel= require("../../model/userModel")


const  allUsers=async(req, res)=>{
    try{
        const users= await userModel.find()
        res.status(200).json({
            message:"All users got Successfully",
            error:false,
            success:true,
            data:users
        })

    }
    catch(err){
        res.status(500).json({
            message: err.message || err,
            error:true,
            success:false
        })
    }

}


module.exports= allUsers