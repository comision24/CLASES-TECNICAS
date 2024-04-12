const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const { uploadProducts } = require("../middlewares/uploads");
const { productsValidationStore, productsValidationUpdate } = require("../middlewares/validations");

// "/admin"
router.get("/productos", adminController.listProducts);

router.get("/crear-producto", adminController.createProduct);
router.post(
  "/crear-producto",
  uploadProducts.fields([
    { name: "imagePrincipal" },
    { name: "imagesSecondary" },
  ]),
  productsValidationStore,
  adminController.storeProduct
);

router.get("/editar-producto/:id", adminController.updateProduct);
router.put(
  "/editar-producto/:id",
  uploadProducts.fields([
    { name: "imagePrincipal" },
    { name: "imagesSecondary" },
  ]),
  productsValidationUpdate,
  adminController.editProduct
);

router.get("/eliminar-producto", adminController.deleteProduct);
router.delete("/eliminar-producto/:id", adminController.removeProduct);

module.exports = router;
