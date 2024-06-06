import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [profession,setProfession] = useState("");
    const [phone,setPhone] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = { name, password, email, phone, profession };
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/login');
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
    
     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
     <h2 className="text-4xl mb-4 text-teal-500">Signup</h2>
        <input className="text-md mb-2 border border-gray-400 px-4 py-2 rounded " type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
        <input className="text-md mb-2 border border-gray-400 px-4 py-2 rounded" type='email' placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input className="text-md mb-2 border border-gray-400 px-4 py-2 rounded" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <input className="text-md mb-2 border border-gray-400 px-4 py-2 rounded" type="text" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <div className='flex justify-center gap-4'>
        <h3 className='text-lg text-gray-500'>Profession</h3>
        <select className="text-md mb-2 border-red-400 px-4 py-2 rounded" value={profession} onChange={(e)=>setProfession(e.target.value)}>
            
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>  

        </select>
        </div>
        <br />
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded">Signup</button>
    
      </form>
    </div>
    
  )
}

export default Signup
