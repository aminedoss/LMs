import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import SidebarUser from "./Sidebar";
import axios from 'axios';

const GraduateProfile = () => {
  const initialPersonalInfo = {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    github: "",
  };

  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [cvFile, setCvFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleCVUpload = (e) => {
    setCvFile(e.target.files[0]); // Store the uploaded file
  };

  const resetForm = () => {
    setPersonalInfo(initialPersonalInfo); // Reset personal information
    setCvFile(null); // Clear the CV file
    document.getElementById("cv-upload-input").value = ""; // Clear the file input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!cvFile) {
      setError("Please upload your CV.");
      return;
    }

    const formData = new FormData();
    formData.append("name", personalInfo.fullName);
    formData.append("email", personalInfo.email);
    formData.append("phone", personalInfo.phone);
    formData.append("gitHub", personalInfo.github);
    formData.append("linkedin", personalInfo.linkedIn);
    formData.append("file", cvFile);

    try {
      const token = localStorage.getItem("token"); // Récupérer le token d'auth depuis le localStorage

        if (!token) {
          throw new Error("Vous devez être connecté pour accéder à cette page."); // Erreur si aucun token
        }
      const response = await axios.post("http://localhost:3300/api/v1/CV/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage("CV uploaded successfully!");
      resetForm(); // Reset the form after successful upload
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error uploading CV:", error);
      setError(
        error.response?.data?.message || "Error uploading CV. Please try again."
      );
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SidebarUser />
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f9fa" }}>
        <Container>
          <h2 className="mb-4">Graduate Profile</h2>
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-dark text-white">
              <h4 className="mb-0">Personal Information</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={personalInfo.fullName}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          fullName: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          email: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      value={personalInfo.phone}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          phone: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      value={personalInfo.location}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          location: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>LinkedIn Profile</Form.Label>
                    <Form.Control
                      type="url"
                      value={personalInfo.linkedIn}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          linkedIn: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>GitHub Profile</Form.Label>
                    <Form.Control
                      type="url"
                      value={personalInfo.github}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          github: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* CV Upload */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-dark text-white">
              <h4 className="mb-0">CV Upload</h4>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Upload your CV (PDF format)</Form.Label>
                <Form.Control
                  type="file"
                  accept=".pdf"
                  id="cv-upload-input" // Add an ID to the input for easy access
                  onChange={handleCVUpload}
                />
              </Form.Group>
            </Card.Body>
          </Card>

          <div className="d-flex justify-content-end">
            <Button variant="dark" size="lg" onClick={handleSubmit}>
              Save Profile
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GraduateProfile;
