module.exports = {
  ensureAuthenticated: function (req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      return next();
    } else {
      req.flash("error_msg", "Please log in to view that resource");
      res.json({ msg: "Please Login Again" });
    }
  },
  forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/dashboard");
  },
};
