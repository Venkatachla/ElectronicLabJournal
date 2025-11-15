// client/src/components/forms/SubmissionForm.js
import React from 'react';

const SubmissionForm = ({ labId, submission }) => {
  // Logic to handle POST/PATCH to /api/student/submit/:labId
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-3">Submit Lab Work for Lab #{labId}</h3>
      <textarea 
        className="w-full h-40 p-2 border rounded" 
        placeholder="Enter your lab submission text here..."
        defaultValue={submission?.submissionText || ''}
      ></textarea>
      <button className="mt-3 bg-cyan-600 text-white p-2 rounded hover:bg-cyan-700">
        Submit/Update Work
      </button>
      {submission && <p className="text-sm mt-2 text-gray-500">Status: {submission.status}</p>}
    </div>
  );
};

export default SubmissionForm;