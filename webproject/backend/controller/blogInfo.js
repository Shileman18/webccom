const bodyParser = require("body-parser");
const Blog = require("../model/blogModel");
const User = require("../model/regUser");

const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
};

const updateeBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const uppdateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(uppdateBlog);
  } catch (error) {
    throw new Error(error);
  }
};

const getBlog = async (req, res) => {
  const { id } = req.params;
  try {
    // const getBlog=await Blog.findById(id);
    const updateView = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      {
        new: true,
      }
    );
    res.json(updateView);
  } catch (error) {
    throw new Error(error);
  }
};

const getAllBlog = async (req, res) => {
  try {
    const getAllBlog = await Blog.find();
    res.json(getAllBlog);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBlog = await Blog.findByIdAndDelete(id);
    res.json(deleteBlog);
  } catch (error) {
    throw new Error(error);
  }
};



module.exports = { createBlog, updateeBlog, getBlog, getAllBlog, deleteBlog };
