import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email === email && userData.password === password) {
      navigate('/dashboard');
    } else {
      alert('Invalid Credentials');
    }
  };

  const backgroundStyle = {
    background: 'linear-gradient(to right, white, teal, white)',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    
  };

  return (
    <div style={backgroundStyle}>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80 text-center">
        <h2 className="text-3xl mb-4 text-green-500">Login</h2>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2 p-2 w-full border rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 p-2 w-full border rounded" required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
