const cloudinary = require("../middleware/cloudinary");
const Fridge = require("../models/FridgeProfile");

module.exports = {
    getFridgesbyZip: async (req, res) => {
        try {
            //=================Do we want to do req.params.zipcode or reqbodyzipcode?
            const fridges = await Fridge.find({ user: req.body.zipcode });
            res.json({ fridges: fridges });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
};
