const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"
router.get("/productos", adminController.listProducts); 

module.exports = router;
