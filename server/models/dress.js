const mongoose = require("mongoose");

const schema = mongoose.Schema;
const cloth = new schema({
    name:String,
    color:String,
    price:Number,
    material:String,
    img_url:String
})
module.exports=mongoose.model("cloth",cloth);