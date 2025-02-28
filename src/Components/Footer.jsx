import React from 'react';

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
  <li><a href="/" className='hover:text-blue-400'> Home</a> </li>
  <li><a href="/products" className='hover:text-blue-400'> Products</a> </li>
  <li><a href="/about" className='hover:text-blue-400'> About Us</a> </li>
  <li><a href="/contact" className='hover:text-blue-400'> Contact Us</a> </li>
</ul>
</div>
<div>
          <h3 className="text-white text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="/faqs" className="hover:text-blue-400">FAQs</a></li>
            <li><a href="/returns" className="hover:text-blue-400">Returns & Exchanges</a></li>
            <li><a href="/shipping" className="hover:text-blue-400">Shipping Information</a></li>
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
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
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">facebook</a>
            <a href="#" className="hover:text-blue-400">twitter</a>
            <a href="#" className="hover:text-blue-400">instagram</a>
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