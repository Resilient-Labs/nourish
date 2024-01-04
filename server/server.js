import express from "express"

import mongoose from "mongoose"
import session from "express-session"
import methodOverride from "method-override"
import ConnectMongo from "connect-mongo"
import flash from "express-flash"
import logger from "morgan"
import { connectDB } from "./config/database.js"
//import { passport } from './config/passport.js'; // Make sure this matches your export
import { router as fridgeRoutes } from "./routes/fridge.js"
import { router as postRoutes } from "./routes/posts.js"
import { router as profileRoutes } from "./routes/profile.js"
import { router as mainRoutes } from "./routes/main.js"
import { router as teamRoutes } from "./routes/team.js"

import dotenv from "dotenv"
import path from "path"
import cors from "cors"

import passport from "passport"
import { configurePassport } from "./config/passport.js"

// Use .env file in config folder
dotenv.config({ path: "./.env" })

// Connect To Database
connectDB()

// Initialize Express app
const app = express()

// Static Folder
app.use(express.static("public"))

// Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Cors errors
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests only from port 3000 (WE NEED TO CHANGE WHEN WE HOST TO FE URL)
    methods: "GET,POST,PUT,DELETE", // Allow specific HTTP methods
    credentials: true, 
    allowedHeaders: ["Content-Type", "Authorization"] // Allow specific headers
  })
)

// Logging
app.use(logger("dev"))

// Passport Config
configurePassport(passport)


// Setup Sessions - stored in MongoDB
const MongoStore = ConnectMongo.create({
  mongoUrl: process.env.DB_STRING 
})


app.use(
  session({
    secret: "backendsessionsecret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Use flash messages for errors, info, etc...
app.use(flash())

// Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes)
app.use("/fridge", fridgeRoutes)
app.use("/post", postRoutes)
app.use("/profile", profileRoutes)
app.use("/team", teamRoutes)


// Serve React App
app.use(express.static("client/build"))


// Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!")
})
