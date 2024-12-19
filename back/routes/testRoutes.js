// routes/testRoutes.js
const { testPostController } = require("../Controllers/testControllers.js");
const express = require("express");
const router = express.Router();

router.post('/test-post', testPostController);
module.exports = router;

