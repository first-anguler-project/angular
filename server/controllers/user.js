const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require("body-parser")
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const user = require("../models/user");
const {signupvalidation,loginvalidation}=require("../validation")

var parseUrlencoded = bodyParser.urlencoded({ extended: true })





router.post('/signup', parseUrlencoded, async (req, res) => {
  
   const {error}  =signupvalidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);

   const emailexist= await user.findOne({email:req.body.email});
   if (emailexist) return res.status(400).send("email aready exists");

    const salt =await bcrypt.genSalt(10);
    const hashpassword =await bcrypt.hash(req.body.password ,salt )
  const User = new user()
  User.Fname = req.body.Fname
  User.Lname = req.body.Lname
  User.gender = req.body.gender
  User.data = req.body.data
  User.month = req.body.month
  User.year = req.body.year
  User.email = req.body.email
  User.phone = req.body.phone
  User.password = hashpassword
  try {
    const saveduser = await User.save();
    res.send(saveduser);
  } catch (error) {
    res.status(400).send(error)
  }
     if(error){
       console.log(error)
     }
     console.log("saved!")
    
   });


router.post("/login", async(req, res) => {
  const {error}  = loginvalidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  const userlogin =await user.findOne({ email: req.body.email });
  if (!userlogin) return res.status(400).send("Email doesn't exist");
  
const passwordvalid= await bcrypt.compare(req.body.password,userlogin.password);
if (!passwordvalid) return res.status(400).send("password not valid")
  res.send("log in")

})



module.exports = router