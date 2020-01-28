const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Wishlist=require("../models/wishlist")


router.get("/wishlist/:_id/:name/:price",(req,res,next)=>{
   const productprice=parseInt(req.params.price,10)
   const newproduct= {
       _id:req.params._id,
       name: req.params.name,
       price:productprice
   }
   
    // console.log(req.params._id)
    // console.log(req.params.price)
    // console.log(req.user._id)
    // mongoose.model("user").findById()
    // const wishlistID =req.user._id;
    Wishlist.findById(wishlistID,(error,wishlist)=>{
        if (error){
            console.log(error)
        }
        if(!wishlist){
            const newwishlist=new wishlist({
                _id: wishlistID,
                totalquality:1,
                totalprice:productprice,
                selectedproduct:[newproduct]
            }) 
          newwishlist.save((error,data)=>{
              if (error){
                  console.log(error)
              }
              console.log(data)
          })
        }
    })

})
module.exports=router