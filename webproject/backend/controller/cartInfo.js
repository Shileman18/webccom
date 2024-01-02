const Cart=require("../model/cart")

//CREATE 
const cartCreate = async (req, res) => {
    const savedCart = new Cart(req.body);
  
    try {
      const newsavedCart = await savedCart.save();
      res.status(200).json(newsavedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
//UPDATE

const updateCart= async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteCart= async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}

// GET USER ORDERS
const findUser=async (req, res) => {
  try {
    const Carts = await Cart.find({ userId: req.params.userId });
    res.status(200).json(Carts);
  } catch (err) {
    res.status(500).json(err);
  }
}


//GET ALL

const getsall= async(req, res)=>{
  try {
    const carts= await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
}
  module.exports = {cartCreate,updateCart,deleteCart,findUser,getsall}