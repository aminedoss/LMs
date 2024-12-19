import React from 'react';
import ReactDOM from 'react-dom/client';
//import { UserProvider } from './component/Dashboards/UserContext'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import { AuthProvider } from './component/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
  
);


reportWebVitals();
