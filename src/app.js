const express = require("express");
const app = express();
const connectDB=require("./config/database")
const User=require("./scheme/model")

app.use(express.json());//vonvet Json to Js object .its middleware

app.post("/signup",async (req,res)=>{
  
   
    const user=new User(req.body)
  

    try{
    await user.save()
     res.send("user add to database")
    }catch(err){
    res.status(404).send("Error occur during load data"+err.message)
    }
    
})

app.get("/user",async (req,res)=>{
    const userid= req.body.userid;
    console.log(userid);
    
    try{
        const user= await User.findById(userid);
        res.send(user);
    }
    catch(err){
        res.status(404).send("Error occur during load data"+err.message)
        }
    
   


})

app.get("/feed",async (req,res)=>{
    
 try{
    const user= await User.find({})
    res.send(user)
 }
 catch(err){
    res.status(400).send("Something went wrong")
 }
   
})

app.delete("/user",async (req,res)=>{
    const userid=req.body.userid;
    try{
        //const userdelete= await User.findByIdAndDelete(userid);
        const userdelete= await User.findByIdAndDelete({_id:userid});
        res.send("User deleted Sucessfully")
    }
    catch(err){
    res.status(404).send("Error occur during load data"+err.message)
    }
})

app.patch("/user",async(req,res)=>{
    const userid=req.body.userid;
    const data=req.body
    console.log(data);
    
    try{
         const userUpdate=await User.findByIdAndUpdate(userid,data,{returnDocument:'before'})
     
        
         res.send("Update the data Sucessfully")
    }
    catch(err){
        res.status(404).send("Error Occur During loading"+err.message)
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



