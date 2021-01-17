const Clientes = require("../models/Clientes");

//Agrega un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
  const { nombre, apellido, email, telefono } = req.body;

  try {
    await Clientes.create({
      nombre,
      apellido,
      email,
      telefono,
    });
    res.json({ mensaje: "Se agrego un nuevo cliente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

//muestra todos los clientes
exports.mostrarClientes = async (req, res, next) => {
  try {
    const clientes = await Clientes.findAll({});
    res.json(clientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

//muestra clietne por id
exports.mostrarCliente = async (req, res, next) => {
  try {
    // console.log(req.params);
    const cliente = await Clientes.findOne({
      where: { id: req.params.idCliente },
    });
    if (!cliente) {
      res.json({ mensaje: "Ese cliente no existe" });
      next();
    }
    res.json(cliente);
  } catch (error) {
    console.log(error);
    next();
  }
};

//Actualizar cliente
exports.actualizarCliente = async (req, res, next) => {
  try {
    //console.log(actualizarCliente);
    await Clientes.update(req.body, { where: { id: req.params.idCliente } });
    res.json(actualizarCliente);
  } catch (error) {
    console.log(error);
    next();
  }
};

//Eliminar cliente
exports.eliminarCliente = async (req, res, next) => {
  try {
    await Clientes.destroy({
      where: { id: req.params.idCliente },
    });
    res.json({ mensaje: "El cliente se ha eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
