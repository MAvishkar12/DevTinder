const express=require("express")
const app=express()


app.use("/",(req,res)=>{
  res.send("This is home of website page")
})

app.use("/hello",(req,res)=>{
  res.send("This is hello page")
})

app.use("/profile",(req,res)=>{
  res.send("This is profile page")
})

app.listen(3000,()=>{
  console.log("Application start a port 3000");
});

