const express = require("express")
const router = express.Router()
const productController = require("../controllers/products")

/* /productos */
router.get("/detalle/:id", productController.detail)

module.exports = router