const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


router.get("/category",(req,res)=>{
    mongoose.model("cloth").find((error,result)=>{
    if(error){
                console.log(error)
            }
            console.log(result)
           
            res.json(result)
        })  
});

module.exports=router