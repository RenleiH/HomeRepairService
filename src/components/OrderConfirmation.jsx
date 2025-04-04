import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = ({ details }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mt-6">
      <div className="text-center mb-6">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Order Confirmed!</h2>
        <p className="mt-2 text-gray-600">Your repair service has been successfully booked.</p>
      </div>

      <div className="space-y-6">
        {/* Service Details */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Service Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Service Type</p>
              <p className="font-medium">{details.serviceType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Repairman</p>
              <p className="font-medium">{details.repairman.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="font-medium">${details.price}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-medium text-green-600">Confirmed</p>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Location Details</h3>
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">{details.address}</p>
          </div>
        </div>

        {/* Problem Description */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Problem Description</h3>
          <p className="text-gray-700 whitespace-pre-line">{details.description}</p>
        </div>

        {/* Media Files */}
        {details.mediaFiles && details.mediaFiles.length > 0 && (
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Uploaded Media</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {details.mediaFiles.map((url, index) => (
                <div key={index} className="relative">
                  {url.includes('video') ? (
                    <video
                      src={url}
                      className="w-full h-32 object-cover rounded"
                      controls
                    />
                  ) : (
                    <img
                      src={url}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-32 object-cover rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Your repairman will contact you within 24 hours to schedule the service
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              You will receive a confirmation email with all the details
            </li>
            <li className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              You can track the status of your service in your dashboard
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/homeowner')}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation; 