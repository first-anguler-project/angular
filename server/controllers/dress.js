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

router.get("/details/:id",(req,res)=>{
    mongoose.model("cloth").findOne({_id: req.params.id},(error,data)=>{
        if(error){
            console.log(error)
        }
        // console.log(data)
        res.json(data)
    }) 
})

module.exports=router