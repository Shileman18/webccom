let mongoose = require("mongoose");





  exports.connect=()=>{
    mongoose.connect("mongodb://localhost:27017/ecom")
    .then(() => console.log("Connected successfully!"))
    .catch(() => console.log("Error in connection"));
  
};