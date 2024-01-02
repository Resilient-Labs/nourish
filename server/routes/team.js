import express from "express"
const router = express.Router()
import { getTeamMembers } from "../controllers/team.js"

router.get("/team", getTeamMembers);

export { router }