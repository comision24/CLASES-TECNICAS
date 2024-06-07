const router = require("express").Router()
const { metricsApi, getQueryApi } = require("../../controllers/api/other")

router.get("/metrics", metricsApi)
router.get("/query", getQueryApi)

module.exports = router;