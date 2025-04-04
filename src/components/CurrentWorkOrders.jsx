import React from 'react';

const CurrentWorkOrders = () => {
  // Mock data - in a real app, this would come from an API
  const workOrders = [
    {
      id: 1,
      customerName: "John Smith",
      serviceType: "Plumbing Repair",
      description: "Leaking kitchen sink and blocked drain",
      address: "123 Main St, Apt 4B, Ithaca, NY 14850",
      scheduledDate: "2024-03-15",
      scheduledTime: "10:00 AM",
      price: 150,
      status: "Scheduled",
      priority: "High",
      customerPhone: "(607) 555-0123",
      mediaUrls: ["https://example.com/photo1.jpg"],
      notes: "Customer prefers morning appointments"
    },
    {
      id: 2,
      customerName: "Sarah Johnson",
      serviceType: "Electrical Work",
      description: "Install new ceiling fan and light fixture",
      address: "456 Oak Ave, Ithaca, NY 14850",
      scheduledDate: "2024-03-16",
      scheduledTime: "2:00 PM",
      price: 200,
      status: "Confirmed",
      priority: "Medium",
      customerPhone: "(607) 555-0124",
      mediaUrls: [],
      notes: "Bring ladder and fan mounting kit"
    },
    {
      id: 3,
      customerName: "Mike Wilson",
      serviceType: "HVAC Maintenance",
      description: "Annual AC system check and filter replacement",
      address: "789 Pine St, Ithaca, NY 14850",
      scheduledDate: "2024-03-17",
      scheduledTime: "1:00 PM",
      price: 120,
      status: "Pending",
      priority: "Normal",
      customerPhone: "(607) 555-0125",
      mediaUrls: ["https://example.com/photo2.jpg", "https://example.com/photo3.jpg"],
      notes: "Previous maintenance done 1 year ago"
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'scheduled':
        return 'bg-green-100 text-green-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-orange-600';
      case 'normal':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Work Orders</h2>
      <div className="space-y-6">
        {workOrders.map((order) => (
          <div key={order.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{order.serviceType}</h3>
                <p className="text-gray-600 mt-1">Customer: {order.customerName}</p>
              </div>
              <div className="flex gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(order.priority)} bg-opacity-10`}>
                  {order.priority} Priority
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Scheduled Time</p>
                <p className="text-gray-800">{order.scheduledDate} at {order.scheduledTime}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Price</p>
                <p className="text-gray-800">${order.price}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Address</p>
                <p className="text-gray-800">{order.address}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Contact</p>
                <p className="text-gray-800">{order.customerPhone}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm font-medium text-gray-500 mb-2">Description</p>
              <p className="text-gray-800">{order.description}</p>
            </div>

            {order.notes && (
              <div className="border-t pt-4 mt-4">
                <p className="text-sm font-medium text-gray-500 mb-2">Notes</p>
                <p className="text-gray-800">{order.notes}</p>
              </div>
            )}

            {order.mediaUrls.length > 0 && (
              <div className="border-t pt-4 mt-4">
                <p className="text-sm font-medium text-gray-500 mb-2">Attached Media</p>
                <div className="flex gap-2">
                  {order.mediaUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Reference ${index + 1}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 mt-6">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded">
                Update Status
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentWorkOrders; 