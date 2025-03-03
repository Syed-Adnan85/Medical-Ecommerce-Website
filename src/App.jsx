import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";   
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Products from "./Components/Products";
import ProductInfo from "./Components/ProductInfo"; 
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";



 const App=()=> {

  
  const [selectedProduct, setSelectedProduct] =useState(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    return savedProduct ? JSON.parse(savedProduct) : null;
  });

  const SaveThis = (product) => {
    setSelectedProduct(product);
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home sendToInfo={SaveThis} /> } />
        <Route path="/products" element={<Products sendData={SaveThis} />} />
        <Route path="/productinfo" element={<ProductInfo  getData={selectedProduct} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
<Footer />
    </Router>
  );
}

export default App;