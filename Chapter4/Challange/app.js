var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");

var indexRouter = require("./routes");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./components/layout/main-layout");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));

app.use("/", indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
