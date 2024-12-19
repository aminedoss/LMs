const User = require("../Models/UserModel");
const JWT = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    console.log("No authorization header provided");
    return res.status(401).json({ message: "No authorization header provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, role: payload.role, token:payload.token};
    console.log("Authenticated user:", req.user);
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

const isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "admin") {
        return res.status(403).json({ message: "You are not authorized as admin" });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: "An error occurred" });
    }
};

module.exports = { userAuth, isAdmin };
