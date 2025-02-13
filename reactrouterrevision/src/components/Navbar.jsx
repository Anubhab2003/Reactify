import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800">Brand</a>
        <div className="flex space-x-4">
          <a  className="text-gray-600 hover:text-gray-800"><Link to="/">Home</Link></a>
          <a href="#" className="text-gray-600 hover:text-gray-800"><Link to="/about">About</Link></a>
          <a href="#" className="text-gray-600 hover:text-gray-800"><Link to="/contact">Contact</Link></a>
          {/* <a href="#" className="text-gray-600 hover:text-gray-800"><Link to="/">Home</Link></a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
