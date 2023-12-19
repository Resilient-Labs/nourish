const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const Event = require("../models/Event");



exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("login", {
    title: "Login", pageName: 'login'
  });
};




exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      console.log('logging in')
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/profile");
    });
  })(req, res, next);
};



exports.logout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};


exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("signup", {
    title: "Create Account", pageName: 'signup'
  });
};



exports.deleteAccount = async (req, res) => {
  try {


    //if user is a nursing home account delete all events created by them

    if (req.user.role.isNursingHome === true) {
      await Event.deleteMany({ user: req.user.id });
    }

    //if user is a volunteers, delete them from all events they signed up for an update the events numsNeeded

    if (req.user.role.isVolunteer === true) {
      let events = []
      // Fetch events the user has signed up for
      events = await Event.find({ volunteers: req.user.id });

      // Update numNeeded for each event
      for (const event of events) {
        await Event.findByIdAndUpdate(
          event._id,
          { $inc: { numNeeded: + 1 }, $pull: { volunteers: req.user._id } },
          { new: true }
        );
        const updatedEvents = await Event.find({ volunteers: req.user.id });
        console.log('Updated Events after User Deletion', updatedEvents);
      }
      console.log('Events Updated before User Deletion')
    }

    // Delete the user account
    await User.findByIdAndDelete(req.user._id);


    req.logout(() => {
      console.log("User has logged out.");
    });
    req.session.destroy((err) => {
      if (err) {
        console.log("Error: Failed to destroy the session during logout.", err);
      }
      req.user = null;

      res.redirect("/");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.postSignup = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("../signup");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  if (req.body.userRole === 'volunteer') {
    console.log('Volunteer')
  } else {
    console.log('Nursing Home')
  }

  //check if user signed up as volunteer or nursing home

  let isVolunteer = (req.body.userRole === 'volunteer') ? true : false

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    role: {
      isVolunteer: isVolunteer,
      isNursingHome: !isVolunteer,
    }
  });

  //Check to make sure there are no users with the same email or same username

  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../signup");
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/createprofile");
        });
      });
    }
  );
};
