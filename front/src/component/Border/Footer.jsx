import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  const excludedPaths = ['/dashboard-user', '/dashboard-admin','/create-quiz'];

  if (excludedPaths.includes(location.pathname)) {
    return null; 
  }

  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#343a40', padding: '1rem' }}>
      <div className="container">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        <p>
          <a href="#!" className="text-white">Privacy Policy</a> | <a href="#!" className="text-white">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
