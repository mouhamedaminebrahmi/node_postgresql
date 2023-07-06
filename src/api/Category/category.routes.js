const { checkRole } = require("../../../auth/checkRole");

module.exports = (app) => {
  const sequelizeObject = require("./category.controllers");
  const { checkToken } = require("../../../auth/tokenValidation");

  const myMulter = require("../../../middleware/Multer");
  var router = require("express").Router();

  // Create a new sequelizeObject
  router.post("/", sequelizeObject.create);
  // router.post("/login", sequelizeObject.login);

  // // Retrieve all sequelizeObject
  router.get("/", sequelizeObject.findAll);

  // // Retrieve a single sequelizeObject with id
  // router.get("/:id", sequelizeObject.findOne);

  // // Update a sequelizeObject with id
  // router.put("/:id", sequelizeObject.update);

  // // Delete a sequelizeObject with id
  // router.delete("/:id", sequelizeObject.delete);

  app.use("/categories", router);
};
