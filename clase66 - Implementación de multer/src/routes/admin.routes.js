const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const { uploadProducts } = require("../middlewares/uploads");

// "/admin"
router.get("/productos", adminController.listProducts);

router.get("/crear-producto", adminController.createProduct);
router.post(
  "/crear-producto",
  uploadProducts.fields([
    { name: "imagePrincipal", maxCount: 1 },
    { name: "imagesSecondary", maxCount: 3 },
  ]),
  adminController.storeProduct
);

router.get("/editar-producto/:id", adminController.updateProduct);
router.put(
  "/editar-producto/:id",
  uploadProducts.fields([
    { name: "imagePrincipal", maxCount: 1 },
    { name: "imagesSecondary", maxCount: 3 },
  ]),
  adminController.editProduct
);

router.get("/eliminar-producto", adminController.deleteProduct);
router.delete("/eliminar-producto/:id", adminController.removeProduct);

module.exports = router;
