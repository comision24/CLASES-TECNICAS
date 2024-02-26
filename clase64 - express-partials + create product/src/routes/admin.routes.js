const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"
router.get("/productos", adminController.listProducts); 

router.get("/crear-producto", adminController.createProduct); 
router.post("/crear-producto", adminController.storeProduct);


router.get("/editar-producto/:id", adminController.updateProduct); 

// router.get("/eliminar-producto/:id", adminController.deleteProduct);



module.exports = router;
