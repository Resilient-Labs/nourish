import express from "express"
const router = express.Router()
import {
  getLogin, 
  postLogin, 
  logout,
  getSignup,
  postSignup,
  // getUser,
} from "../controllers/auth.js"
import { ensureAuth, ensureGuest } from "../middleware/auth.js"

import pkg from "mongodb"
const { ObjectID } = pkg

// router.get("/currentUser", getUser);
router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/logout", logout);
router.get("/signup", getSignup);
router.post("/signup", postSignup);

export { router }
