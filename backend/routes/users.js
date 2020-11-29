const User = require("../models/users");
const bcrypt = require("bcryptjs");
const passport = require("passport");

exports.signUpUser = (req, res) => {
  const { name, email, pass, pass2 } = req.body;
  let errors = [];

  if (!name || !email || !pass || !pass2) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (pass != pass2) {
    errors.push({ msg: "passs do not match" });
  }

  if (pass.length < 6) {
    errors.push({ msg: "pass must be at least 6 characters" });
  }

  if (errors.length > 0) {
    res.json({ errors, name, email, pass });
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push({ msg: "Email already exists" });
      } else {
        const newUser = new User({
          name,
          email,
          pass,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.pass, salt, (error, hash) => {
            if (err) throw error;
            newUser.pass = hash;
            newUser
              .save()
              .then((user) => {
                user.update({ uid: user._id }, (error1, data) => {
                  if (error1) {
                    throw error1;
                  } else {
                    req.flash(
                      "success_msg",
                      "You are now registered and can log in"
                    );
                    res.json({ msg: "Successfully Login" });
                  }
                });
              })
              .catch((err) => {
                console.log(err);
                res
                  .status(500)
                  .json({ err: err, msg: "Issue in register user line 50" });
              });
          });
        });
      }
    });
  }
};

exports.login = (req, res, next) => {
  passport.authenticate(
    "local",
    { successRedirect: "/dashboard" },
    (err, user, info) => {
      console.log(user);
      if (err) {
        return next(err);
      } else if (!user) {
        res.json({ msg: "Please use Correct Credential..", err });
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.json({ msg: "Successfully Authenticated!", user });
      });
    }
  )(req, res, next);
};

exports.logout = (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    req.flash("success_msg", "You are logged out");
    res.json({ msg: "Successfully Logout" });
  } else {
    res.json({ msg: "You Already Logout..." });
  }
};

exports.getUsers = (req, res) => {
  User.find((err, result) => {
    if (err) {
      res.status(500).json({ err });
    } else {
      res.json({ result });
    }
  });
};
