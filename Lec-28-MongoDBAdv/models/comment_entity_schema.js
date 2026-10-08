const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    Comment: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
    },
    Commenter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    Post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
  },
  { timestamps: true },
);

const CommentModel = mongoose.model("comment", commentSchema);
module.exports = CommentModel;
