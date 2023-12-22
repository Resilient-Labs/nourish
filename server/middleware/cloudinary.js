// Importing Cloudinary
import { v2 as cloudinary } from 'cloudinary';

// Configuring dotenv (if needed, see note below)
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Exporting the configured cloudinary instance
export { cloudinary };
