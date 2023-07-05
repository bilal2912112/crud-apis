const express = require("express");
const router = express.Router();
const Blog = require("../models/model");
const {
  getallBlog,
  getBlogbyid,
  blog,
  blogDelete,
  blogUpdate,
} = require("../controllers/controller");
router.get("/blog/getall", getallBlog);

router.get("/blog/getbyid/:id", getBlogbyid);

router.post("/blog/add", blog);

router.delete("/blog/delete/:id", blogDelete);

router.put("/blog/update/:id", blogUpdate);

module.exports = router;
