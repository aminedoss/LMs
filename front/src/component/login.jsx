// login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBBtn, 
  MDBInput, 
  MDBCheckbox, 
} from 'mdb-react-ui-kit';
import { useAuth } from './AuthContext'; // Importer le hook

function Auth() {
  const { login } = useAuth(); // Récupérer la fonction de login du contexte
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const { data } = await axios.post('http://localhost:3300/api/v1/auth/login', { email, password });
        console.log("Réponse du backend :", data);
        
        if (data.success) {
          toast.success("Login réussi !");
          const { token, role, name } = data; 
          
          // Stocker le token et les informations de l'utilisateur
          const user = { token, name };
          localStorage.setItem('user', JSON.stringify(user)); // Stockage du token et du nom
          
          login(user); // Appeler la fonction de login avec les données de l'utilisateur

          // Navigation en fonction du rôle
          if (role === 'admin') {
            navigate('/dashboard-admin');
          } else if (role === 'user') {
            navigate('/dashboard-user');
          } else {
            toast.error("Rôle inconnu !");
          }
        }
      } else {
        const payload = { name: `${firstName} ${lastName}`, email, password };
        const { data } = await axios.post('http://localhost:3300/api/v1/auth/register', payload);
        
        if (data.success) {
          toast.success("Inscription réussie !");
          toggleForm();
          navigate('/login');
        }
      }
    } catch (error) {
      console.error("Erreur :", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Une erreur est survenue");
    }
  };

  return (
    <MDBContainer className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <MDBRow className="w-100">
        <MDBCol md="6" lg="5" xl="4" className="mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="text-center">{isLogin ? 'Login' : 'Signup'}</h4>
              <hr />
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <>
                    <MDBInput 
                      label="First Name" 
                      type="text" 
                      className="mb-3" 
                      required 
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)} 
                    />
                    <MDBInput 
                      label="Last Name" 
                      type="text" 
                      className="mb-3" 
                      required 
                      value={lastName} 
                      onChange={(e) => setLastName(e.target.value)} 
                    />
                  </>
                )}
                <MDBInput 
                  label="Email address" 
                  type="email" 
                  className="mb-3" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <MDBInput 
                  label="Password" 
                  type="password" 
                  className="mb-3" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                {!isLogin && (
                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox label="I agree to the terms" id="terms" required />
                  </div>
                )}
                <MDBBtn className="mb-4 w-100" color="dark" type="submit">
                  {isLogin ? 'Sign In' : 'Sign Up'}
                </MDBBtn>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      {isLogin ? 'Forgot password?' : 'Already have an account? Login'}
                    </a>
                  </p>
                  <MDBBtn tag="button" className="btn btn-link text-muted" color="none" onClick={toggleForm}>
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                  </MDBBtn>
                </div>
              </form>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Auth;
