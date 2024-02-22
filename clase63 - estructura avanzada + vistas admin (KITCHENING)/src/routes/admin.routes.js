const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"
router.get("/productos", adminController.listProducts); 

router.get("/crear-producto", adminController.createProduct); 


router.get("/editar-producto/:id", adminController.updateProduct); 

module.exports = router;
