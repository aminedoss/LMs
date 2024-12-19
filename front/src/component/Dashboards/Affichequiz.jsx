import React, { useEffect, useState } from "react";
import SidebarUser from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AfficheQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  const styles = {
    layout: {
      display: "flex",
      height: "100vh",
      backgroundColor: "#f0f4f8",
    },
    sidebar: {
      width: "250px",
    },
    mainContent: {
      flex: 1,
      padding: "20px",
      overflowY: "auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      justifyItems: "center",
    },
    card: {
      width: "250px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s, box-shadow 0.2s",
      textAlign: "center",
      padding: "20px",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    },
    image: {
      width: "80px",
      height: "80px",
      objectFit: "contain",
      marginBottom: "10px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    description: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "10px",
    },
    button: {
      backgroundColor: "#1abc9c",
      color: "#fff",
      border: "none",
      padding: "8px 16px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background-color 0.2s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  // Fetch quizzes from backend
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the auth token from localStorage

        if (!token) {
          throw new Error("Vous devez être connecté pour accéder à cette page."); // Error if no token
        }
        const response = await axios.get("http://localhost:3300/api/v1/quiz/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuizzes(response.data.All_quiz);
      } catch (error) {
        console.error("Error fetching quizzes:", error.message);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div style={styles.layout}>
      <div style={styles.sidebar}>
        <SidebarUser />
      </div>

      <div style={styles.mainContent}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Available Tests
        </h1>
        <div style={styles.grid}>
          {quizzes.map((quiz, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = styles.cardHover.transform;
                e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <img
                src={quiz.icon}
                alt={quiz.quizTitle}
                style={styles.image}
              />
              <h3 style={styles.title}>{quiz.quizTitle}</h3>
              <p style={styles.description}>
                {quiz.quizQuestions.length} questions
              </p>
              <button
                style={styles.button}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    styles.buttonHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = styles.button.backgroundColor)
                }
                onClick={() => navigate(`/quiz/${quiz._id}`)} // Pass quiz ID to the route
              >
                Start
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfficheQuiz;
