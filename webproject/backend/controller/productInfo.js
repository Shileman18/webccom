const bodyParser = require("body-parser");
const Product = require("../model/product");
const User = require("../model/regUser");


const createProduct =async (req, res) => {
    const {productId,title,description,price,category,quantity } = req.body;

    if (!(productId && title &&  description && price&& category && quantity  )) {
      res.status(400).send("provide valid input");
    } else {
      let newProduct = await Product.create({
        productId:productId,
        title: title,
      
        description:description,
        price: price,
        category:category,
        quantity:quantity,
      });
  
      res.status(201).send(newProduct)
    }
  }

// Endpoint for image upload
// router.post('/upload', upload.single('image'),



// const uploadimg =async (req, res) => {
//   try {
//     const { name, description, price } = req.body;
//     const image = req.file.filename; // Multer provides the filename

//     // Create a new product with image filename
//     const newProduct = new Product({ name, description, price, image });

//     // Save the product to the database
//     const savedProduct = await newProduct.save();

//     res.json(savedProduct);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }


const getbyid= async (req, res) => {
    try {
      const productbyid = await Product.findById(req.params.id);
      res.json(productbyid);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }



const addToCart=async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Check if there is enough quantity available
    if (product.quantityAvailable <= 0) {
      return res.status(400).json({ error: 'Not enough quantity available' });
    }

    // Update the product quantity and save
    product.quantityAvailable -= 1;
    await product.save();

    res.json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}




 const productget= async (req, res) => {

    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  const   updateProduct =async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.fields, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
  };

  const deletedProduct =async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(deletedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  const addToWishList=async (req, res) => {
    const { productId } = req.body;
    const userId = req.user._id; // Assuming you have user information in the request (e.g., after authentication)
  
    try {
      // Find the user by ID and update the wishlist
      const user = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { wishlist: productId } },
        { new: true }
      );
  
      res.json({ success: true, wishlist: user.wishlist });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  };

  module.exports = { createProduct,updateProduct, addToCart,getbyid, productget,deletedProduct,addToWishList};










  