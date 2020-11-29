const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Load User model
const User = require("../models/users");

module.exports = function (passport) {
  console.log(LocalStrategy);

  try {
    let Strat = new LocalStrategy(
      { usernameField: "email", passwordField: "pass" },
      (email, pass, done) => {
        console.log("Cheking....");
        // Match user
        User.findOne({
          email: email,
        }).then((user) => {
          if (!user) {
            return done(null, false, {
              message: "That email is not registered",
            });
          }

          // Match pass
          bcrypt.compare(pass, user.pass, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "pass incorrect" });
            }
          });
        });
      }
    );
    passport.use(Strat);
  } catch (error) {
    console.log(error);
  }
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
