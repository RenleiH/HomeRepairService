import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-800 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-blue-200 transition-colors">
          Home Repair Service
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/homeowner" className="text-white hover:text-blue-200 transition-colors">
                Homeowner
              </Link>
            </li>
            <li>
              <Link to="/service-provider" className="text-white hover:text-blue-200 transition-colors">
                Service Provider
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-white hover:text-blue-200 transition-colors">
                Feedback
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 