const express = require("express");
const router = express.Router();
const formidable=require("express-formidable");
const Order = require("../model/order");
const { orderCreate,updatedOrder, deleteorder, findUser, getsall}=require("../controller/orderInfo")


//CREATE

router.post("/ordercreate",orderCreate );

router.put("/updatedOrder/:id",updatedOrder );
router.delete("/deleteorder/:id",deleteorder );
router.get("/findUser/:userId",findUser);
router.get("/getsall",getsall);





module.exports = router;
