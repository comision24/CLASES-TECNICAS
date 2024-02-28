const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentication");

// app.js --> "/autenticacion"


//  /autenticacion/iniciar
router.get("/iniciar", authController.login); 

//  /autenticacion/registrar
router.get("/registrar", authController.register); 

module.exports = router;
