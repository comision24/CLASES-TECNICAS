// ************ Require's ************
const express = require("express");
const router = express.Router();
const { uploadProducts } = require("../middlewares/uploadFiles");

// ************ Controller Require ************
const {
  create,
  store,
  edit,
  update,
  destroy,
} = require("../controllers/admin");
const { checkAdmin, detectTimeAction } = require("../middlewares");

// /admin
/*** CREATE ONE PRODUCT ***/
router.get("/crear-producto", checkAdmin, create);
router.post(
  "/crear-producto",
  uploadProducts.single("img"),
  detectTimeAction,
  checkAdmin,
  store
);

/*** EDIT ONE PRODUCT ***/
router.get("/editar-producto/:id", checkAdmin, edit);
router.put(
  "/editar-producto/:id",
  uploadProducts.single("img"),
  checkAdmin,
  update
);

/*** DELETE ONE PRODUCT***/
router.delete("/eliminar-producto/:id", checkAdmin, destroy);

module.exports = router;
