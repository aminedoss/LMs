const express = require("express");
const {
    createQuiz,
    GetAllQuiz,
    GetQuizById, 
    UpdateQuiz, 
    DeleteQuiz
} = require("../Controllers/QuizController.js");
const {upload} = require("../middelwares/multer.js");
const {userAuth,isAdmin} = require("../middelwares/authMiddleware.js");
const router = express.Router();

router.post(
    "/create-Quiz",
    userAuth,
    isAdmin,
    upload.single("icon"),
    createQuiz
);
router.get("/",userAuth,GetAllQuiz);
router.get("/:id",userAuth,GetQuizById);
router.put("/update-Quiz/:id", userAuth, isAdmin, upload.single("icon"), UpdateQuiz);

router.delete("/Delete-Quiz/:id", userAuth, isAdmin, DeleteQuiz);


module.exports = router;