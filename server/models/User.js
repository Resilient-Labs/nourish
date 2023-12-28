import bcrypt from 'bcrypt';
import { mongoose } from "mongoose"

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  fName: String ,
  lName: String,
})

// Password hash middleware.
UserSchema.pre("save", function save(next) {
  const user = this
  if (!user.isModified("password")) return next()

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

// Helper method for validating user's password.
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}

const User = mongoose.model("User", UserSchema)
export { User }
