import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";   
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

 const App=()=> {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
<Footer />
    </Router>
  );
}

export default App;