import express from "express"
const router = express.Router()
import {
  getAllFridges,
  getFridgesbyZip,
  getFridge
} from "../controllers/fridge.js"

//import authController from "../controllers/auth.js";

//import { ObjectID } from 'mongodb';
import pkg from "mongodb"
const { ObjectID } = pkg

// If you're using ensureAuth and ensureGuest, import them as well
//import { ensureAuth, ensureGuest } from "../middleware/auth/js";

router.get("/getAllFridges", getAllFridges)
router.get("/getFridges/:zipcode", getFridgesbyZip)
router.get("/fridgeProfile/:id", getFridge)

export { router }
