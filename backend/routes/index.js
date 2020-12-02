const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../utils/auth");

// Get all Handlers here
// ==============================

const { getRecord, postRecordOfOneDay, clearOneRecord } = require("./record");
const { signUpUser, login, logout, getUsers } = require("./users");

// Call above handlers here
// =================================

// 1. All Post Routes are here
// ----------------------------------

router.post("/register", signUpUser);
router.post("/login", login);
router.post('/record',ensureAuthenticated, postRecordOfOneDay)
// 2. All Get Routes are here
// ----------------------------------
router.get("/logout", logout);
router.get("/users", ensureAuthenticated, getUsers);
router.get('/record/:uid',ensureAuthenticated, getRecord)



module.exports = router;
