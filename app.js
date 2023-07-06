const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());
/* This is the root route. It is used to check if the server is running. */

// you can access image
app.use("/uploads", express.static(__dirname + "/uploads/"));

//build Front-end
//app.use(express.static(path.join(__dirname, ".", "front/build")));
app.use(express.static("public"));
app.use("/api/v1", indexRouter);
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, ".", "/front/build", "index.html"));
// });

/** CRON */
require("./cron/cron")();

module.exports = app;
