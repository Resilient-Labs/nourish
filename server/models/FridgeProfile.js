// Define the mongoose module
const mongoose = require("mongoose")

// Define the community post schema
const fridgeProfileSchema = new mongoose.Schema({
	fridgeName: {
		type: String,
		required: true,
	},
    //add: longitude and latitude need to be added to schema 
    //add: google maps url for directions
	fridgeLocation: {
		cityState: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true,
        }
	},
    fridgeContact: {
        phoneNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        volunteerURL: {
            type: String,
            required: true,
        },
        donateURL: {
            type: String,
            required: true,
        }
    },
	
})

// Create the CommunityPost model using the community post schema
const FridgeProfile = mongoose.model("FridgeProfile", fridgeProfileSchema)

// Export the CommunityPost model
module.exports = FridgeProfile







