const Sequelize = require("sequelize");
const db = require("../config/db");

const Servicios = db.define("servicios", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "El nombre del servicio no puede ir vacio",
      },
    },
  },
  precio: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});
module.exports = Servicios;
