const express = require("express");
const { userAuth } = require("../middelwares/authMiddleware.js");
const {
    createJobController,
    getAllJobsController,
    updateJobsController,
    deleteJobController,
    jobStatsController,
    applyForJob
} = require("../Controllers/jobControllers.js");
const router = express.Router();
//console.log(typeof createJobController);
//console.log(typeof getAllJobsController);
//console.log(typeof updateJobsController);
//console.log(typeof deleteJobController);
//console.log(typeof jobStatsController);

router.post("/create-job", userAuth, createJobController);
router.get("/get-job",getAllJobsController);
router.patch("/update-job/:id", userAuth, updateJobsController);
router.delete("/delete-job/:id", userAuth, deleteJobController);
router.delete("/job-stats", userAuth, jobStatsController);
router.post("/apply", userAuth, applyForJob);
module.exports = router;
