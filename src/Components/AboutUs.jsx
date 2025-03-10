import React from "react";

const AboutUs = () => {
    scrollTo(0,0);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>

      <p className="text-lg text-gray-700 text-center max-w-3xl">
        Welcome to <span className="font-bold">MedStore</span>, your trusted online medical store. 
        Our mission is to provide high-quality medicines and healthcare products at affordable prices, 
        ensuring customer satisfaction and well-being.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-md mt-8 max-w-4xl">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our goal is to make healthcare products accessible to everyone with the ease of online shopping. 
          We offer a wide range of products, including prescription medicines, personal care, 
          health devices, and supplements.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center w-64">
            <img
              src="https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team Member"
              className="rounded-full mx-auto mb-4 w-24 h-24 object-cover"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center w-64">
            <img
              src="https://images.pexels.com/photos/7841434/pexels-photo-7841434.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team Member"
              className="rounded-full mx-auto mb-4 w-24 h-24 object-cover"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center w-64">
            <img
              src="https://images.pexels.com/photos/7875844/pexels-photo-7875844.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team Member"
              className="rounded-full mx-auto mb-4 w-24 h-24 object-cover"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Marketing Manager</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
