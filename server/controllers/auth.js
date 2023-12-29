import passport from 'passport';
import validator from 'validator';
import { User } from "../models/User.js";

export const getLogin = (req, res) => {
  if (req.user) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
};

export const postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email)) {
    validationErrors.push({ msg: "Please enter a valid email address." });
  }
  if (validator.isEmpty(req.body.password)) {
    validationErrors.push({ msg: "Password cannot be blank." });
  }


  if (validationErrors.length) {
    return res.status(400).json({ errors: validationErrors });
  }

  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ errors: info });
    }
    req.logIn(user, err => {
      if (err) {
        return next(err);
      }
      res.json({ success: true });
    });
  })(req, res, next);
};

export const logout = (req, res) => {
  req.logout();
  req.session.destroy(err => {
    if (err) {
      console.log("Error: Failed to destroy the session during logout.", err);
      return res.status(500).json({ error: "Session destruction failed" });
    }
    req.user = null;
    res.json({ success: true });
  });
};

export const getSignup = (req, res) => {
  if (req.user) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
};

//delete the user's account

export const deleteAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    req.logout();
    req.session.destroy(err => {
      if (err) {
        console.log("Error: Failed to destroy the session during logout.", err);
        return res.status(500).json({ error: "Session destruction failed" });
      }
      req.user = null;
      res.json({ success: true });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const postSignup = async (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email)) {
    validationErrors.push({ msg: "Please enter a valid email address." });
  }
  if (!validator.isLength(req.body.password, { min: 8 })) {
    validationErrors.push({ msg: "Password must be at least 8 characters long" });
  }
  if (req.body.password !== req.body.confirmPassword) {
    validationErrors.push({ msg: "Passwords do not match" });
  }

  if (validationErrors.length) {
    return res.status(400).json({ errors: validationErrors });
  }

  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ error: "Account with that email address already exists." });
    }

    const newUser = new User({
      email: req.body.email,
      password: req.body.password, 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    await newUser.save();
    req.logIn(newUser, err => {
      if (err) {
        return next(err);
      }
      res.json({ success: true });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
