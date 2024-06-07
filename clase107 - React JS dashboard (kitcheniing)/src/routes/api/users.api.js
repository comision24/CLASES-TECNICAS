const router = require("express").Router()
const { list } = require("../../controllers/api/users");


router.get("/",list)

module.exports = router;