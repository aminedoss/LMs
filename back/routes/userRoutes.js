const express = require("express");
const {
    getAllUsers,
    updateProfileController,
    getUserById,
    updateUserController,
    deleteUser
} = require("../Controllers/userController");
const {userAuth,isAdmin} = require("../middelwares/authMiddleware.js");
const {upload} = require("../middelwares/multer.js");
const router = express.Router();

router.patch("/update-profile", userAuth, upload.single("img"), updateProfileController);
router.patch("/update-user/:id", userAuth, isAdmin, updateUserController);
router.get("/all-users", userAuth, isAdmin, getAllUsers);
router.get("/user/:id", userAuth, isAdmin, getUserById);
router.delete("/delete-user/:id", userAuth, deleteUser);

module.exports = router;
