const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentication");

// "/autenticacion"
router.get("/iniciar", authController.login); //  /autenticacion/iniciar

router.get("/registrar", authController.register); //  /autenticacion/registrar

module.exports = router;
