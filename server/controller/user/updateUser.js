const userModel= require('../../model/userModel')


const updateUser=async(req, res)=>{
    try{
        
        const {userId, role}= req.body
        const updateuser= await userModel.findByIdAndUpdate(userId, {role:role}, {new:true})
    
       
        res.status(200).json({
            message: "User Updated Successfully",
            success:true,
            error:false,
            data:updateuser
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


module.exports= updateUser;

