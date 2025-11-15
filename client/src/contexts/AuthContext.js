// client/src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import api from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores decoded JWT payload: { id: '...', role: 'Admin' }
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load token on initial render
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        
        // Basic expiration check
        if (decoded.exp * 1000 < Date.now()) {
          console.log("Token expired. Logging out.");
          logout();
        } else {
          setUser(decoded);
          // Set the Authorization header for all future requests
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
      } catch (e) {
        console.error("Invalid token:", e);
        logout();
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // 1. Send credentials to API
      const response = await api.post('/auth/login', { email, password });
      const token = response.data.token;

      // 2. Store and decode token
      localStorage.setItem('token', token);
      const decoded = jwtDecode(token);
      setUser(decoded);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      // 3. Role-Based Redirect
      const role = decoded.role.toLowerCase();
      navigate(`/${role}`);

    } catch (error) {
      console.error('Login failed:', error);
      // Clean up storage if token somehow became invalid during login attempt
      logout(); 
      throw error; 
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
    navigate('/login');
  };

  const value = {
    user,
    isAuth: !!user,
    loading,
    login,
    logout,
    isAdmin: user?.role === 'Admin',
    isFaculty: user?.role === 'Faculty',
    isStudent: user?.role === 'Student',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);