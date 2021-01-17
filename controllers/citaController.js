const Citas = require("../models/Citas");
const Clientes = require("../models/Clientes");

exports.nuevaCita = async (req, res, next) => {
  try {
    const { fecha, hora } = req.body;

    const nuevaCita = await Citas.create({
      fecha,
      hora,
      clienteId: req.body.clienteId,
    });
    //console.log(nuevaCita);
    res.json({ mensaje: "Se agrego una nueva cita" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.mostrarCitas = async (req, res, next) => {
  try {
    const citas = await Citas.findAll({
      include: [
        {
          association: Citas.Clientes,
        },
      ],
    });

    res.json(citas);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.mostrarCita = async (req, res, next) => {
  try {
    const cita = await Citas.findOne({
      where: { id: req.params.idCita },
    });
    if (!cita) {
      res.json({ mensaje: "Esa cita no existe" });
      next();
    }
    res.json(cita);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizarCita = async (req, res, next) => {
  try {
    const cita = await Citas.update(req.body, {
      where: { id: req.params.idCita },
    });
    res.json(cita);
  } catch (error) {
    console.log(error);
    next();
  }
};
exports.eliminarCita = async (req, res, next) => {
  try {
    await Citas.destroy({
      where: { id: req.params.idCita },
    });
    res.json({ mensaje: "La cita se elimino correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};
