const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const fridgeController = require("../controllers/fridge");

//Do we need this here?
const { ensureAuth, ensureGuest } = require("../middleware/auth");

 //=================If we're usinng req param zipcode then we need to do router.get("/${zipcode}", fridgeController.getFridgesbyZip);
router.get("/getFridges", fridgeController.getFridgesbyZip);

//not using right now but leaving as an example incase we need to
router.get("/profile", ensureAuth, postsController.getProfile);

module.exports = router;