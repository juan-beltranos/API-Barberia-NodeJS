const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

//importar el modelo
require("./models/Clientes");
require("./models/Servicios");
require("./models/Citas");
require("./models/CitasServicios");
require("./models/Usuarios");

// Crear la conexion a la BD
const db = require("./config/db");
db.sync({ force: false })
  .then(() => console.log("conectado al servidor"))
  .catch((error) => console.log(error));

//Habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//rutas de la app
app.use("/", routes());

app.listen(5000);
