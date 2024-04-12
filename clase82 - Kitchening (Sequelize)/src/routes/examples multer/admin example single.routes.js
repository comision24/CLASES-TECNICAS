const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/admin");
const { uploadProducts } = require("../../middlewares/uploads");

// "/admin"
router.get("/productos", adminController.listProducts);

router.get("/crear-producto", adminController.createProduct);
router.post(
  "/crear-producto",
  uploadProducts.single("imagePrincipal"),
  adminController.storeProduct
);

router.get("/editar-producto/:id", adminController.updateProduct);
router.put(
  "/editar-producto/:id",
  uploadProducts.single("imagePrincipal"),
  adminController.editProduct
);

router.get("/eliminar-producto", adminController.deleteProduct);
router.delete("/eliminar-producto/:id", adminController.removeProduct);

module.exports = router;
