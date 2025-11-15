// client/src/components/common/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from './Navbar'; 

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuth, loading } = useAuth();

  if (loading) {
    return <div className="text-center p-8 text-lg">Initializing...</div>; 
  }
  
  if (!isAuth) {
    // Not authenticated: Redirect to login
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Wrong role: Redirect to their correct dashboard or a 403 page
    return <Navigate to="/error/403" replace />;
  }

  // Authorized: Render the children wrapped in the main layout
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-8 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
};

export default ProtectedRoute;