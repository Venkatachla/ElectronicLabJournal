// client/src/App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Router IMPORT REMOVED
import { useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import FacultyDashboard from './pages/dashboards/FacultyDashboard';
import StudentDashboard from './pages/dashboards/StudentDashboard';

// --- Protected Route Component (Logic remains the same) ---
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuth, loading } = useAuth();

  if (loading) {
    return <div className="text-center p-8 text-lg">Loading Application...</div>; 
  }
  
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  
  // Note: Assuming you have created the ErrorPage.js file for /error/403
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/error/403" replace />;
  }

  return children;
};

// --- Helper for Initial Redirect (Logic remains the same) ---
const HomeRedirect = () => {
    const { user, isAuth, loading } = useAuth();
    if (loading) return <div className="text-center p-8 text-lg">Initializing...</div>;
    if (!isAuth) return <Navigate to="/login" replace />;
    return <Navigate to={`/${user.role.toLowerCase()}`} replace />;
}


const App = () => {
  return (
    // <Router> tag removed here 
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Role-Based Protected Routes */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/faculty" 
          element={
            <ProtectedRoute allowedRoles={['Faculty']}>
              <FacultyDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/student" 
          element={
            <ProtectedRoute allowedRoles={['Student']}>
              <StudentDashboard />
            </ProtectedRoute>
          } 
        />

        {/* Default route */}
        <Route path="/" element={<HomeRedirect />} />
        
        {/* Fallback */}
        {/* Note: Ensure the ErrorPage component is available */}
        <Route path="/error/:code" element={<div className="text-center p-10 text-3xl font-bold text-red-600">Error Page</div>} /> 
        <Route path="*" element={<div className="text-center p-10 text-3xl font-bold text-red-600">404 Page Not Found</div>} />
      </Routes>
    // </Router> tag removed here
  );
};

export default App;