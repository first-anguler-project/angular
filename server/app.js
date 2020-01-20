const express= require("express")
const mongoose=require("mongoose")
const badyparser=require("body-parser")
const cors=require("cors")
const product=require("./controllers/product")

const app=express();

const PORT=3000;
app.use(badyparser.json());
app.use(cors());


app.get('/',function(req,res){

res.send("heloo");
});
  
app.post('/enrollment',function(req,res){ console.log(req.body);
     res.status(200).send({"data":"Recieved successfully"}); 
    }); 



const fs = require("fs")
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


app.listen(4200,function(){
    console.log("server is listenning ....")
})