import express from "express"
const router = express.Router()
import {
  getAllFridges,
  getFridgesbyZip,
  getFridge
} from "../controllers/fridge.js"




import pkg from "mongodb"
const { ObjectID } = pkg



router.get("/getAllFridges", getAllFridges)
router.get("/getFridges/:zipcode", getFridgesbyZip)
router.get("/fridgeProfile/:id", getFridge)

export { router }
