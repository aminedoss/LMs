const Quiz = require("../Models/QuizModel");
const fs = require("fs");
const mongoose = require("mongoose"); // Add this line to import mongoose



const createQuiz = async function(req, res) {
    console.log('Received data:', req.body); // Log the received data
    console.log('Received file:', req.file); // Log the received file

    const { quizTitle, quizQuestions } = req.body;
    const icon = req.file; // This should correctly refer to the uploaded file

    // Check if quizQuestions is a string and parse it
    let parsedQuestions;
    if (typeof quizQuestions === 'string') {
        try {
            parsedQuestions = JSON.parse(quizQuestions);
        } catch (error) {
            return res.status(400).json({ message: 'Invalid format for quizQuestions' });
        }
    } else {
        parsedQuestions = quizQuestions; // If it's already an array
    }

    // Create a new Quiz instance
    const newQuiz = new Quiz({
        quizTitle,
        quizQuestions: parsedQuestions, 
        icon: icon ? icon.path : null, // Assuming you're storing the file path
    });

    try {
        await newQuiz.save();
        return res.status(201).json({ message: 'Quiz created successfully!' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



// Obtenir tous les quiz
const GetAllQuiz = async (req, res, next) => {
    try {
        const All_quiz = await Quiz.find();
        res.json({ All_quiz });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir une quiz 
const GetQuizById = async (req, res) => {
    try {
        const quizId = req.params.id;

        // Validate the quizId
        if (!mongoose.Types.ObjectId.isValid(quizId)) {
            return res.status(400).json({ message: "Invalid quiz ID format" });
        }

        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        // Ensure quizQuestions is an array
        quiz.quizQuestions = quiz.quizQuestions || [];

        res.status(200).json({ success: true, quiz });
    } catch (error) {
        console.error("Error fetching quiz by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Mettre à jour un quiz
const UpdateQuiz = async (req, res, next) => {
    try {
        const { id } = req.params;
        const quizToUpdate = await Quiz.findById(id);

        if (!quizToUpdate) {
            return res.status(404).json({
                message: `No Quiz found with this ID: ${id}`,
            });
        }

        const { quizTitle, quizQuestions } = req.body;
        const icon = req.file?.path;

        if (icon) {
            // Supprimer l'ancienne icône
            if (quizToUpdate.icon) {
                fs.unlink(quizToUpdate.icon, (err) => {
                    if (err) console.error("Error deleting old icon:", err.message);
                });
            }
            quizToUpdate.icon = icon;
        }

        if (quizTitle) quizToUpdate.quizTitle = quizTitle;
        if (quizQuestions) quizToUpdate.quizQuestions = quizQuestions;

        await quizToUpdate.save();

        res.json({ message: "Quiz updated successfully!" });
    } catch (error) {
        next(error);
    }
};

// Supprimer un quiz
const DeleteQuiz = async (req, res, next) => {
    try {
        const quiz = await Quiz.findById(req.params.id);

        if (!quiz) {
            return res.status(404).json({ message: "Quiz not found" });
        }

        // Supprimer l'icône associée
        if (quiz.icon) {
            fs.unlink(quiz.icon, (err) => {
                if (err) {
                    console.error("Error deleting icon:", err.message);
                } else {
                    console.log("Icon deleted successfully!");
                }
            });
        }

        await quiz.deleteOne();

        res.json({ message: "Quiz deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createQuiz, GetAllQuiz, GetQuizById, UpdateQuiz, DeleteQuiz };
