// client/src/pages/dashboards/FacultyDashboard.js
import React from 'react';
import Navbar from '../../components/common/Navbar';
import { useAuth } from '../../contexts/AuthContext';

const FacultyDashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Faculty Dashboard 🧑‍🏫
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome, **Faculty** (User ID: {user.id}). You have permissions for lab creation and review.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-500">
            <h2 className="text-xl font-medium mb-3">Lab Creation</h2>
            <p className="text-gray-700">Create new lab sessions for assigned courses. (POST to `/api/faculty/labsessions`)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
            <h2 className="text-xl font-medium mb-3">Review Submissions</h2>
            <p className="text-gray-700">Fetch and grade student submissions. (PATCH to `/api/faculty/review/:subId`)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;