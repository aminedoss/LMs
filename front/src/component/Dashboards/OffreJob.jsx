// OffreUser.jsx
import React, { useState, useEffect } from "react";
import axios from "axios"; // Importer Axios
import SidebarUser from "./Sidebar";

function OffreUser({ search }) {
  const [offres, setOffres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3300/api/v1/job/get-job");
        if (response.data && Array.isArray(response.data.jobs)) {
          setOffres(response.data.jobs);
        } else {
          throw new Error("La réponse de l'API n'est pas valide.");
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des offres :", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    const user = JSON.parse(localStorage.getItem("user")); // Récupérer l'utilisateur connecté
    console.log("Utilisateur connecté :", user); // Ajouté pour déboguer

    if (!user || !user.token) {
      return alert("Vous devez être connecté pour postuler !");
    }

    const resume = user.resume || ""; // Assurez-vous que le chemin d'accès à votre CV est correct
    const coverLetter = prompt("Veuillez entrer votre lettre de motivation :");

    try {
      // Soumettre la candidature
      const response = await axios.post(
        "http://localhost:3300/api/v1/job/apply",
        { jobId, resume, coverLetter },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`, // Utiliser le token de l'utilisateur
          },
        }
      );

      alert("Candidature soumise avec succès !");
      console.log("Réponse de l'application :", response.data); // Ajouté pour déboguer
    } catch (error) {
      console.error("Erreur lors de la soumission de la candidature :", error.response ? error.response.data : error.message);
      alert("Une erreur est survenue lors de la soumission de la candidature. Vérifiez la console pour plus de détails.");
    }
  };

  if (isLoading) {
    return <div className="text-center my-5">Chargement des offres...</div>;
  }

  if (error) {
    return <div className="text-center text-danger my-5">Erreur : {error}</div>;
  }

  const normalizedSearch = typeof search === "string" ? search.toLowerCase() : "";

  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      <div style={{ width: "250px", background: "#f8f9fa", borderRight: "1px solid #ddd" }}>
        <SidebarUser />
      </div>

      <div className="flex-grow-1 p-4" style={{ overflowY: "auto" }}>
        <h2 className="text-center mb-4">Liste des Offres</h2>
        <div className="row">
          {Array.isArray(offres) && offres.length > 0 ? (
            offres
              .filter((e) => e.company && e.company.toLowerCase().includes(normalizedSearch))
              .map((e, i) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div className="card shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        {e.company || "Nom de l'entreprise indisponible"}
                      </h5>
                      <p className="card-text">
                        <strong>Position:</strong> {e.position || "Non spécifiée"}
                      </p>
                      <p className="card-text">
                        <strong>Status:</strong> {e.status || "Non spécifié"}
                      </p>
                      <p className="card-text">
                        <strong>Location:</strong> {e.workLocation || "Non spécifiée"}
                      </p>
                      <button className="btn btn-primary w-100 mt-3" onClick={() => handleApply(e._id)}>
                        Postuler
                      </button>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center col-12">Aucune offre trouvée.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OffreUser;
