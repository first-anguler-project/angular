const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser =require("body-parser")

var parseUrlencoded= bodyParser.urlencoded({extended: true})





router.post('/sign',parseUrlencoded,function(req,res){
     console.log(req.body);
    res.status(200).send({"data":"Recieved successfully"}); 
   }); 

   module.exports=router