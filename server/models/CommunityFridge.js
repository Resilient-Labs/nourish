// Import the mongoose module
import mongoose from "mongoose"

// Define the community post schema
const CommunityFridgeSchema = new mongoose.Schema({
	donations: {
		allowed: {
			type: Array,
		},
		notAllowed: {
			type: Array,
		},
	},
	community: {
		type: String,
	},
	contact: {
		email: {
			type: String,
		},
		instagramURL: {
			type: String,
		},
		siteURL: {
			type: String,
		},
	},
	isFridge: {
		type: Boolean,
		required: true,
	},
	isPantry: {
		type: Boolean,
		required: true,
	},
	location: {
		address: {
			type: String,
		},
		cityState: {
			type: String,
		},
		zipcode: {
			type: String,
		},
		directionsURL: {
			type: String,
		},
		lat: {
			type: String,
		},
		long: {
			type: String,
		},
	},
	name: {
		type: Boolean,
		required: true,
	},
	rules: {
		type: Array,
	},
	status: {
		type: string,
	},
	key: {
		type: string,
	},
	profileIMG: {
		type: string,
	},
	description: {
		type: string,
	},
})

// Create the CommunityFridge model using the community post schema
const CommunityFridge = mongoose.model("CommunityFridge", CommunityFridgeSchema)

// Export the CommunityFridge model
export default CommunityFridge
