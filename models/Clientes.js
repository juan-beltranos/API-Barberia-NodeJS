const Sequelize = require("sequelize");
const db = require("../config/db");

const Clientes = db.define('clientes',
  {
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
          msg: "El nombre no puede ir vacio",
        },
      },
    },
    apellido: {
      type: Sequelize.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El apellido no puede ir vacio",
        },
      },
    },
    telefono: {
      type: Sequelize.INTEGER(20),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El apellido no puede ir vacio",
        },
      },
    },
    email: {
      type: Sequelize.STRING(60),
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Agrega un correo valido",
        },
        notEmpty: {
          msg: "El email no puede ir vacio",
        },
      },
      unique: {
        args: true,
        msg: "Usuario ya registrado",
      },
    },
  },
 
);
module.exports = Clientes;
