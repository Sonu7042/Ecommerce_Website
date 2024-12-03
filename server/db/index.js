const mongoose= require('mongoose')






const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.db_url)
        console.log("db is connected")

    }
    catch(err){
        console.error(err)
    }
}


module.exports= connectDB