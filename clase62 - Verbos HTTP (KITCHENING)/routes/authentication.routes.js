const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentication");

// app.js --> "/autenticacion"


//  /autenticacion/iniciar
router.get("/iniciar", authController.login); 

//  /autenticacion/registrar
router.get("/registrar", authController.register); 

//  /autenticacion/nuevo-usuario
router.post("/nuevo-usuario", authController.newUser)

router.put("/nuevo-usuario")

router.patch("/nuevo-usuario")

router.delete("/nuevo-usuario")

module.exports = router;
