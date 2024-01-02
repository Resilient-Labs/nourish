import mongoose from "mongoose"

const teamMemberSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  role: {
    type: String
  },
  bio: {
    type: String
  },
  email: {
    type: String
  },
  github: {
    type: String
  },
  linkedin: {
    type: String
  },
  profilePhoto: {
    type: String
  },
})

const TeamMember = mongoose.model(
  "TeamMember",
  teamMemberSchema,
 "teamMembers"
)
export { TeamMember }
