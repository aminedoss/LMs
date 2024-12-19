import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarAdmin from "./Sidebar";

function AllCv({ search }) {
    const [cv, setCv] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "http://localhost:3300/api/v1/CV/All-cv";

    useEffect(() => {
        const fetchCvs = async () => {
            try {
                const user = JSON.parse(localStorage.getItem("user")); 

                const response = await axios.get(API_URL, {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });

                console.log("Response data:", response.data);
                setCv(response.data.data);
            } catch (err) {
                console.error("Error fetching CVs:", err);
                setError(err.response ? err.response.data.message : "Network error occurred.");
            } finally {
                setLoading(false);
            }
        };

        fetchCvs();
    }, []);

    const normalizedSearch = search?.toLowerCase() || "";

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <SidebarAdmin />

            {/* Main Content */}
            <div className="container mt-4 flex-grow-1">
                <h1>All CVs</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>GitHub</th>
                            <th>LinkedIn</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(cv) && cv.length > 0 ? (
                            cv
                                .filter((e) => {
                                    return (
                                        e.name?.toLowerCase().includes(normalizedSearch) ||
                                        e.email?.toLowerCase().includes(normalizedSearch) ||
                                        e.phone?.toLowerCase().includes(normalizedSearch)
                                    );
                                })
                                .map((e, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.phone}</td>
                                        <td>{e.gitHub || "N/A"}</td>
                                        <td>{e.linkedin || "N/A"}</td>
                                        <td>
                                            <a
                                                className="btn btn-primary btn-sm"
                                                // Modifiez ici pour utiliser le chemin correct
                                                href={`http://localhost:3300/${e.file}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Download
                                            </a>
                                        </td>
                                    </tr>
                                ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">
                                    No CVs found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AllCv;
