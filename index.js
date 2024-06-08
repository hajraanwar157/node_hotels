const express = require("express");
const bodyparser = require("body-parser");
const db = require("./db.js");

const menu = require("./Schema/menuschema.js");
const app = express();
app.use(bodyparser.json());
app.listen(3030, () => console.log("app is running"));
const personRoute = require("./routes/personroute.js");
const menuRoute = require("./routes/menuroutes.js");
//person post and get method
app.use("/person", personRoute);
//menu post and get method
app.use("/menu", menuRoute);
