import React, { useState, useEffect } from "react";

function Alloffre({ search }) {
  const [offres, setOffres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3300/api/v1/job/get-job")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.jobs)) {
          setOffres(data.jobs);
        } else {
          throw new Error("La réponse de l'API n'est pas valide.");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des offres :", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Chargement des offres...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const normalizedSearch = typeof search === "string" ? search.toLowerCase() : "";

  return (
    <div className="d-flex gap-3 justify-content-center p-3 flex-wrap">
      {Array.isArray(offres) && offres.length > 0 ? (
        offres
          .filter((e) => e.company && e.company.toLowerCase().includes(normalizedSearch))
          .map((e, i) => (
            <div className="card shadow p-3" style={{ width: "18rem" }} key={i}>
              <h5 className="card-title">{e.company || "Nom de l'entreprise indisponible"}</h5>
              <h5 className="card-text">Position: {e.position || "Non spécifiée"}</h5>
              <h5 className="card-text">Status: {e.status || "Non spécifié"}</h5>
              <h5 className="card-text">Location: {e.workLocation || "Non spécifiée"}</h5>
            </div>
          ))
      ) : (
        <div>Aucune offre trouvée.</div>
      )}
    </div>
  );
}

export default Alloffre;
