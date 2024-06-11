const express = require("express");
const bodyparser = require("body-parser");
const db = require("./db.js");
require("dotenv").config();
const passport = require("./auth.js");
const app = express();
//middleware function to log details of requested endpoint
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request made to ${req.originalUrl}`
  );
  next();
};
//initilizing passport
app.use(passport.initialize());
//body parser for parsing req body into any format
app.use(bodyparser.json());
const port = process.env.PORT || 3030;
app.listen(port, () => console.log("app is running"));
const personRoute = require("./routes/personroute.js");
const menuRoute = require("./routes/menuroutes.js");
//person post and get method
//using passport.authentication as middleware auth in person route
app.use(
  "/person",
  passport.authenticate("local", { session: false }),
  personRoute
);
//menu post and get method
app.use("/menu", menuRoute);
