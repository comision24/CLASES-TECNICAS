const express = require("express")
const router = express.Router()
const otherController = require("../controllers/other")


router.get("/", otherController.home)
router.get("/sobre-nosotros", otherController.about)

module.exports = router