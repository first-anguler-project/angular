const mongoose= require("mongoose");
const schema=mongoose.Schema;
const user=new schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    passwoed:{
        type:String,
        required:true
    }

})
module.exports=mongoose.Model("user",user)