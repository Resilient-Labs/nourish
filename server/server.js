//Do we want to use require or import/export? -Ro

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")(session)
const methodOverride = require("method-override")
const flash = require("express-flash")
const logger = require("morgan")
const connectDB = require("./config/database")
const mainRoutes = require("./routes/main")
const axios = require('axios');
// const CONNECTION_URL = 'mongodb+srv://kyle:123@cluster0.ogd4hel.mongodb.net/'

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
app.use("/", mainRoutes)

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