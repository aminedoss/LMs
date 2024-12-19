const dotenv = require("dotenv"); 
dotenv.config({ path: "./.env" });
const connectDB = require("./Config/db");
const express = require("express");
const cors = require("cors");
const path = require("path"); // Pour servir les fichiers statiques

const testRoutes = require("./routes/testRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const jobRoutes = require("./routes/jobRoutes.js");
const CvRoutes = require("./routes/CvRoutes.js");
const QuizRoutes = require("./routes/QuizRoutes.js");
const CourseRoutes = require("./routes/CourseRoutes.js");
const errroMiddelware = require("./middelwares/errroMiddelware.js");

const app = express();
connectDB(); // Connexion à la base de données

app.use(express.json());
app.use(cors());

// Servir le dossier "uploads" comme dossier statique
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes de l'application
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/Courses", CourseRoutes);
app.use("/api/v1/CV", CvRoutes);
app.use("/api/v1/quiz", QuizRoutes);

// Middleware global pour gérer les erreurs
app.use(errroMiddelware);

const port = process.env.PORT || 3300;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}...`);
});
