require('dotenv').config()
import mongoose from "mongoose"
const uri  = process.env.mongoUri
const connect = async () =>{
    try{
        await mongoose.connect(uri||"")
        console.log('DB Connected!!')
    }
    catch(err){
        console.error(err)
        process.exit(1)
    }
}
export default connect