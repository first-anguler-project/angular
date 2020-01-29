const mongoose =require("mongoose");
const wishlistschema = mongoose.Schema({

    // _id:{
    //     required:true,
    //     type:String
    // },
    // totalquantity:{
    //     required:true,
    //     type:Number
    // },
    totalprice:{
        required:true,
        type:Number
    },
    selectedproduct:{
        required:true,
        type:Array
    }

})
module.exports=mongoose.model("wishlist",wishlistschema)