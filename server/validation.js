const Joi = require("joi");
 
const signupvalidation= (data)=>{
    const signupschema = Joi.object({
        Fname: Joi.string().min(3).required(),
        Lname: Joi.string().min(3),
        phone: Joi.string().required(),
        email: Joi.string().required().min(6).email(),
        password: Joi.string().required().min(6)
    
    });
   return signupschema.validate(data)
};


const loginvalidation= (data)=>{
    const loginschema = Joi.object({
        email: Joi.string().required().min(6).email(),
        password: Joi.string().required().min(6)
    
    });
  return  loginschema.validate(data)
};


module.exports.signupvalidation=signupvalidation
module.exports.loginvalidation=loginvalidation
