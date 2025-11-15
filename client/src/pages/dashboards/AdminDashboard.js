// client/src/pages/dashboards/AdminDashboard.js
import React from 'react';
import Navbar from '../../components/common/Navbar';
import { useAuth } from '../../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Admin Portal ⚙️
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome, **Admin** (User ID: {user.id}). This area is protected by the `isAdmin` middleware.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
            <h2 className="text-xl font-medium mb-3">Course Management</h2>
            <p className="text-gray-700">Add, edit, and delete courses. (e.g., POST to `/api/admin/courses`)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
            <h2 className="text-xl font-medium mb-3">User Enrollment</h2>
            <p className="text-gray-700">Enroll Faculty/Students into courses and manage user roles. (e.g., POST to `/api/admin/enrollfaculty`)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;