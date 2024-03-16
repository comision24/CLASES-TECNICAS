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
const { productValidation } = require("../middlewares/validations");
// const { checkAdmin, detectTimeAction } = require("../middlewares");


// /admin
/*** CREATE ONE PRODUCT ***/
router.get("/crear-producto", create);
router.post("/crear-producto", uploadProducts.single("img"), productValidation, store);

/*** EDIT ONE PRODUCT ***/
router.get("/editar-producto/:id", edit);
router.put("/editar-producto/:id", uploadProducts.single("img"), productValidation, update);

/*** DELETE ONE PRODUCT***/
router.delete("/eliminar-producto/:id", destroy);

module.exports = router;
