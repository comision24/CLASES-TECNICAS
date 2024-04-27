const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const { uploadUsers } = require("../middlewares/uploads");
const checkSessionRoute = require("../middlewares/checkSessionRoute");

// /usuario
router.get("/perfil", checkSessionRoute, usersController.profile);
router.put(
  "/perfil",
  uploadUsers.single("avatar"),
  checkSessionRoute,
  usersController.profileUpdate
);

module.exports = router;
