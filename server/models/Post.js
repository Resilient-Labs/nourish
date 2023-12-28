import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  cityState: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  tags: [
    {
      type: String
    }
  ],
  image: {
    type: String
  },
  cloudinaryId: {
    type: String,
    require: true
  },
  likes: {
    type: Number,
    required: true
  },
})

const Post = mongoose.model("Post", PostSchema)
export { Post }
