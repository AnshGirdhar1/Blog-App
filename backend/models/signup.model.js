const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    passsword : {type : String, required : true},
    age : {type : Number, required : true}
})

const SignupModel = mongoose.model("users",signupSchema);

module.exports = SignupModel;