import React, { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom";


const SignUp = () => {
  scrollTo(0, 0);
  const [user, setUser] = useState({ name: "", email: "", password: "", confirm: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const saveDetails = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const ChekSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirm) {
      setError("Passwords do not match");
      return;
    }
    
    localStorage.setItem("user", JSON.stringify(user));
    setError(""); 
    navigate("/login");
  };

  return (
    <div className='bg-gradient-to-r from-green-300 to-gray-500 flex justify-center items-center min-h-screen'>
      <div className="absolute top-4 left-4">
        <NavLink to="/" className="text-white font-semibold">
          <i className="ri-arrow-left-line text-2xl"></i>
        </NavLink>
      </div>
      <div className='bg-white p-10 rounded-lg shadow-lg w-96'>
        <h2 className='text-3xl font-bold text-center text-gray-500'>Sign Up</h2>
        <p className='text-sm text-center text-gray-500'>Create an account to continue</p>
      
      {error && <p className='text-red-500 text-sm mb-2 text-center'>{error}</p>}
      
      <form onSubmit={ChekSubmit} className='space-y-4 w-full flex flex-col' >
        <input type="text" name='name' placeholder='Full Name' required className='border rounded-lg p-3 focus:ring-2 focus:ring-green-300 outline-none text-black' onChange={saveDetails} />
        <input type="email" name='email' placeholder='Email' required  className='border rounded-lg p-3 focus:ring-2 focus:ring-green-300 outline-none text-black' onChange={saveDetails}/>
        <input type="password" name='password' placeholder='Create Password' required  className='border rounded-lg p-3 focus:ring-2 focus:ring-green-300 outline-none text-black' onChange={saveDetails}/>
        <input type="password" name='confirm' placeholder='Confirm Password' required  className='border rounded-lg p-3 focus:ring-2 focus:ring-green-300 outline-none text-black' onChange={saveDetails}/>
        <button type='submit' className='bg-green-400 cursor-pointer text-white w-full rounded-xl m-auto p-3 hover:bg-green-500 transition'>Sign Up</button>
      </form>
      <p className='mt-5'>
        already have an account? <a href='/login' className='text-green-400  font-semibold'>Login</a>
      </p>
      </div>
    </div>
  )
}

export default SignUp;