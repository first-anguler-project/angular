const mongoose = require("mongoose");

const schema = mongoose.Schema;
const cart = new schema({
  _id:{
      required:true,
      type: String
  },
  totalquantity:{
      required:true,
      type:Number
  },
  totalprice:{
      required:true,
      type:Number
  },
  selectedproduct:{
      required:true,
      type:Array
  }







})
module.exports=mongoose.model("cart",cart);