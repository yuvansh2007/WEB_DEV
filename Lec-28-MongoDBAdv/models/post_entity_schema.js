const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    content: {
      type: String,
      required: true,
      minLength: 3,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    category: {
      type: String,
      enum: ["tech", "sports", "entertainment"],
    },
  },
  { timestamps: true }, // creates a created_at and updated_at
);

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
