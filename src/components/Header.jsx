import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-200">Home Repair Service</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/homeowner" className="hover:text-gray-200">Homeowner</Link></li>
            <li><Link to="/service-provider" className="hover:text-gray-200">Service Provider</Link></li>
            <li><Link to="/feedback" className="hover:text-gray-200">Feedback</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 