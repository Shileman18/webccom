const express = require("express");
const { signup,signin, sendotp,submitotp} = require("../controller/user.js");
const router = express.Router();
const formidable=require("express-formidable")
// const verifyToken=require("../middlewares/authontication.js");

router.post('/signup',formidable(), signup)
router.post('/signin',formidable(),  signin)
router.post('/submitotp', formidable(), submitotp)
router.post('/sendotp',formidable(),  sendotp)

module.exports = router;
