const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
  userId: { type: String },
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,

      },
    },
  ],
  
},
{ timestamps: true },
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
