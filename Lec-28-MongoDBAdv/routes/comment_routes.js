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
  const { postId } = req.query;
  const commentList = await CommentModel.find({
    Post: postId,
  }).populate("commenter", "username");

  res.json({
    message: "Success",
    comment: commentList,
  });
});

CommentRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  await CommentModel.findByIdAndUpdate(id, {
    Comment: comment,
  });
  res.json({
    message: "update success",
  });
});

module.exports = CommentRouter;
