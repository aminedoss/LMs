const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
{
    company: {
        type: String,
        required: [true, "Company name is required"],
        },
    position: {
        type: String,
        required: [true, "Job position is required"],
        maxlength: 100,
    },
    status: {
        type: String,
        enum: ["pending", "reject", "interview"],
        default: "pending",
    },
    workType: {
        type: String,
        enum: ["full-time", "part-time", "internship", "contract"],
        default: "full-time",
    },
    workLocation: {
        type: String,
        default: "Sousse",
        required: [true, "Work location is required"],
    },
    company_phone: {
        type: String,
        required: [true, "phone is required"],
    },
    company_email: {
        type: String,
        required: [true, "email is required"],
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
},
);
module.exports = mongoose.model("Job", jobSchema);
