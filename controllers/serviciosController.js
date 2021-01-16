const Servicios = require("../models/Servicios");

exports.nuevoServicio = async (req, res, next) => {
  const { nombre, precio } = req.body;
  try {
    await Servicios.create({
      nombre,
      precio,
    });
    res.json({ mensaje: "Se agrego un nuevo servicio" });
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.mostrarServicios = async (req, res, next) => {
  try {
    const servicios = await Servicios.findAll({});
    res.json(servicios);
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.mostrarServicio = async (req, res, next) => {
  try {
    const servicio = await Servicios.findOne({
      where: { id: req.params.idServicio },
    });
    // console.log(servicio);

    if (!servicio) {
      res.json({ mensaje: "Ese servicio no existe" });
      next();
    }
    res.json(servicio);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizarServicio = async (req, res, next) => {
  try {
    const actualizarServicio = req.body;
    await Servicios.update(
      { actualizarServicio },
      { where: { id: req.params.idServicio } }
    );
    res.json(actualizarServicio);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarServicio = async (req, res, next) => {
  try {
    await Servicios.destroy({
      where: { id: req.params.idServicio },
    });
    res.json({ mensaje: "Servicio eliminado correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};
