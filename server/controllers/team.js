import { cloudinary } from "../middleware/cloudinary.js"
import { TeamMember } from "../models/Team.js"
import pkg from "mongodb"
const { ObjectID } = pkg

//OUR TEAM PAGE LOGIC=====================================================

export const getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find()
      .sort({ firstName: "desc" })
      .lean()
    res.json({ teamMembers: teamMembers })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Internal Server Error" })
  }
}
