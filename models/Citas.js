const Sequelize = require("sequelize");
const db = require("../config/db");
const Clientes = require("./Clientes");

const Citas = db.define("citas", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  hora: {
    type: Sequelize.TIME,
    allowNull: true,
  },
});
Citas.Clientes = Citas.belongsTo(Clientes);
module.exports = Citas;
