import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from '../AuthContext'; // Importer le hook

function Naavbar() {
  const location = useLocation(); 
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Utiliser le contexte pour obtenir l'utilisateur et la fonction de déconnexion

  // Détermine si le bouton Login doit être affiché
  const showLoginButton = ["/", "/about-us", "/categories"].includes(location.pathname);

  const handleLogout = () => {
    logout(); // Appeler la fonction de déconnexion
    navigate('/'); // Rediriger vers la page d'accueil
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Learn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link onClick={() => navigate('/')} className="mx-2">Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/about-us')} className="mx-2">About Us</Nav.Link>
            
            {/* Afficher le menu Catégories seulement si l'utilisateur est connecté */}
            {user && (
              <NavDropdown title="Categories" id="navbarScrollingDropdown" className="mx-2">
                <NavDropdown.Item onClick={() => navigate('/categories/ml')}>Machine Learning</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/categories/web-dev')}>Web Development</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => navigate('/categories/sql')}>Sql and No-Sql</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>

          <Form className="d-flex mx-auto">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="dark">Search</Button>
          </Form>

          {/* Afficher le nom de l'utilisateur et le bouton de déconnexion si l'utilisateur est connecté */}
          {user ? (
            <div className="d-flex align-items-center">
              <span className="mx-2 text-dark">{user.name}</span>
              {/* Bouton Dashboard basé sur le rôle de l'utilisateur */}
              <Button 
                variant="dark" 
                className="mx-2" 
                onClick={() => navigate(user.role === 'admin' ? '/dashboard-admin' : '/dashboard-user')}
              >
                Dashboard
              </Button>
              <Button variant="dark" onClick={handleLogout}>
                Déconnexion
              </Button>
            </div>
          ) : (
            showLoginButton && (
              <Button variant="dark" className="mx-2" onClick={() => navigate('/login')}>
                Login
              </Button>
            )
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;
