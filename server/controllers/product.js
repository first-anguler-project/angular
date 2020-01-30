const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser =require("body-parser")


var parseUrlencoded= bodyParser.urlencoded({extended: true})

router.get("/category",(req,res)=>{
    mongoose.model("bag").find((error,result)=>{
    if(error){
                console.log(error)
            }
            console.log("got all bag")
           
            res.json(result)
        })  
});

// router.get("/package/:_id",(req,res)=>{
//     console.log(req.params._id)

router.get("/details/:id",(req,res)=>{
    mongoose.model("bag").findOne({_id: req.params.id},(error,data)=>{
        if(error){
            console.log(error)
        }
        // console.log(data)
        res.json(data)
    }) 
})


// router.get("/details",(req,res)=>{
//     mongoose.model("bag").findById((error,data)=>{
//         if(error){
//             console.log(error)
//         }
//         console.log(data)
//         res.json(data)
//     }) 
// })


// route.post("/add",parseUrlencoded,(req,res)=>{
//     res.render("./app.html")
// const product =mongoose.model("product");
// const products= new product ()
// products.productname=req.body.productname,
// products.productprice=req.body.productprice,
        
//         products.save((error,result)=>{
//             if(error){
//                 console.log(error)
//             }
//             console.log(result)
//         });
//         });



  
module.exports=router