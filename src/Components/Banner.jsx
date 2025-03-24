import React from "react";
import { NavLink } from "react-router-dom";
const Banner=()=> {
    return (
      <div className="relative w-full h-screen md:h-[100vh] bg-no-repeat bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/7844012/pexels-photo-7844012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Your Trusted Online Medical Store
          </h1>
          <p className="mt-2 text-lg md:text-xl text-white">
            Get genuine medicines and health products delivered to your doorstep.
          </p>
          <NavLink
            to="/products"
            className="mt-5 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200"
          >
            Shop Now
          </NavLink>
        </div>
      </div>
    );
  }
  
  export default Banner;