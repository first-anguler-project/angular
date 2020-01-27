const mongoose = require("mongoose");

const schema = mongoose.Schema;
const makeup = new schema({
    name:String,
    
    price:Number,

    img_url:String
})
module.exports=mongoose.model("makeup",makeup);