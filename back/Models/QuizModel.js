const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    mainQuestion: {
        type: String,
        required: [true,"Questions is require !!"] 
    },
    choices: {
        type: [String],
        required: [true,"choices is require !!"] 
    },
    correctAnswer: {
        type: String,
        required: [true,"correct Answer is require !!"] 
    },
    answeredResult: {
        type: Number, 
        default: -1 
    },
    statistics: {
        totalAttempts: { 
            type: Number,
            default: 0 
        },
        correctAttempts: { 
            type: Number, 
            default: 0 
        },
        incorrectAttempts: {
            type: Number, 
            default: 0 
        },
    },
});

const quizSchema = new Schema({
    icon: { 
        type: String, 
        required: [true,"icon is require !!"]
    }, // Assuming you store the icon as a string
    quizTitle: { 
        type: String, 
        required: [true,"title is require !!"] 
    },
    quizQuestions: { 
        type: [questionSchema], 
        required: [true,"Questions is require !!"]
    },
});
module.exports = mongoose.model('Quiz', quizSchema);