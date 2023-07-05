const Blog = require("../models/model");

async function getallBlog(req, res) {
  try {
    const data = await Blog.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
}

async function getBlogbyid(req, res) {
  try {
    const id = req.params.id;
    const data = await Blog.findById(id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

async function blog(req, res) {
  try {
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    });
    const result = await blog.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function blogDelete(req, res) {
  try {
    const id = req.params.id;
    const result = await Blog.findByIdAndDelete(id);
    res.status(200).json({ messge: "deleted succesfully" });
  } catch (err) {
    console.log(err);
  }
}
async function blogUpdate(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const options = { new: true };
    const result = await Blog.findByIdAndUpdate(id, data, options);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = {
  getallBlog,
  getBlogbyid,
  blog,
  blogDelete,
  blogUpdate,
};
