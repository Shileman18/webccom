
const express = require("express");
const router = express.Router();
const formidable=require("express-formidable")
// const upload=require("../middlewares/multer.js")
const { createProduct ,updateProduct,addToCart, productget,getbyid, deletedProduct, addToWishList} = require("../controller/productInfo.js");

// router.post('/CreteProduct', upload.single('image'),createProduct)
router.post("/CreteProduct",createProduct)
router.post("/addToCart/:id",addToCart)
router.put("/updateP/:id", formidable(), updateProduct)
router.get('/getProducts',formidable(),productget)
router.get('/getbyid/:id',formidable(),getbyid)
router.delete("/deleteProduct/:id",formidable(),deletedProduct)
router.put("/addToWishList",addToWishList)
module.exports = router;
