let mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   productId: {
        type: Number,
        required: true,
      },
    title: {
    type: String,
 
  },
 
  description: {
  type: String,
 
},
price: {
  type: Number,

},
totalPrice: {
  type: Number,

},
  category: {
   type:String,
  },
  brand: {
    type:String,
  
  },
  quantity: {
    type: Number,
  },
  sold: {
    type: Number,
    default: 0,
  },
  images: {
    type: String,
    
  },
  ratings: [
    {
      star:Number,
      postedby:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
    },
  ],
   
 

},
{timestamps:true}
);

const product= mongoose.model("Product", productSchema);

module.exports=product
