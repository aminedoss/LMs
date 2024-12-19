import React from "react";
import { useNavigate } from "react-router-dom";
import SidebarComponent from "./Sidebar";

function QuizLandingPage() {
  const navigate = useNavigate();

  const handleCreateQuiz = () => {
    navigate("/create-quiz"); 
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar Section */}
      <div style={{ width: "250px", backgroundColor: "#f8f9fa" }}>
        <SidebarComponent />
      </div>

      {/* Main Content Section */}
      <div style={{ flex: 1, textAlign: "center", marginTop: "50px" }}>
        <h1 style={{ fontSize: "24px" }}>
          <span style={{ color: "green", fontWeight: "bold" }}>Quiz</span> Spark
        </h1>
        <div style={{ marginTop: "30px" }}>
          <img
            src="https://thumbs.dreamstime.com/b/box-exprees-delivery-logo-stock-vector-box-exprees-delivery-logo-vector-128900874.jpg" 
            alt="Envelope"
            style={{ width: "150px", height: "150px" }}
          />
          <h2 style={{ marginTop: "20px", fontWeight: "bold" }}>
            Quizzes await! Make one.
          </h2>
          <p>Click below to begin your journey here...</p>
          <button
            onClick={handleCreateQuiz}
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Create Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizLandingPage;
