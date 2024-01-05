// Import cloudinary
import { v2 as cloudinary } from "cloudinary"

// Configure dotenv
import dotenv from "dotenv"
dotenv.config({ path: "./.env" })

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

// Export configured cloudinary instance
export { cloudinary }
