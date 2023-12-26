import { cloudinary } from "../middleware/cloudinary.js"
import bcrypt from 'bcryptjs';
import { User } from "../models/User.js"
import { Post } from "../models/Post.js"

import pkg from "mongodb"
const { ObjectID } = pkg



export const getUserProfile = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id })
      .sort({ time: "desc" })
      .lean();

    console.log(posts);

    if (!posts) {
      return res.status(404).json({ message: "No posts found for the user" });
    }

    res.json({ posts: posts, user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching user profile" });
  }
}



//Set up changing passwords

export const changePassword = async (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  try {
      // Ensure the user is authenticated
      if (!req.user) {
          return res.status(401).json({ success: false, message: 'User not authenticated.' });
      }

      // Validate the new password
      if (!validator.isLength(newPassword, { min: 8 })) {
          return res.status(400).json({ success: false, message: 'Password must be at least 8 characters long.' });
      }

      if (newPassword !== confirmPassword) {
          return res.status(400).json({ success: false, message: 'Passwords do not match.' });
      }

      // Fetch the user from the database
      const user = await User.findById(req.user._id);

      if (!user) {
          return res.status(404).json({ success: false, message: 'User not found.' });
      }

      // Verify the current password
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
          return res.status(401).json({ success: false, message: 'Your current password is incorrect.' });
      }

      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newPassword, salt);

      // Update the password
      user.password = hash;
      await user.save();

      res.json({ success: true, message: 'Password successfully changed.' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

//set up changing/updating contact info 

export const updateContact = async (req, res) => {
  try {
    
    const userId = req.params.id;

    // Find the profile by ID and update
    const updateProfile = await User.findByIdAndUpdate(
      userId,
      { userName: req.body.userName.trim(),
      fName: req.body.firstName.trim(),
      lName: req.body.lastName.trim(),
     email: req.body.email.trim(),  
      }, 
      { new: true } 
    );

    if (!updateProfile) {
      return res.status(404).send({ message: "Profile not found" });
    }

    console.log("Profile has been updated!");
    res.status(200).send({ message: "Profile updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating profile" });
  }
}