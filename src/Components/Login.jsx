import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const getInputs = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const ChekSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (storedUser.email !== credentials.email || storedUser.password !== credentials.password) {
      setError("Invalid email or password!");
      return;
    }

    setError(""); 
    localStorage.setItem("isLoggedIn", true);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        <p className="text-sm text-center text-gray-500 mb-4">Sign in to your account</p>


        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={ChekSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" onChange={getInputs} />
          <input type="password" name="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" onChange={getInputs} />
          <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition">Login</button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-500">
          Don't have an account? <a href="/signup" className="text-purple-600 font-semibold">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
