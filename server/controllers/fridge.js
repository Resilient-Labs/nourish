import { cloudinary } from "../middleware/cloudinary.js";
//import CommunityFridge from "../models/CommunityFridge.js";
import pkg from 'mongodb';
const { ObjectID } = pkg;

export const getAllFridges =  async (req, res) => {
    try {
        const fridges = await Fridge.find().lean();
        res.json({ fridges: fridges });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getFridgesbyZip = async (req, res) => {
    try {
        //=================Do we want to do req.params.zipcode or reqbodyzipcode?
        const fridges = await Fridge.find({ zipCode: req.body.zipcode });
        res.json({ fridges: fridges });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "No fridges found in that zipcode" });
    }
}

export const getFridge =  async (req, res) => {
    try {
        const fridge = await Fridge.findById(req.params.id);
        res.json({ fridge: fridge });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "No fridge found" });
    }
}

