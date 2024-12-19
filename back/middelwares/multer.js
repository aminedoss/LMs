const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Chemin pour les fichiers uploadés
const uploadPath = path.join(__dirname, "../uploads");

// Créer le dossier "uploads" si nécessaire
if (!fs.existsSync(uploadPath)) {
  try {
    fs.mkdirSync(uploadPath, { recursive: true });
    console.log(`Dossier créé à : ${uploadPath}`);
  } catch (error) {
    console.error("Erreur lors de la création du dossier d'upload :", error);
  }
}

// Configuration de stockage avec multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const sanitizedFileName = file.originalname.replace(/[:]/g, "-");
    const fileName = new Date().toISOString().replace(/[:]/g, "-") + "-" + sanitizedFileName;
    cb(null, fileName);
  },
});

// Validation des types de fichiers (optionnel)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accepter le fichier
  } else {
    cb(new Error("Type de fichier non supporté. Seuls les PDF, JPEG et PNG sont autorisés."), false);
  }
};

// Configuration de multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limite de taille à 10 Mo
  fileFilter: fileFilter, // Ajouter le filtre de type de fichier
});

// Exporter l'objet "upload" pour utilisation dans les routes
module.exports = { upload };
