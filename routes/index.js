const express = require("express");
const router = express.Router();

const clienteController = require("../controllers/clienteController");
const serviciosController = require("../controllers/serviciosController");
const citaController = require("../controllers/citaController");
const citaServiciosController = require("../controllers/citaServiciosController");
const usuariosController = require("../controllers/usuariosController");

module.exports = function () {
  /**-----------------------CLIENTES-------------------- */
  //Agregar nuevos clientes via POST
  router.post("/clientes", clienteController.nuevoCliente);

  //obtener todos lo clientes
  router.get("/clientes", clienteController.mostrarClientes);

  //Muestra un cliente por su ID
  router.get("/clientes/:idCliente", clienteController.mostrarCliente);

  //Actualizar Cliente
  router.put("/clientes/:idCliente", clienteController.actualizarCliente);

  //Eliminar cliente
  router.delete("/clientes/:idCliente", clienteController.eliminarCliente);

  /**-----------------------SERVICIOS-------------------- */

  //Agregar un nuevo servicio via POST
  router.post("/servicios", serviciosController.nuevoServicio);

  //Obtener todos los servicios GET
  router.get("/servicios", serviciosController.mostrarServicios);

  //Obtener  servicios por ID - GET
  router.get("/servicios/:idServicio", serviciosController.mostrarServicio);

  //Actualizar servicio
  router.put("/servicios/:idServicio", serviciosController.actualizarServicio);

  //Eliminar Servico
  router.delete("/servicios/:idServicio", serviciosController.eliminarServicio);

  /**-----------------------CITAS-------------------- */

  // Agregar una cita POST
  router.post("/citas", citaController.nuevaCita);

  //Mostrar citas
  router.get("/citas", citaController.mostrarCitas);

  //Mostrar citas po ID
  router.get("/citas/:idCita", citaController.mostrarCita);

  //Actualziar Cita
  router.put("/citas/:idCita", citaController.actualizarCita);

  //Eliminar Cita
  router.delete("/citas/:idCita", citaController.eliminarCita);

  /**-----------------------CITAS-SERVICIOS-------------------- */

  //Agregar cita-cliente-servicios
  router.post("/cita-servicios", citaServiciosController.nuevaCitaServicio);

  //Mostrar cita-cliente-servicios
  router.get("/cita-servicios", citaServiciosController.mostrarCitaServicios);

  //Mostrar cita-cliente-servicios por ID
  router.get(
    "/cita-servicios/:id",
    citaServiciosController.mostrarCitaServicio
  );

  //Actualizar cita-cliente-servicios por ID
  router.put(
    "/cita-servicios/:id",
    citaServiciosController.actualizarCitaServicio
  );

  //Eliminar cita-cliente-servicios por ID
  router.delete(
    "/cita-servicios/:id",
    citaServiciosController.eliminarCitaServicio
  );

  /**-----------------------USUARIOS-------------------- */

  //Crear Cuenta
  router.post("/crear-cuenta", usuariosController.registrarUsuario);

  // iniciar Sesion
  router.post("/iniciar-sesion", usuariosController.autenticarUsuario);

  return router;
};
