const jwt= require('jsonwebtoken')

const authToken=async(req, res, next)=>{
    try{
        const token=req.headers["token"]
        // console.log(token)
       
       
        if(!token){
            return res.status(401).json({
                message:'Access denied. No token provided.',
                success:false,
                error:true
            })
        }

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if(err){
                console.log("error auth", err)
            }

           
            req.userId=decoded?.id
            


            next()
        
        })

    }
    catch(err){

    }
}


module.exports = authToken;