var moment = require("moment");
// require
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "categories",
    {
      nom: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["id"],
        },
      ],
    }
  );

  return Item;
};
