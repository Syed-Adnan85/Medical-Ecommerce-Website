import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
<footer className="bg-gray-800 text-gray-300 py-10"> 
<div className='grid grid-cols-1 px-6 mx-auto md:grid-cols-4 gap-8'>
  <div>
     <h1 className="text-white text-2xl font-bold">MedStore</h1>
     <p className=" mt-2">
            Your trusted online medical store. Get quality healthcare products delivered to your doorstep.
          </p>
  </div>
<div>
<h3 className='text-white text-lg font-semibold mb-4'>Quick Links</h3>
<ul className='space-y-2'>
  <li><NavLink to="/" className='hover:text-blue-400'> Home</NavLink> </li>
  <li><NavLink to="/products" className='hover:text-blue-400'> Products</NavLink> </li>
  <li><NavLink to="/contact" className='hover:text-blue-400'> Contact Us</NavLink> </li>
</ul>
</div>
<div>
          <h3 className="text-white text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2">
            <li><NavLink to="/faqs" className="hover:text-blue-400">FAQs</NavLink></li>
            <li><NavLink to="/returns" className="hover:text-blue-400">Returns & Exchanges</NavLink></li>
            <li><NavLink to="/shipping" className="hover:text-blue-400">Shipping Information</NavLink></li>
            <li><NavLink to="/privacy" className="hover:text-blue-400">Privacy Policy</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Stay Connected</h3>
          <form className="flex">
            <input type="email" placeholder="Your email" required className="p-2 rounded-l bg-gray-800   text-white w-full" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-10 mt-8 text-2xl">
            <a href="https://www.facebook.com/"  className="hover:text-blue-400"><i class="ri-facebook-circle-fill"></i></a>
            <a href="https://x.com/?lang=en" className="hover:text-blue-400"><i class="ri-twitter-x-fill"></i></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" className="hover:text-blue-400"><i class="ri-instagram-fill"></i></a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} MedStore. All rights reserved.
      </div>
</div>
  </footer>

  )
}

export default Footer