const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//==========WHICH ONES DO WE NEED ENSURE AUTH FOR?
router.get("/board/:id", ensureAuth, postsController.getAllPosts);

router.get("/post/:id", ensureAuth, postsController.getPost);

router.get("/profile/:id", ensureAuth, postsController.getProfile);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost);

router.post("/addComment/:id", ensureAuth, postsController.addComment);

router.put("/editComment/:id", ensureAuth, postsController.editComment);

router.delete("/deleteComment/:id", ensureAuth, upload.single("file"), postsController.deleteComment);

router.delete("/deletePost/:id", ensureAuth, postsController.deletePost);

module.exports = router;