const CitasServicios = require("../models/CitasServicios");

exports.nuevaCitaServicio = async (req, res, next) => {
  const { id } = req.body;
  try {
    await CitasServicios.create({
      id,
      servicioId: req.body.servicioId,
      citaId: req.body.citaId,
    });
    res.json({ mensaje: "Se agrego una nueva cita con sus servicios" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.mostrarCitaServicios = async (req, res, next) => {
  try {
    const citaServicios = await CitasServicios.findAll({
      include: [
        {
          association: CitasServicios.Citas,
          association: CitasServicios.Servicios,
        },
      ],
    });
    res.json(citaServicios);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.mostrarCitaServicio = async (req, res, next) => {
  try {
    const citaServicio = await CitasServicios.findOne({
      where: { id: req.params.id },
    });
    if (!citaServicio) {
      res.json({ mensaje: "La cita o servicios no existen" });
    }
    res.json(citaServicio);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.actualizarCitaServicio = async (req, res, next) => {
  try {
    const citaServicio = await CitasServicios.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(citaServicio);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.eliminarCitaServicio = async (req, res, next) => {
  try {
    await CitasServicios.destroy({
      where: { id: req.params.id },
    });
    res.json({ mensaje: "Cita servicios eliminados correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};
