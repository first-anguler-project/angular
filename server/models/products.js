const mongoose= require("mongoose");
const schema=mongoose.Schema;
const bag=new schema({
    name:String,
    color:String,
    price:Number,
    size:[{"width":Number,
            "hight":Number,
            "depth" :Number}],
    material:String, 
    img:String       

});
module.exports=mongoose.model("bag",bag);