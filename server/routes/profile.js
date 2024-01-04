import express from "express"

import {
    getUserProfile,
    changePassword,
    updateContact,
} from "../controllers/profile.js"

import {
    deleteAccount,
} from "../controllers/auth.js"

import { ensureAuth, ensureGuest } from "../middleware/auth.js"

const router = express.Router()

// Routes where ensureAuth middleware is applied to protect routes
router.get("/:id", ensureAuth, getUserProfile)
router.put("/changePassword/:id", ensureAuth, changePassword)
router.put("/contact/:id", ensureAuth, updateContact)


router.delete("/deleteAccount/:id", ensureAuth, deleteAccount)

export { router }
