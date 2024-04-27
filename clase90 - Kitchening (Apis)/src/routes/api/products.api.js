const router = require("express").Router()
const { listApi } = require("../../controllers/api/admin");


/* /api/products */
router.get("/", listApi)


module.exports = router;