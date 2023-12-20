const cloudinary = require("../middleware/cloudinary");
const Fridge = require("../models/FridgeProfile");

module.exports = {
    getProfile: async (req, res) => {
        try {
            const fridges = await Fridge.find({ user: req.body.zipcode });
            res.json({ fridges: fridges });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
};
