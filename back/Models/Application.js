const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: [true, "Job reference is required"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User reference is required"],
    },
    resume: {
        type: String, // Le chemin ou URL vers le CV de l'utilisateur
        required: [true, "Resume is required"],
    },
    coverLetter: {
        type: String, // Lettre de motivation optionnelle
        required: false,
    },
    status: {
        type: String,
        enum: ["applied", "shortlisted", "rejected"],
        default: "applied",
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Application", applicationSchema);
