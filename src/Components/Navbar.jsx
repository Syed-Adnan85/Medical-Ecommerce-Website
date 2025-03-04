import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    updateCartCount();

    const CartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", CartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", CartUpdate);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-2">
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          MedStore
        </NavLink>

        <div className="hidden md:flex space-x-6 text-lg font-semibold">
          <NavLink to="/" className="text-gray-700 hover:text-blue-600">Home</NavLink>
          <NavLink to="/products" className="text-gray-700 hover:text-blue-600">Products</NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-blue-600">About Us</NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-blue-600">Contact</NavLink>
        </div>

        <div className="flex items-center space-x-6">
          <NavLink to="/cart" className="relative text-gray-700 hover:text-blue-600">
            <i className="ri-shopping-cart-fill text-2xl"></i>
            {isLoggedIn && cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
          </NavLink>

          {isLoggedIn ? (
            <NavLink to="/profile" className="text-gray-700 hover:text-blue-600">
              <i className="ri-user-fill text-3xl"></i>
            </NavLink>
          ) : (
            <NavLink to="/login" className="text-gray-700 hover:text-blue-600">
              <i className="ri-login-box-fill text-3xl"></i>
            </NavLink>
          )}

          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-fill text-3xl"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="sidebar-overlay"
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={()=> setIsMenuOpen(false)}
        >
          <div
            className={`fixed top-0 right-0 h-full bg-white shadow-md transition-transform transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } w-64 z-50`}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="ri-close-fill text-3xl"></i>
            </button>
            <div className="flex flex-col  items-center text-black font-semibold text-xl space-y-6 mt-42">
              <NavLink to="/" className=" hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/products" className=" hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Products</NavLink>
              <NavLink to="/about" className=" hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About us</NavLink>
              <NavLink to="/contact" className=" hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
