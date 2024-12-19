const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "title is required"],
            },
        description: {
            type: String,
            required: [true, "description is required"],
        },
        img: {
            type: String,
            required: [true, "image is required"],
        },
        price: {
            type: Number,
            required: [true, "price is required"],
        },
        Duration: {
            type: Number
        },
        category: {
            type: String,
            required: [true, "category is required"],
        },
        createdBy: {
            type: String,
            ref: "User",
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        }
    }
);
module.exports = mongoose.model("Course", CourseSchema);