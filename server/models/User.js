// Import the required modules
import mongoose from "mongoose"
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
	userName: { type: String, unique: true },
	email: { type: String, unique: true },
	password: String,
})

// Password hash middleware.
UserSchema.pre("save", function save(next) {
	const user = this
	if (!user.isModified("password")) {
		return next()
	}
	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err)
		}
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) {
				return next(err)
			}
			user.password = hash
			next()
		})
	})
})

// Helper method for validating user's password.
UserSchema.methods.comparePassword = function comparePassword(
	candidatePassword,
	cb
) {
	bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
		cb(err, isMatch)
	})
}

// Create the User model using the user schema
const User = mongoose.model("User", UserSchema)

// Export the User model
export default User
