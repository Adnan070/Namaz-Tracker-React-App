// All Require Files are here...
// =====================================

var app = require("express")();
var cors = require("cors");
var bodyParser = require("body-parser");
const flash = require("connect-flash");
const passport = require("passport");
const session = require("express-session");
require("./utils/admin.js")();

// Congigurtion
// ====================

require("./utils/passport")(passport);
var port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(true));

// Express session
app.use(
  session({
    secret: "Bukc AK",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 5, // (1000 -> msec * 60 -> sec * 60 -> min * 24 -> hrs * 1 -> days)
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/", require("./routes/index.js"));

app.listen(5000, () => console.log(`Tracker App Running on port ${port}!`));
