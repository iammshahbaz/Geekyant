import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        
        navigate('/login');
        setLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.clear('userData');
        navigate('/');
        setLoggedIn(false);
    };

   

    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="mx-auto flex justify-between items-center">
                <div>Geekyants</div>
                <div className="container mx-auto flex align-center justify-end gap-4">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/info">CompanyInfo</Link>
                    <Link to="/">Signup</Link>
                    {location.pathname === '/dashboard' ? (
                       <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
                       Logout
                   </button>
                           
                        
                    ) : (
                         <button onClick={handleLogin} className="bg-green-500 px-4 py-2 rounded">Login</button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
