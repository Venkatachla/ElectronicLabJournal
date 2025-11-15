// client/src/components/role-specific/AdminEnrollmentForm.js
import React from 'react';

const AdminEnrollmentForm = () => {
  // Logic to handle POST to /api/admin/enrollfaculty
  return (
    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
      <h2 className="text-xl font-medium mb-3">Enroll Faculty in Course</h2>
      <p className="text-sm text-gray-600 mb-4">
        This form will handle linking a User ID (Faculty) to a Course ID.
      </p>
      <input className="border p-2 w-full mb-3" placeholder="Faculty Email/ID" />
      <input className="border p-2 w-full mb-3" placeholder="Course Code/ID" />
      <button className="bg-green-600 text-white p-2 rounded">Perform Enrollment</button>
    </div>
  );
};

export default AdminEnrollmentForm;