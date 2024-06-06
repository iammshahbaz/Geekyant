import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

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
        <nav className=" bg-gray-800 p-4 text-white">
            <div className=" navbar-link mx-auto flex justify-between items-center">
                <div className='text-green-400 text-2xl'>Geekyants</div>
                <div className=" navbar-link container mx-auto flex align-center justify-end gap-4">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/info">CompanyInfo</Link>
                    <Link to="/">Signup</Link>
                    {location.pathname === '/dashboard' ? (
                       <button onClick={handleLogout} className="logout-btn bg-red-500 px-4 py-2 rounded">
                       Logout
                   </button>
                           
                        
                    ) : (
                         <button onClick={handleLogin} className="login-btn bg-green-500 px-4 py-2 rounded">Login</button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
