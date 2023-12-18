// Define the mongoose module
const mongoose = require("mongoose")

// Define the community post schema
const communityPostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	time: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
})

// Create the CommunityPost model using the community post schema
const CommunityPost = mongoose.model("CommunityPost", communityPostSchema)

// Export the CommunityPost model
module.exports = CommunityPost
