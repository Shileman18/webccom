let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 
  fname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String, 
    require: true,
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
