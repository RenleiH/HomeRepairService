import React from 'react';

const AvailableJobs = ({ onAcceptJob, onRejectJob }) => {
  const jobs = [
    {
      id: 1,
      type: 'Electrical Repair',
      address: '123 Main St',
      price: 100,
    },
    {
      id: 2,
      type: 'Plumbing Repair',
      address: '456 Elm St',
      price: 120,
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Available Jobs</h3>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li
            key={job.id}
            id={`job-${job.id}`}
            className="p-4 bg-gray-50 rounded"
          >
            <div className="flex justify-between items-center">
              <span>{job.type} at {job.address} - Estimated Price: ${job.price}</span>
              <div className="space-x-2">
                <button
                  onClick={() => onAcceptJob(job.id, job.price)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Accept
                </button>
                <button
                  onClick={() => onRejectJob(job.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableJobs; 