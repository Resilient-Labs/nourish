import express from "express"
import { upload } from "../middleware/multer.js"
import {
  getAllPosts,
  getPost,
  createPost,
  likePost,
  addComment,
  deleteComment,
  deletePost
} from "../controllers/posts.js"
import { ensureAuth, ensureGuest } from "../middleware/auth.js"

const router = express.Router()

// Apply ensureAuth middleware to protect routes
router.get("/board", getAllPosts)
router.get("/post/:id", ensureAuth, getPost)
router.post("/createPost", upload.single("file"), createPost)
router.put("/likePost/:id", ensureAuth, likePost)
router.post("/addComment/:id", ensureAuth, addComment)
router.delete("/deleteComment/:id", ensureAuth, upload.single("file"), deleteComment)
router.delete("/deletePost/:id", ensureAuth, deletePost)

export { router }
