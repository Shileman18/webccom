const express = require("express");
const router = express.Router();
const formidable=require("express-formidable");
const { createBlog ,updateeBlog, getBlog, getAllBlog, deleteBlog} = require("../controller/blogInfo");


router.post("/createBlog",createBlog);
router.put("/updateeBlog/:id",updateeBlog);
router.get("/getBlog/:id",getBlog);
router.get("/getAllBlog",getAllBlog);
router.delete("/updateeBlog/:id",deleteBlog );
router.delete("/deleteBlog/:id",deleteBlog );


module.exports=router