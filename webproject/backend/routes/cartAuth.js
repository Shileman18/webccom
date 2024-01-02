const express = require("express");
const router = express.Router();
const formidable=require("express-formidable");
const { cartCreate, updateCart,deleteCart,findUser,getsall } = require("../controller/cartInfo");

//CREATE

router.post("/cartCreate",cartCreate );
router.put("/updateCart/:id",updateCart );
router.delete("/deleteCart/:id",deleteCart );
router.get("/findUser/:userId",findUser );
router.get("/getsall",getsall );






module.exports = router;
