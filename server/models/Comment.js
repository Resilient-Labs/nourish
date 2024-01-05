import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  likes: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Comment = mongoose.model("Comment", CommentSchema)
export { Comment }
