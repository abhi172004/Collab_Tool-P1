import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/collab.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-800  p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold flex">
      <Link to="/"><img src={logo} className="h-9 w-auto mr-2" /></Link>
      <h1>CollabTool</h1> 
      </div>
      <div className="space-x-4">
        <Link to="/dashboard" className="text-white hover:text-gray-400">Dashboard</Link>
        <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
        <Link to="/register" className="text-white hover:text-gray-400">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
