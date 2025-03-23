import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store login data in localStorage
    localStorage.setItem('user', JSON.stringify({ email }));
    // Redirect to dashboard or home page after login
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/signin';
  };

  const handleMicrosoftLogin = () => {
    window.location.href = 'https://login.microsoftonline.com/';
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-gray-300 p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
        </form>
        <Link to={'/register'} className="block text-blue-500 mt-4 text-center">Don't have an account? Register</Link>
        <button onClick={handleGoogleLogin} className="bg-red-500 text-white p-2 rounded mt-5 w-full ">Login with Google</button>
        <button onClick={handleMicrosoftLogin} className="bg-blue-700 text-white p-2 rounded mt-2 w-full">Login with Microsoft</button>
      </div>
    </div>
  );
};

export default Login;
