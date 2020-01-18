const mongoose= require("mongoose");
const schema=mongoose.Schema;
const product=new schema({
    name:String,
    color:String,
    price:Number,
    size:[{"width":Number,
            "hight":Number,
            "depth" :Number}],
    material:String,        

});
module.exports=mongoose.model("product",product);