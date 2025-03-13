import React, { useState } from "react";

const Contact = () => {
  scrollTo(0, 0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const getValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const CheckSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-fit flex flex-col lg:flex-row items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full mb-14 lg:mb-0 lg:mr-8">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Send Us a Message</h2>
        {success && <p className="text-green-600 text-center mb-4">Thanks for Contacting Us. We Will Reply You Shortly.</p>}
        <form onSubmit={CheckSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={getValue}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={getValue}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={getValue}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="space-y-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Quick Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="ri-phone-line text-blue-500 mr-2 text-xl"></i>
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center">
              <i className="ri-mail-line text-green-500 mr-2 text-xl"></i>
              <span>support@company.com</span>
            </li>
            <li className="flex items-center">
              <i className="ri-map-pin-line text-purple-500 mr-2 text-xl"></i>
              <span>123 Business Street, Suite 100</span>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Business Hours</h3>
          <ul className="space-y-2">
            <li className="flex justify-between gap-5">
              <span>Monday - Friday</span>
              <span>9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Connect With Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/" className="text-blue-500"><i className="ri-facebook-fill"></i></a>
            <a href="https://x.com/?lang=en" className="text-blue-400"><i class="ri-twitter-x-line"></i></a>
            <a href="https://www.instagram.com/" className="text-pink-500"><i className="ri-instagram-fill"></i></a>
            <a href="https://www.linkedin.com/in/syed-adnan-4493682b1/" className="text-blue-700"><i className="ri-linkedin-fill"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
