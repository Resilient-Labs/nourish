// import { cloudinary } from "../middleware/cloudinary.js"
import { CommunityFridge as Fridge } from "../models/CommunityFridge.js"
import pkg from "mongodb"
const { ObjectID } = pkg

export const getAllFridges = async (req, res) => {
  try {
    const fridges = await Fridge.find().lean()
    console.log('getAllFridges: ')
    console.log(fridges)
    res.json({ fridges: fridges })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal Server Error" })
  }
}

export const getFridgesbyZip = async (req, res) => {
  try {
    // const newFridge = new Fridge({"name": "Fridge1", "isFridge": true, "isPantry": false})
    // newFridge.save()
    // .then(() => console.log("saved"))
    // .catch((err) => console.error("Error in getFridgesbyZip:", err))
    const fridges = await Fridge.find({
      "location.zipCode": req.params.zipcode
    })
    console.log(fridges)
    res.json({ fridges: fridges })
  } catch (err) {
    console.error("Error in getFridgesbyZip:", err)
    res.status(500).json({ message: "No fridges found in that zipcode" })
  }
}

export const getFridge = async (req, res) => {
  try {
    const fridge = await Fridge.findById(req.params.id)
    console.log(fridge)
    res.json({ fridge: fridge })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "No fridge found" })
  }
}
