const express = require("express");
const router = express.Router();
const {
  login,
  processLogin,
  register,
  processRegister,
  logout,
} = require("../controllers/authentication");

// app.js --> "/autenticacion"

//  /autenticacion/iniciar
router.get("/iniciar", login);
router.post("/iniciar", processLogin);

//  /autenticacion/registrar
router.get("/registrar", register);

router.post("/registrar", processRegister);

router.get("/cerrar-sesion", logout)

module.exports = router;
