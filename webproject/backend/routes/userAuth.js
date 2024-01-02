const express = require("express");
const { createUser, loginpage ,forgetpassword, resetpassword, resetGetpassword, getAllUsers, getUsers, deleteUsers, updateUsers} = require("../controller/userCntrl.js");
const router = express.Router();
const formidable=require("express-formidable")
const verifyToken=require("../middlewares/authontication.js");

router.post("/register",formidable(), createUser);
router.get("/getAllUsers",formidable(), getAllUsers);
router.get("/getUsers/:id",formidable(), getUsers);
router.delete("/deleteUsers/:id",formidable(), deleteUsers);
router.put("/updateUsers/:id",formidable(), updateUsers);

router.post("/loginpage",formidable(), loginpage);

router.post("/forgetpassword",formidable(),forgetpassword);

router.post("/resetpassword/:token", resetpassword);

router.get("/resetGetpassword/:token",formidable(), resetGetpassword);
 

router.get("/profile",verifyToken,function(req,res){
  res.send("welcome to profile")
 })

module.exports = router;
