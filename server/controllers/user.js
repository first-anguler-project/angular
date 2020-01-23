const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser =require("body-parser")

var parseUrlencoded= bodyParser.urlencoded({extended: true})





router.post('/signup',bodyParser.json(),function(req,res){
     console.log(req.body);
     const usermodel=mongoose.model(User)
     const User=new usermodel()
     User.name=req.body.name
     User.email=req.body.email
     User.password=req.body.password
     
     User.save((result,error)=>{
       if(error){
         console.log(error)
       }
       console.log("saved!")
     })
   
   }); 


   router.post("/login",(req,res)=>{
     mongoose.model(user).findOne({email:req.body.email},
     (error,result)=>{
if (error){
  console.log(error)
}
if(result){
  
}
     } )
   })

   module.exports=router