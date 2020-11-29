const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../utils/auth");

// Get all Handlers here
// ==============================

const { signUpUser, login, logout, getUsers } = require("./users");

// Call above handlers here
// =================================

// 1. All Post Routes are here
// ----------------------------------

router.post("/register", signUpUser);
router.post("/login", login);

// 2. All Get Routes are here
// ----------------------------------
router.get("/logout", logout);
router.get("/users", ensureAuthenticated, getUsers);
// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => {
  res.json({ auth: false });
});

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.json({
    auth: true,
    user: req.user,
  })
);

module.exports = router;
