const CourseModel = require("../Models/CourseModel.js");
const ListModel = require("../Models/ListeModel.js");
const User = require("../Models/UserModel");
const fs = require("fs");
const mongoose =require("mongoose");
const createCourse = async (req, res,next) => {
	try {
	const { title, description, category, createdBy, duration, price } = req.body;
	const image = req.file;
	console.log(typeof req.file);
	
	await CourseModel.create({
		title,
		description,
		category,
		createdBy,
		img: image?.path,
		duration,
		price,
	});
	res.status(201).json({
		message: "Course Created Successfully",
		});
	} catch (error) {
            next(error);
    }
};
const addCourse = async (req, res) => {
    try{
        const {title,description,video,course}=req.body;
        const Video = req.file;
        const Courses = await CourseModel.findById(req.params.id);
        if(!Courses)
        {
            return res.status(404).json({
                message: "No Course Found with this ID",
            })
        }
        const List = await ListModel.create({
            title,
            description,
            video:Video?.path,
            course:Courses._id,
        });
        res.status(201).json({
            message: "List Created Successfully",
            List
        });
    }catch(error)
    {
    res.status(500).json({
        message:error.message,
        });
    };
};
const getAllCourse = async (req, res)=> {
	try{
		const courses = await CourseModel.find();
		res.json({
			courses,
		});
	}
	catch(error)
    {
		res.status(500).json({
			message:error.message,
			});
    };
};
const getById = async (req,res)=> {
	try{
		const courses = await CourseModel.findById(req.params.id);
		res.json({
			courses,
		});
	}
	catch(error)
    {
    res.status(500).json({
        message:error.message,
        });
    };
};
const DeleteList = async (req,res)=> {
    try {
        const List = await ListModel.findById(req.params.id);
        if (!List) {
            return res.status(404).json({
                message: "List not found",
            });
        }
        await fs.unlink(List.video, (err) => {
            if (err) {
                console.error("Error deleting video:", err.message);
            } else {
                console.log("Video deleted successfully!");
            }
        });
        await List.deleteOne();
        res.json({
            message:"List deleted !!!"
        });
    } catch (error) {
        res.status(500).json({
            message:error.message,
            });
    }
};
module.exports = { createCourse,addCourse,getAllCourse,getById,DeleteList };