const mongoose = require("mongoose");
const validator = require("validator");
const CvSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, "name of file is required"],
        },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
        validate: validator.isEmail,
        },
    phone: {
        type: String,
        required:[true, "Phone is Required "],
        validate: validator.isMobilePhone,
    },
    gitHub : {
        type:String,
    },
    linkedin:{
        type:String,
    },
    file: {
        type: String,
        required: [true, "Please provide a file "],
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
module.exports = mongoose.model("CV", CvSchema);