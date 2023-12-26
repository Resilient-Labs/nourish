import express from "express"
import { upload } from "../middleware/multer.js"
import {
  getAllPosts,
  getPost,
  createPost,
  likePost,
  addComment,
  editComment,
  deleteComment,
  deletePost
} from "../controllers/posts.js"
import { ensureAuth, ensureGuest } from "../middleware/auth.js"

const router = express.Router()

// Routes where ensureAuth middleware is applied to protect routes
router.get("/board", ensureAuth, getAllPosts)
router.get("/post/:id", ensureAuth, getPost)
router.post("/createPost", upload.single("file"), createPost)
router.put("/likePost/:id", likePost)
router.post("/addComment/:id", ensureAuth, addComment)
router.put("/editComment/:id", ensureAuth, editComment)
router.delete(
  "/deleteComment/:id",
  ensureAuth,
  upload.single("file"),
  deleteComment
)
router.delete("/deletePost/:id", ensureAuth, deletePost)

export { router }
