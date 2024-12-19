import React, { createContext, useContext, useState, useEffect } from 'react';

// Créez un contexte pour l'authentification
const AuthContext = createContext();

// Provider pour le contexte
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Vérifiez si un utilisateur est stocké dans localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Mettez à jour l'état avec l'utilisateur stocké
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Stockez l'utilisateur dans localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Supprimez l'utilisateur de localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useAuth = () => {
  return useContext(AuthContext);
};
