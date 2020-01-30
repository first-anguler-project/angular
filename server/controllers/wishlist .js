const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Wishlist=require("../models/wishlist")


router.get("/wishlist/:_id/price",(req,res,next)=>{
  const productprice=req.params.price
   const newproduct= {
       _id:req.params._id,
       name: req.params.name,
       price:productprice
   }
   
    // console.log(req.params._id)
    // console.log(req.params.price) 
    // console.log(req.user._id)
    // mongoose.model("user").findById()
    const wishlistID =req.params._id;
    Wishlist.findById(wishlistID,(error,wishlist)=>{
        if (error){
            console.log(error)
        }
        
        if(!wishlist){
console.log(wishlist)
            const newwishlist=new Wishlist({
                 _id: wishlistID,
              
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
        // if(wishlist){
        //     var indexofproduct=-1;
        //     for(var i=0;i<wishlist.selectedproduct.length; i++)
        //     if(req.params.id === wishlist.selectedproduct[1]._id){
        //         indexofproduct=i;
        //         break;
        //     }
        //     if(indexofproduct>=0){
        //         console.log("update product")
        //     }
           
        // }
    })

})
module.exports=router