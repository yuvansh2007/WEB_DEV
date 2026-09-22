const express = require("express");
const CommentModel = require("../models/comment_entity_schema");
const CommentRouter = express.Router();

CommentRouter.post("/", async (req, res) => {
  const { Comment, Commenterid, Postid } = req.body;
  const comment = new CommentModel({
    Comment,
    Commenter: Commenterid,
    Post: Postid,
  });
  await comment.save();
  res.json({
    message: "success",
    comment: comment,
  });
});

CommentRouter.get("/", async (req, res) => {
  const commentlist = await CommentModel.find().populate("Post");
  res.json({
    message: "success",
    comment: commentlist,
  });
});

module.exports = CommentRouter;
