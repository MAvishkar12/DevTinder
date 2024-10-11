const express = require("express");
const app = express();

// app.use("/",(req,res)=>{
//   res.send("This is main location")
// })

// app.get("/user",(req,res)=>{
//   res.send({"Firstname":"Ratan","LastName":"Tata"})
// })

// app.post("/user",(req,res)=>{
//   res.send("This is post request")
// })

// app.delete("/user",(req,res)=>{
//   res.send("This is delete http method method")
// })

// app.use(
//   "/user",[
//   (req, res, next) => {
//     // console.log(req.params.userid);
//     console.log("Response 1");

//     next();
//   },
//   (req, res, next) => {
//     console.log("Response 2");

//     next();
//   }],
//   (req,res,next)=>{
//     console.log("Response 3");
//     res.send("Response 3")
    
//   },
//   (req,res,next)=>{
//     console.log("Response 4");
//     res.send("Response 4")
    
//   }

// );

app.use("/user",(req,res,next)=>{
  console.log("Response 1");
  next()
})

app.use("/user",(req,res,next)=>{
  console.log("Response 2");
 
  next();
},
(req,res,next)=>{
  console.log("Response 3");
  res.send("Response 3")
     
})

app.listen(3000, () => {
  console.log("Application start a port 3000");
});
