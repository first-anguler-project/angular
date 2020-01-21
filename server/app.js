const express= require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const fs = require("fs")
const multer=require("multer")
// const fileUpload = require('express-fileupload')
const product=require("./controllers/product")
const route = express.Router();
const app=express();
// app.use(fileUpload());

mongoose.connect("mongodb://127.0.0.1:27017/MagicShop",(err,res)=>{
    if(err){
        console.log(err)
    }
    console.log("connected with database")
});


app.use("/get",product)
app.use(express.static("public"));   

app.use(function(req,resp,next){
    resp.setHeader("Access-Control-Allow-Origin","*");
    resp.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    next()
  });

  var files_arr=fs.readdirSync(__dirname+"/models")
  files_arr.forEach(function(file){
    require(__dirname+"/models/"+file);
  });


app.listen(4000,function(){
    console.log("server is listenning ....")
})