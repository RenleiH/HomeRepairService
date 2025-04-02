import React from 'react';

const RepairmanList = ({ onBookRepairman }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Available Service</h3>
      <ul className="space-y-4">
        <li className="flex justify-between items-center p-4 bg-gray-50 rounded">
          <span>John Doe - Rating: 4.5/5, Price: $100</span>
          <button
            onClick={() => onBookRepairman('John Doe', 100)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Book
          </button>
        </li>
        <li className="flex justify-between items-center p-4 bg-gray-50 rounded">
          <span>Jane Smith - Rating: 4/5, Price: $120</span>
          <button
            onClick={() => onBookRepairman('Jane Smith', 120)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Book
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RepairmanList; 