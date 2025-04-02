import React from 'react';

const CurrentWorkOrders = ({ onOrderClick }) => {
  const orders = [
    {
      id: 1,
      type: 'Electrical Repair',
      address: '123 Main St',
    },
    {
      id: 2,
      type: 'Plumbing Repair',
      address: '456 Main St',
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Current Work Orders</h3>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li
            key={order.id}
            onClick={() => onOrderClick(order)}
            className="p-4 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
          >
            <span>Order ID: {order.id} - {order.type} at {order.address}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentWorkOrders; 