const ListModel = require("../Models/ListeModel.js");
const User = require("../Models/UserModel");
const fetchList = async (req,res)=> {
    try {
        const List = await ListModel.find({course: req.params.id});
        const user = await User.findById(req.user.userId);
        if (user.role === "admin"){
            return res.json({List});
        }
        if(!user.subscription.includes(req.params.id)){
            return res.status(400).json({
                message:"You have subscribed to this course ! "
            });
        }
        res.json({List});
    } catch (error) {
        res.status(500).json({
            message:error.message,
            });
    }
};
const fetchAllList = async (req,res)=> {
    try {
        const Lists = await ListModel.findById(req.params.id);
        const user = await User.findById(req.user.userId);
        if (user.role === "admin"){
            return res.json({Lists});
        }
        if(!user.subscription.includes(req.params.id)){
            return res.status(400).json({
                message:"You have subscribed to this course ! "
            });
        }
        res.json({Lists});
    } catch (error) {
        res.status(500).json({
            message:error.message,
            });
    }
};
module.exports = { fetchList,fetchAllList };