const express = require("express");
const router = express.Router();


const clienteController = require('../controllers/clienteController');

module.exports = function () {
  
  //Agregar nuevos clientes via POST
  router.post('/clientes', clienteController.nuevoCliente);

  //obtener todos lo clientes
  router.get('/clientes', clienteController.mostrarClientes);

  //Muestra un cliente por su ID
  router.get('/clientes/:idCliente', clienteController.mostrarCliente);

  //Actualizar Cliente
  router.put('/clientes/:idCliente', clienteController.actualizarCliente);

  //Eliminar cliente
  router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

  return router;
};
