import { cloudinary2 } from "../middleware/cloudinary2.js"
import { Post } from "../models/Post.js"
import { Comment } from "../models/Comment.js"
import pkg from "mongodb"
const { ObjectID } = pkg

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ time: "desc" }).lean()
    res.json({ posts: posts })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    const comments = await Comment.find({ postID: req.params.id })
    res.json({ post: post, comment: comments, user: req.user })
  } catch (err) {
    console.log(err)
  }
}
//Not need since we have the profile controller right?
// export const getProfile = async (req, res) => {
//   try {
//     const posts = await Post.find({ user: req.user.id })
//       .sort({ time: "desc" })
//       .lean()
//     res.json({ posts: posts, user: req.user })
//   } catch (err) {
//     console.log(err)
//   }
// }
export const createPost = async (req, res) => {
  try {
    //may have to add to this once community board is created
    const result = await cloudinary2.uploader.upload(req.file.path)
    await Post.create({
      title: req.body.title,
      image: result.secure_url,
      cloudinaryId: result.public_id,
      content: req.body.content,
      likes: 0,
      user: req.user.id,
      tags: req.body.tags ? JSON.parse(req.body.tags) : [],
    })
    console.log("Post has been added!")
    //res.redirect("/profile");
    res.status(200).send({ message: "Post added successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: "Error added post" })
  }
}
export const likePost = async (req, res) => {
  try {
    await Post.findOneAndUpdate({ _id: req.params.id }, { $inc: { likes: 1 } })
    console.log("Likes +1")
    //res.redirect(`/post/${req.params.id}`);
    res.status(200).send({ message: "Post liked successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: "Error liking post" })
  }
}
//COMMENTS =====================================================
export const addComment = async (req, res) => {
  try {
    await Comment.create({
      comment: req.body.comment.trim(),
      user: req.user.id,
      post: req.params.id
    })
    console.log("Comment has been added!")
    //res.redirect(`/post/${req.params.id}`);
    res.status(200).send({ message: "Comment added successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: "Error adding comment" })
  }
}
export const editComment = async (req, res) => {
  try {
    const commentId = req.params.id;

    // Find the comment by ID and update
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { comment: req.body.comment.trim() }, // Update the 'comment' field
      { new: true } // Returns the updated document
    );

    if (!updatedComment) {
      return res.status(404).send({ message: "Comment not found" });
    }

    console.log("Comment has been edited!");
    res.status(200).send({ message: "Comment edited successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error editing comment" });
  }
}
export const deleteComment = async (req, res) => {
  try {
    
    const commentId = req.params.id;

    // Find the comment by ID and delete it
    const deletedComment = await Comment.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).send({ message: "Comment not found" });
    }

    console.log("Comment has been deleted!");
    res.status(200).send({ message: "Comment deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error deleting comment" });
  }
}
//END COMMENTS =====================================================
export const deletePost = async (req, res) => {
  try {
    // Find post by id
    let post = await Post.findById({ _id: req.params.id })
    // Delete image from cloudinary
    await cloudinary2.uploader.destroy(post.cloudinaryId)
    // Delete post from db
    await Post.remove({ _id: req.params.id })
    console.log("Deleted Post")
    //res.redirect("/profile");
    res.status(200).send({ message: "Post deleted successfully" })
  } catch (err) {
    console.log(err)
    //res.redirect("/profile");
    res.status(500).send({ message: "Error deleting post" })
  }
}
