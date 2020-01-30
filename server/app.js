const express= require("express")
const mongoose=require("mongoose")
const badyparser=require("body-parser")
const cors=require("cors")
const session =require("express-session")
const product=require("./controllers/product")
const dress=require("./controllers/dress")
const makeup=require("./controllers/makeup")

const user =require("./controllers/user")
const wishlist =require("./controllers/wishlist ")
const app=express();
const joi =require('@hapi/joi')
const flash =require("connect-flash")
app.use(badyparser.json());
app.use(cors());
app.use(flash())

app.get('/',function(req,res){

res.send("heloo");
});

app.use("/user",user)
app.use("/bag",product) 
app.use("/product",wishlist)
app.use("/dress",dress)
app.use("/makeup",makeup)

 
app.use(session({
  secret:"shopping_?@!",
  saveUninitialized:false,
  resave:false
}))

const fs = require("fs")
const multer=require("multer")
// const fileUpload = require('express-fileupload')

mongoose.connect("mongodb://127.0.0.1:27017/MagicShop",(err,res)=>{
    if(err){
        console.log(err)
    }
    console.log("connected with database")
});



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


app.listen(5000,function(){
    console.log("server is listenning ....")
})