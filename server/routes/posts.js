import express from "express";
import { single as multerSingle } from "../middleware/multer.js";
import { getAllPosts, getPost, getProfile, createPost, likePost, addComment, editComment, deleteComment, deletePost } from "../controllers/posts.js";
import { ensureAuth, ensureGuest } from "../middleware/auth.js";

const router = express.Router();

// Routes where ensureAuth middleware is applied to protect routes
router.get("/board/:id", ensureAuth, getAllPosts);
router.get("/post/:id", ensureAuth, getPost);
router.get("/profile/:id", ensureAuth, getProfile);
router.post("/createPost", multerSingle("file"), createPost);
router.put("/likePost/:id", likePost);
router.post("/addComment/:id", ensureAuth, addComment);
router.put("/editComment/:id", ensureAuth, editComment);
router.delete("/deleteComment/:id", ensureAuth, multerSingle("file"), deleteComment);
router.delete("/deletePost/:id", ensureAuth, deletePost);

export { router };
