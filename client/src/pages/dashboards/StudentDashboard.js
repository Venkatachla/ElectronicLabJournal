// client/src/pages/dashboards/StudentDashboard.js
import React from 'react';
import Navbar from '../../components/common/Navbar';
import { useAuth } from '../../contexts/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Student Dashboard 🔬
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome, **Student** (User ID: {user.id}). You can view labs and submit your work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-pink-500">
            <h2 className="text-xl font-medium mb-3">My Courses & Labs</h2>
            <p className="text-gray-700">Fetch enrolled courses and available lab sessions. (GET to `/api/student/courses`)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-l-4 border-cyan-500">
            <h2 className="text-xl font-medium mb-3">Submit Work</h2>
            <p className="text-gray-700">Upload or type in lab submissions. (POST/PATCH to `/api/student/submit/:labId`)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;