const Sequelize = require("sequelize");
const db = require("../config/db");
const Citas = require("../models/Citas");
const Servicios = require("../models/Servicios");

const CitasServicios = db.define("citas-servicios", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
});
CitasServicios.Citas = CitasServicios.belongsTo(Citas);
CitasServicios.Servicios = CitasServicios.belongsTo(Servicios);
module.exports = CitasServicios;
