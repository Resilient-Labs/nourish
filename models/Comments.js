const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  commentByUserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  commentByUserName: {
    type: String,
    ref: "User",
  },
  postID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentsSchema);
