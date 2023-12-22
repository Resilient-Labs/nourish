//Do we want to use require or import/export? -Ro
import express from 'express'
const app = express()
import mongoose from 'mongoose'
import passport from 'passport'
import session from 'express-session'
import methodOverride from 'method-override'
const MongoStore = require("connect-mongo")(session)

const methodOverride = require("method-override")
const flash = require("express-flash")
const logger = require("morgan")
const connectDB = require("./config/database")
const fridgeRoutes = require("./routes/fridge")
const postRoutes = require("./routes/posts")
const axios = require('axios');
// const CONNECTION_URL = 'mongodb+srv://kyle:123@cluster0.ogd4hel.mongodb.net/'

import flash from 'express-flash'
import logger from 'morgan'
import connectDB from './config/database'
import fridgeRoutes from './routes/fridge'
import axios from 'axios'
import fridge from './controllers/fridge'



// Use .env file in config folder
// require("dotenv").config({ path: "./config/.env" })

// Passport config
require("./config/passport")(passport)

// Connect To Database
connectDB()

// Static Folder
app.use(express.static("public"))

// Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Logging
app.use(logger("dev"))

// Setup Sessions - stored in MongoDB
app.use(
	session({
		secret: "backendsessionsecret",
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
	})
)



// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Use flash messages for errors, info, etc...
app.use(flash())

// Setup Routes For Which The Server Is Listening
app.use("/", fridgeRoutes)
app.use("/post", postRoutes);

// Serve React App
app.use(express.static("client/build"))

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

// Server Running
app.listen(process.env.PORT, () => {
	console.log("Server is running, you better catch it!")
})


//I ran it already in the client folder, I think you should just need to npm install but you need to be on the client folder specifically -Ro ✅

//Also Jose I think I gave you read and write access so you should be able to use the terminal, kyle if you sent me a request I can let you do it to. -ro

//Im about to install some dependencies for the client side -ro

//This jawn just popped on my computer, react is working -ro
//I just ran it and built it :)-jose

//thank you thank you appreciate you. Im gonna install the rest of the dependencies and then I think its set up for front end to start their side and we can start our side -ro

// do you want to use axios? @Ro? -Jose