import express from "express"
const router = express.Router()
import { getTeamMembers } from "../controllers/team.js"

router.get("/", getTeamMembers)

export { router }
