const {mongoose}=require('mongoose');

dbConnection=async()=>{
    try {
        await(mongoose.connect(process.env.MONGO_CNN))
        console.log('Connected to')
    } catch (error) {
        console.log(error)
        
    }
}
module.exports=dbConnection