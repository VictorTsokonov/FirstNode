const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "D$B4se", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;