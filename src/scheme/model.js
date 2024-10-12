const mongoose=require("mongoose")

const userScheme=new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    age:{
        type:Number
    },
    emailid:{
        type:String
    },
    city:{
        type:String
    },
    pass:{
        type:String
    }
})

const User=mongoose.model("User",userScheme)

module.exports=User;