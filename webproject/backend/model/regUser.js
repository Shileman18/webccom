let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 
  fname: {
    type: String,
 
  },
  lastname: {
    type: String,

  },
  email: {
    type: String,
   
  },
  password: {
    type: String, 
 
  },
 cart:{
  type:Array,
  default:[],
},
 address:String,
 wishlist:[{type:mongoose.Schema.Types.ObjectId, ref:"Product"}],
  token: String,
  resetPasswordToken:String,
  resetPasswordExpires:Date,
},{
  timestamps:true,
}
);

module.exports = mongoose.model("Userdata", userSchema);
