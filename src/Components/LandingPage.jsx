import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        const user = localStorage.getItem('user');
        if (user) {
            navigate('/dashboard');
        } else {
            navigate('/register');
        }
    };

    return (
        <div className="container mx-auto text-center mt-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-10 rounded-lg shadow-lg text-white">
                <h1 className="text-5xl font-extrabold mb-6">Made for people. </h1> 
                <h1 className="text-5xl font-extrabold mb-6">Built for productivity.</h1>
                <p className="text-xl mb-6">
                   CollabTool is free to try as long as you'd like
                </p>
                <hr className="border-t-2 border-gray-300 my-6" />
                <button onClick={handleGetStarted} className='bg-gray-800 text-white rounded-full px-6 py-3 hover:bg-gray-700 transition duration-300 '>Get Started➡️</button>
            </div>
        
            <div className="mt-12 space-x-4 flex justify-center">
                <button className='bg-gray-800 text-white rounded-full px-6 py-3 hover:bg-gray-700 transition duration-300'>All teams</button>
                <button className='bg-gray-800 text-white rounded-full px-6 py-3 hover:bg-gray-700 transition duration-300'>Marketing</button>
                <button className='bg-gray-800 text-white rounded-full px-6 py-3 hover:bg-gray-700 transition duration-300'>Engineering</button>
                <button className='bg-gray-800 text-white rounded-full px-6 py-3 hover:bg-gray-700 transition duration-300'>Design</button>
                <button className='bg-gray-800 text-white rounded-full px-6 py-3 hover:bg-gray-700 transition duration-300'>Operations</button>
                <button className='bg-gray-800 text-white rounded-full px-6 py-3 hover:bg-gray-700 transition duration-300'>IT</button>
            </div>

            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="container mx-auto text-center">
                    <p className="text-lg mb-4">© 2023 CollabTool. All rights reserved.</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:text-gray-400 transition duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400 transition duration-300">Terms of Service</a>
                        <a href="#" className="hover:text-gray-400 transition duration-300">Contact Us</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
