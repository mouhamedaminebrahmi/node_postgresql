"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//db.books = require("../src/api/Book/book.model")(sequelize, Sequelize);
db.categories = require("../src/api/Category/category.model")(sequelize, Sequelize);

module.exports = db;
