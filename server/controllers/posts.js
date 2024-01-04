import { cloudinary2 } from "../middleware/cloudinary2.js"
import { Post } from "../models/Post.js"
import { Comment } from "../models/Comment.js"
import pkg from "mongodb"
const { ObjectID } = pkg

// POSTS =====================================================

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "firstName lastName") // Populate user details
      .populate({
        path: "comments", // Populate comments
        populate: { path: "user", select: "firstName lastName" } // Populate fields of comments, like user who made the comment
      })
      .sort({ time: "desc" })

    res.json({ posts: posts, user: req.user })
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

export const createPost = async (req, res) => {
  try {
    let imageInfo = { secure_url: null, public_id: null }

    // Check if there's a file in the request and upload it
    if (req.file && req.file.path) {
      const result = await cloudinary2.uploader.upload(req.file.path)
      imageInfo = { secure_url: result.secure_url, public_id: result.public_id }
    }

    // Create post with or without image
    await Post.create({
      title: req.body.title,
      image: imageInfo.secure_url,
      cloudinaryId: imageInfo.public_id,
      content: req.body.content,
      likes: 0,
      user: req.user.id,
      tags: req.body.tags ? JSON.parse(req.body.tags) : []
    })

    console.log("Post has been added!")
    res.status(200).send({ message: "Post added successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: "Error adding post" })
  }
}

export const likePost = async (req, res) => {
  try {
    await Post.findOneAndUpdate({ _id: req.params.id }, { $inc: { likes: 1 } })
    //res.redirect(`/post/${req.params.id}`);
    res.status(200).send({ message: "Post liked successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: "Error liking post" })
  }
}

export const deletePost = async (req, res) => {
  try {
    // Find post by ID
    const post = await Post.findById(req.params.id)

    // Check if post exists
    if (!post) {
      return res.status(404).send({ message: "Post not found" })
    }

    // Check if authenticated user is creator of post
    if (post.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .send({ message: "Not authorized to delete this post" })
    }

    // Delete image from cloudinary if it exists
    if (post.cloudinaryId) {
      await cloudinary2.uploader.destroy(post.cloudinaryId)
    }

    // Delete post from MDB
    await Post.deleteOne({ _id: req.params.id })

    res.status(200).send({ message: "Post deleted successfully" })
  } catch (err) {
    console.error(err)
    res.status(500).send({ message: "Error deleting post" })
  }
}

// END POST =====================================================

// COMMENTS =====================================================

export const addComment = async (req, res) => {
  try {
    const newComment = new Comment({
      comment: req.body.comment,
      user: req.user.id,
      post: req.params.id, // Make sure this is correctly getting the post ID
      likes: 0
    })
    await newComment.save()

    //  update the post to include this comment
    await Post.findByIdAndUpdate(req.params.id, {
      $push: { comments: newComment._id }
    })

    res.status(200).send({ message: "Comment added successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: "Error adding comment" })
  }
}

// KEEP THIS CODE FOR NOW TESTING SOMETHING -RO =====================================================

// export const addComment = async (req, res) => {
//   try {

//     console.log(req.body)

//     await Comment.create({
//       comment: req.body.comment.trim(),
//       user: req.user.id,
//       post: req.params.id,
//       likes: 0,
//     })
//     console.log("Comment has been added!")
//     //res.redirect(`/post/${req.params.id}`);
//     res.status(200).send({ message: "Comment added successfully" })
//   } catch (err) {
//     console.log(err)
//     res.status(500).send({ message: "Error adding comment" })
//   }
// }

// KEEP THIS CODE FOR NOW TESTING SOMETHING -RO =====================================================

export const editComment = async (req, res) => {
  try {
    const commentId = req.params.id

    // Find the comment by ID and update
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { comment: req.body.comment.trim() }, // Update 'comment' field
      { new: true } // Returns updated document
    )

    if (!updatedComment) {
      return res.status(404).send({ message: "Comment not found" })
    }

    console.log("Comment has been edited!")
    res.status(200).send({ message: "Comment edited successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: "Error editing comment" })
  }
}

export const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id
    const comment = await Comment.findById(commentId)

    // Check if authenticated user is creator of post
    if (!req.user) {
      return res.status(401).send({ message: "Unauthorized" })
    }
    if (comment.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .send({ message: "Not authorized to delete this comment" })
    }

    // Delete comment
    await Comment.findByIdAndDelete(commentId)
    console.log("Comment has been deleted!")
    res.status(200).send({ message: "Comment deleted successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: "Error deleting comment" })
  }
}

// END COMMENTS =====================================================
