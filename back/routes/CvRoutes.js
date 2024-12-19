const express = require("express");
const { uploadCvController, getAllCVs } = require("../Controllers/CvControllers.js");
const { upload } = require("../middelwares/multer.js");
const { userAuth, isAdmin } = require("../middelwares/authMiddleware.js");

const router = express.Router();


router.post(
    "/upload",
    userAuth, 
    upload.single("file"), 
    uploadCvController 
);


router.get(
    "/All-cv",
    userAuth, 
    isAdmin, 
    getAllCVs 
);

module.exports = router;
