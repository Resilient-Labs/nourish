const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comments = require("../models/Comments");

module.exports = {
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find().sort({ time: "desc" }).lean();
            res.json({ POSTS: posts });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
    getPost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            const comments = await Comments.find({postID: req.params.id});
            res.json({post: post, comments: comments, user: req.user });
        } catch (err) {
            console.log(err);
        }
    },
    getProfile: async (req, res) => {
        try {
            const posts = await Post.find({ user: req.user.id }).sort({ time: "desc" }).lean();
            res.json({ posts: posts, user: req.user });
        } catch (err) {
            console.log(err);
        }
    },
    createPost: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            await Post.create({
            title: req.body.title,
            image: result.secure_url,
            cloudinaryId: result.public_id,
            caption: req.body.caption,
            likes: 0,
            user: req.user.id,
            });
            console.log("Post has been added!");
            //res.redirect("/profile");
            res.status(200).send({ message: "Post added successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: "Error added post" });
        }
    },
    likePost: async (req, res) => {
        try {
            await Post.findOneAndUpdate(
                { _id: req.params.id },
                { $inc: { likes: 1 } }
            );
            console.log("Likes +1");
            //res.redirect(`/post/${req.params.id}`);
            res.status(200).send({ message: "Post liked successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: "Error liking post" });
        }
    },
    //COMMENTS =====================================================
    addComment: async (req, res) => {
        try {
            await Comments.create({
            comment: req.body.comment.trim(),
            commentByUserID: req.user.id,
            commentByUserName: req.user.userName,
            postID: req.params.id,
            });
            console.log("Comment has been added!");
            //res.redirect(`/post/${req.params.id}`);
            res.status(200).send({ message: "Comment added successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: "Error adding comment" });
        }
    },
    editComment: async (req, res) => {
        try {
            await Comments.create({
            comment: req.body.comment.trim(),
            commentByUserID: req.user.id,
            commentByUserName: req.user.userName,
            postID: req.params.id,
            });
            console.log("Comment has been edited!");
            //res.redirect(`/post/${req.params.id}`);
            res.status(200).send({ message: "Comment edited successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: "Error editing comment" });
        }
    },
    deleteComment: async (req, res) => {
        try {
            await Comments.create({
            comment: req.body.comment.trim(),
            commentByUserID: req.user.id,
            commentByUserName: req.user.userName,
            postID: req.params.id,
            });
            console.log("Comment has been deleted!");
            //res.redirect(`/post/${req.params.id}`);
            res.status(200).send({ message: "Comment deleted successfully" });
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: "Error deleting comment" });
        }
    },
    //END COMMENTS =====================================================
    deletePost: async (req, res) => {
        try {
            // Find post by id
            let post = await Post.findById({ _id: req.params.id });
            // Delete image from cloudinary
            await cloudinary.uploader.destroy(post.cloudinaryId);
            // Delete post from db
            await Post.remove({ _id: req.params.id });
            console.log("Deleted Post");
            //res.redirect("/profile");
            res.status(200).send({ message: "Post deleted successfully" });
        } catch (err) {
            console.log(err);
            //res.redirect("/profile");
            res.status(500).send({ message: "Error deleting post" });
        }
    },
};
