const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser = require("body-parser")
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const user = require("../models/user");
const { signupvalidation, loginvalidation } = require("../validation")

var parseUrlencoded = bodyParser.urlencoded({ extended: true })


router.get("/signup", (req, res, next) => {
  var messageerror = require.flash("error")
  // console.log(messageerror)
  res.redirect("signup", { message: messageerror })
}),

  router.post('/signup', parseUrlencoded, async (req, res) => {

    const { error } = signupvalidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    var messagevalidation = [];
    messagevalidation.push(error.details[0].message)
    console.log(messagevalidation)
    
    req.flash("error", error)
   
    const emailexist = await user.findOne({ email: req.body.email });
    if (emailexist) return res.status(400).send("email aready exists");
    req.flash("error", 'email aready exists')
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt)
    const User = new user()
    User.Fname = req.body.Fname
    User.Lname = req.body.Lname
    User.email = req.body.email
    User.password = hashpassword
    try {
      const saveduser = await User.save();
      res.send(saveduser);
    } catch (error) {
      res.status(400).send(error)
    }

    req.flash("error", error)
    //  if(error){
    //    console.log(error)
    //  }
    //  console.log("saved!")
    // res.redirect("http://localhost:4200/home")
  });


router.post("/login", async (req, res) => {
  const { error } = loginvalidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const userlogin = await user.findOne({ email: req.body.email });
  if (!userlogin) return res.status(400).send("Email doesn't exist");

  const passwordvalid = await bcrypt.compare(req.body.password, userlogin.password);
  if (!passwordvalid) return res.status(400).send("password not valid")
  res.send("log in")

})



module.exports = router