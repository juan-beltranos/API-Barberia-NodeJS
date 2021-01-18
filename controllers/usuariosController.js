const Usuarios = require("../models/Usuarios");
const jwt = require("jsonwebtoken");

exports.registrarUsuario = async (req, res) => {
  const { email, password } = req.body;

  try {
    await Usuarios.create({
      email,
      password,
    });
    res.json({ mensaje: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
    res.json({ mensaje: " Hubo en error" });
  }
};
exports.autenticarUsuario = async (req, res, next) => {
  const { email, password } = req.body;
  const usuario = await Usuarios.findOne({ email });

  if (!usuario) {
    await res.status(401).json({ mensaje: "Ese usuario no existe" });
    next();
  } else {
    if ((!password, usuario.password)) {
      await res.status(401).json({ mensaje: "Password incorrecto" });
      next();
    } else {
      //password correcto, firmar token
      const token = jwt.sign(
        {
          email: usuario.email,
          id: usuario.id,
        },
        "LLAVESECRETA",
        {
          expiresIn: "1h",
        }
      );
      res.json({ token });
    }
  }
};
