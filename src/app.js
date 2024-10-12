const express = require("express");
const app = express();
const connectDB=require("./config/database")
const User=require("./scheme/model")


app.post("/signup",async (req,res)=>{
    const user=new User({
      firstname:"Virat ",
      lastname:"Kohli",
      emailid:"virat@kohli.com",
      pass:"Kohli17@gamil.com"

    })
  

    try{
      await user.save()
      res.send("user add to database")
    }catch(err){
    res.status(404).send("Error occur during load data"+err.message)
    }
    
})
connectDB()
.then(()=>{
    console.log("Database connection made sucessfully..!");
    app.listen(3000, () => {
      console.log("Application start a port 3000");
    });
})
.catch((err)=>{
    console.error("Error Occur in Database Connection"+err.message);
})



