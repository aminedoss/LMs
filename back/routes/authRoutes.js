const express = require("express");
const { loginController, registerController } = require("../Controllers/authControllers.js");
const router = express.Router();
router.post("/register", registerController);
router.post("/login", loginController);
module.exports = router;