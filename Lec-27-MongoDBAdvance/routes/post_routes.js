const express = require("express");
const postModel = require("../models/post_entity_schema");
const PostRouter = express.Router();

PostRouter.post("/", async (req, res) => {
  const { title, content, authorid, category } = req.body;
  const post = new postModel({
    title,
    content,
    category,
    author: authorid,
  });
  await post.save();
  res.json({
    message: "success",
    post: post,
  });
});

PostRouter.get("/", async (req, res) => {
  const postlist = await postModel.find().populate("author");
  res.json({
    message: "success",
    post: postlist,
  });
});

PostRouter.get("/filter", async (req,res)=>{

})

module.exports = PostRouter;
