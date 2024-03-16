const express = require("express");
const router = express.Router();

const { login, register, loginProcess, registerProcess } = require("../controllers/auth");
const { registerValidation } = require("../middlewares/validations/auth.validation");

// /auth
router.get("/iniciar", login);
router.post("/iniciar", loginProcess)

router.get("/registro", register);

router.post("/registro", registerValidation ,registerProcess)

module.exports = router;
