import express from "express"
import { getUserProfile, changePassword, updateContact } from "../controllers/profile.js"
import { deleteAccount } from "../controllers/auth.js"
import { ensureAuth } from "../middleware/auth.js"

const router = express.Router()

// Apply ensureAuth middleware to protect routes
router.get("/:id", ensureAuth, getUserProfile)
router.put("/changePassword/:id", ensureAuth, changePassword)
router.put("/contact/:id", ensureAuth, updateContact)
router.delete("/deleteAccount/:id", ensureAuth, deleteAccount)

export { router }
