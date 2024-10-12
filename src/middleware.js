const userAutentication=(req,res,next)=>{
    const token="abc"
    const useAutentication=token==="abc";
    if(useAutentication){
         next();
    }
    else{
      res.status(401).send("Unauthorized Error")
    }
  }

 module.exports=userAutentication; 
