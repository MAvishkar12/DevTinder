const mongoose=require("mongoose")

const connectDB=async ()=>{
    mongoose.connect("mongodb+srv://MAvishkar12:QlmOMJK94OA64g5Z@namastenodejs.cjrsd.mongodb.net/devTinder")
}

module.exports=connectDB;

