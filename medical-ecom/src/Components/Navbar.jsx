import React from "react";

const Navbar=()=> {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
     
        <a href="/" className="text-2xl font-bold text-blue-600">
          MedStore
        </a>

       
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
          <a href="/cart" className="relative text-gray-700 hover:text-blue-600">
          <i class="ri-shopping-cart-fill text-2xl"></i>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                0
            </span>
          </a>
          <a href="/profile" className="text-gray-700 hover:text-blue-600">
          <i class="ri-user-fill text-3xl"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
 export default Navbar;