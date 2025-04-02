import React from 'react';

const IncomeTracking = ({ totalIncome }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Income Tracking</h3>
      <div className="bg-gray-50 p-4 rounded">
        <p className="text-lg mb-4">Total Income: <span className="font-bold">${totalIncome}</span></p>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          View Payment History
        </a>
      </div>
    </div>
  );
};

export default IncomeTracking; 