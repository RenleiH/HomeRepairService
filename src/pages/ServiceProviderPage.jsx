import React, { useState } from 'react';
import CurrentWorkOrders from '../components/CurrentWorkOrders';
import AvailableJobs from '../components/AvailableJobs';
import IncomeTracking from '../components/IncomeTracking';
import OrderConfirmation from '../components/OrderConfirmation';

const ServiceProviderPage = () => {
  const [activeTab, setActiveTab] = useState('current-work-orders');
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleShowOrderConfirmation = (order) => {
    setSelectedOrder(order);
    setShowOrderConfirmation(true);
  };

  const handleHideOrderConfirmation = () => {
    setShowOrderConfirmation(false);
    setSelectedOrder(null);
  };

  const handleAcceptJob = (jobId, price) => {
    setTotalIncome(prev => prev + price);
    // Remove the job from available jobs
    const job = document.querySelector(`#available-jobs li:nth-child(${jobId})`);
    if (job) job.style.display = 'none';
    setActiveTab('current-work-orders');
  };

  const handleRejectJob = (jobId) => {
    const job = document.querySelector(`#available-jobs li:nth-child(${jobId})`);
    if (job) job.style.display = 'none';
  };

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto p-8">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Service Provider Dashboard</h2>
          
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded ${
                activeTab === 'current-work-orders'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => handleTabChange('current-work-orders')}
            >
              Current Work Orders
            </button>
            <button
              className={`px-4 py-2 rounded ${
                activeTab === 'available-jobs'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => handleTabChange('available-jobs')}
            >
              Available Jobs
            </button>
            <button
              className={`px-4 py-2 rounded ${
                activeTab === 'income-tracking'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => handleTabChange('income-tracking')}
            >
              Income Tracking
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'current-work-orders' && (
              <CurrentWorkOrders onOrderClick={handleShowOrderConfirmation} />
            )}
            {activeTab === 'available-jobs' && (
              <AvailableJobs
                onAcceptJob={handleAcceptJob}
                onRejectJob={handleRejectJob}
              />
            )}
            {activeTab === 'income-tracking' && (
              <IncomeTracking totalIncome={totalIncome} />
            )}
          </div>
        </section>

        {showOrderConfirmation && selectedOrder && (
          <OrderConfirmation
            order={selectedOrder}
            onClose={handleHideOrderConfirmation}
          />
        )}
      </main>
    </div>
  );
};

export default ServiceProviderPage; 