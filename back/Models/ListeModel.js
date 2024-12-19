const mongoose = require("mongoose");
const ListSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: [true, "title is required"],
        },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    video: {
        type: String,
        required: [true, "video is required"],
        },
    course: {
        type: mongoose.Schema.ObjectId,
        ref: "courses",
        required: [true, "Course is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});
module.exports = mongoose.model("List", ListSchema);