// Import the mongoose module
import mongoose from "mongoose"

// Define the comment schema
const CommentSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		require: true,
	},
	cloudinaryId: {
		type: String,
		require: true,
	},
	caption: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

// Create the Comment model using the comment schema
const Comment = mongoose.model("Comment", CommentSchema)

// Export the Comment model
export default Comment
