const CvModel = require("../Models/CvModel.js");
const mongoose = require("mongoose");
const path = require("path");

// Upload Controller
const uploadCvController = async (req, res, next) => {
    try {
      const { name, email, phone, gitHub, linkedin } = req.body;
  
      if (!name || !email || !phone || !req.file) {
        return res.status(400).json({ success: false, message: "Name and file are required" });
      }
      const file = `uploads/${req.file.filename}`;
      const createdBy = req.user.userId; 
      const item = await CvModel.create({
        name,
        email,
        phone,
        gitHub,
        linkedin,
        file,
        createdBy,
      });
      console.log('File uploaded successfully:', req.file);
      console.log('User info:', { name, email, phone, gitHub, linkedin });
      res.status(201).json({ success: true, item });
    } catch (error) {
      next(error);
    }
  };
  

// Get All CVs Controller
const getAllCVs = async (req, res) => {
    try {
        const cvs = await CvModel.find();
        if (!cvs || cvs.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Aucun CV trouvé.",
            });
        }

        res.status(200).json({
            success: true,
            count: cvs.length,
            data: cvs,
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des CV:", error);
        res.status(500).json({
            success: false,
            message: "Une erreur est survenue lors de la récupération des CV.",
            error: error.message,
        });
    }
};

module.exports = {
    getAllCVs,
    uploadCvController,
};
