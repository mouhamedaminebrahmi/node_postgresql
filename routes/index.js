var express = require("express");
var router = express.Router();
var path = require("path");

require("../src/api/Category/category.routes")(router);

module.exports = router;
