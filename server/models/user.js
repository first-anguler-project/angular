const mongoose = require("mongoose");

const schema = mongoose.Schema;
const user = new schema({
    Fname: {
        type: String,
        required: true
    },

    Lname: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
       
    },

    password: {
        type: String,
        required: true
    }

})
module.exports = mongoose.model("user", user)
