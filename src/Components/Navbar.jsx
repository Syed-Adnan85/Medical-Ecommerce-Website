import React,{useState,useEffect, use} from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=> {
const [isLoggedIn, setIsLoggedIn] = useState(false);  


useEffect(() => {
  const loggedIn = localStorage.getItem("isLoggedIn")==="true";
  setIsLoggedIn(loggedIn);  
}
, []); 


  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
     
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          MedStore
        </NavLink>

       
        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-1/3">
          <input
            type="text"
            placeholder="Search for medicines, health products..."
            className="px-3 py-2 w-full focus:outline-none"
          />
          <button className="bg-blue-500 px-4 text-white">
          <i class="ri-search-line"></i>
          </button>
        </div>

       
        <div className="flex items-center  space-x-6">
          <NavLink to="/cart" className="relative text-gray-700 hover:text-blue-600">
          <i class="ri-shopping-cart-fill text-2xl"></i>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                0
            </span>
          </NavLink>
          {isLoggedIn ? (
            <NavLink to="/profile" className="text-gray-700 hover:text-blue-600">
            <i class="ri-user-fill text-3xl"></i>
            </NavLink>
          ) : (
            <NavLink to="/login" className="text-gray-700 hover:text-blue-600">
        <i class="ri-login-box-fill text-3xl"></i>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
 export default Navbar;