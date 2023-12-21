const cloudinary = require("../middleware/cloudinary");
const Fridge = require("../models/FridgeProfile");

module.exports = {
    getAllFridges: async (req, res) => {
        try {
            const fridges = await Fridge.find().lean();
            res.json({ FRIDGES: fridges });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
    getFridgesbyZip: async (req, res) => {
        try {
            //=================Do we want to do req.params.zipcode or reqbodyzipcode?
            const fridges = await Fridge.find({ zipCode: req.body.ZIPCODE });
            res.json({ FRIDGES: fridges });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "No fridges found in that zipcode" });
        }
    },
};
