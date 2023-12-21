import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import methodOverride from 'method-override';
import ConnectMongo from 'connect-mongo';
import flash from 'express-flash';
import logger from 'morgan';
import { connectDB } from './config/database.js';
import { passport } from './config/passport.js'; // Make sure this matches your export
import { router as fridgeRoutes } from './routes/fridge.js';
import { router as postRoutes } from './routes/posts.js';
import dotenv from 'dotenv';
import path from 'path';

// Use .env file in config folder
dotenv.config({ path: "./config/.env" });

// Connect To Database
connectDB();

// Initialize Express app
const app = express();

// Static Folder
app.use(express.static("public"));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger("dev"));

// Passport Config
configurePassport(passport); // Use the imported function to configure passport

// Setup Sessions - stored in MongoDB
const MongoStore = ConnectMongo(session);
app.use(
	session({
		secret: "backendsessionsecret",
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use flash messages for errors, info, etc...
app.use(flash());

// Setup Routes For Which The Server Is Listening
app.use("/", fridgeRoutes);
app.use("/post", postRoutes);

// Serve React App
app.use(express.static("client/build"));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// Server Running
app.listen(process.env.PORT, () => {
	console.log("Server is running, you better catch it!");
});
