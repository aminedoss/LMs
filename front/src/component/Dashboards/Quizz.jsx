import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import SidebarUser from "./Sidebar";

const Quiz = () => {
  const { quizId } = useParams(); // Extract quizId from URL parameters
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId) {
        setError("Quiz ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const user = JSON.parse(localStorage.getItem("user")); 
        console.log(`Fetching quiz with ID: ${quizId}`);
        const response = await axios.get(`http://localhost:3300/api/v1/quiz/${quizId}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log("Response data:", response.data);
        const fetchedQuiz = response.data.quiz;
        if (!fetchedQuiz || !Array.isArray(fetchedQuiz.quizQuestions) || fetchedQuiz.quizQuestions.length === 0) {
          setError("No questions available for this quiz.");
          setLoading(false);
          return;
        }

        setQuizData(fetchedQuiz);
      } catch (err) {
        console.error("Error fetching quiz:", err.response ? err.response.data : err.message);
        setError(err.response ? err.response.data.message : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleSubmit = () => {
    if (!quizData) {
      setError("Quiz data is not available.");
      return;
    }

    // Check if the selected option matches the correct answer
    if (selectedOption === quizData.quizQuestions[currentQuestion]?.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < quizData.quizQuestions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption(null);
      setTime(30);
    } else {
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    if (time > 0 && !quizCompleted) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (time === 0) {
      handleSubmit();
    }
  }, [time, quizCompleted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setTime(30);
    setQuizCompleted(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!quizData) {
    return <div>No quiz data found.</div>;
  }

  const currentQuizQuestion = quizData.quizQuestions[currentQuestion];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SidebarUser />
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f8f9fa",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {quizCompleted ? (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "50px", marginBottom: "20px" }}>😊</div>
              <h2>Your Score</h2>
              <h3>{score}/{quizData.quizQuestions.length}</h3>
              <button
                onClick={resetQuiz}
                style={{
                  backgroundColor: "#1abc9c",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  margin: "20px 0",
                }}
              >
                Try Again
              </button>
            </div>
          ) : (
            <>
              {/* Afficher l'image du quiz s'il existe */}
              {quizData.icon && (
                <img
                  src={quizData.icon} // Assurez-vous que cette variable contient l'URL correcte de l'image
                  alt={`${quizData.quizTitle} Icon`}
                  style={{ width: "100px", height: "100px", marginBottom: "20px" }} // Ajustez la taille selon vos besoins
                />
              )}

              <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#1abc9c",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "24px",
                  }}
                >
                  {"</>"}
                </div>
                <div style={{ marginLeft: "15px" }}>
                  <h2 style={{ margin: 0, fontSize: "20px" }}>{quizData.quizTitle}</h2>
                  <p style={{ margin: 0, color: "#555" }}>{quizData.quizQuestions.length} Questions</p>
                </div>
                <div style={{ marginLeft: "auto", color: "#888", fontSize: "14px" }}>⏱ {formatTime(time)}</div>
              </div>

              <h3 style={{ marginBottom: "20px", fontSize: "18px", color: "#333" }}>
                {currentQuestion + 1}. {currentQuizQuestion?.mainQuestion}
              </h3>

              {/* Check if there are choices available for the current question */}
              {currentQuizQuestion.choices && currentQuizQuestion.choices.length > 0 ? (
                currentQuizQuestion.choices.map((choice, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "15px",
                      padding: "10px",
                      border: `2px solid ${selectedOption === index ? "#1abc9c" : "#ddd"}`,
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleOptionChange(index)}
                  >
                    <span
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        border: `2px solid ${selectedOption === index ? "#1abc9c" : "#ddd"}`,
                        backgroundColor: selectedOption === index ? "#1abc9c" : "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: selectedOption === index ? "#fff" : "#000",
                        marginRight: "15px",
                      }}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <p style={{ margin: 0, color: "#333" }}>{choice}</p>
                  </div>
                ))
              ) : (
                <div>No options available for this question.</div>
              )}

              <button
                style={{
                  backgroundColor: "#1abc9c",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginTop: "20px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                onClick={handleSubmit}
              >
                {currentQuestion < quizData.quizQuestions.length - 1 ? "Next" : "Submit"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
