import React from "react";

const AboutUs = () => {
    scrollTo(0, 0);
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
           
            <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
                <div className="text-center md:text-left md:w-1/2 ">
                    <h1 className="text-5xl font-bold text-blue-700 mb-6">About Us</h1>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        We are a passionate team dedicated to providing high-quality healthcare products and services. 
                        Our mission is to make healthcare accessible, affordable, and convenient for everyone.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                        Learn More
                    </button>
                </div>
                <div className="mt-8 md:mt-0 md:w-1/2">
                    <img
                        src="https://t4.ftcdn.net/jpg/06/80/57/03/240_F_680570399_EKoKoK0rndKmijRE0n3Jmq3VbQ6hElK7.jpg"
                        alt="About Us Illustration"
                        className="w-full max-w-md mx-auto md:mx-0"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="px-8 py-16 max-w-6xl mx-auto">
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At <span className="font-bold">MedStore</span>, we are committed to revolutionizing the healthcare industry. 
                        With a focus on quality, affordability, and innovation, we aim to be your trusted partner in health and wellness.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to make healthcare products accessible to everyone, regardless of their location or financial situation. 
                        We strive to provide a seamless online shopping experience with a wide range of products and exceptional customer service.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6">Why Choose Us</h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                        <li>High-quality products sourced from trusted manufacturers.</li>
                        <li>Affordable pricing to make healthcare accessible to everyone.</li>
                        <li>Fast and reliable delivery services.</li>
                        <li>Exceptional customer support to assist you at every step.</li>
                        <li>Commitment to innovation and continuous improvement.</li>
                    </ul>
                </section>

                {/* Team Section */}
                <section className="mt-16">
                    <h2 className="text-4xl font-bold text-blue-600 text-center mb-10">Meet Our Team</h2>
                    <div className="flex flex-wrap justify-center gap-10">
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center w-72">
                            <img
                                src="https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Team Member"
                                className="rounded-full mx-auto mb-6 w-28 h-28 object-cover shadow-md"
                            />
                            <h3 className="text-2xl font-semibold">John Doe</h3>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center w-72">
                            <img
                                src="https://images.pexels.com/photos/7841434/pexels-photo-7841434.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Team Member"
                                className="rounded-full mx-auto mb-6 w-28 h-28 object-cover shadow-md"
                            />
                            <h3 className="text-2xl font-semibold">Jane Smith</h3>
                            <p className="text-gray-600">Head of Operations</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center w-72">
                            <img
                                src="https://images.pexels.com/photos/7875844/pexels-photo-7875844.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Team Member"
                                className="rounded-full mx-auto mb-6 w-28 h-28 object-cover shadow-md"
                            />
                            <h3 className="text-2xl font-semibold">Michael Brown</h3>
                            <p className="text-gray-600">Marketing Manager</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center w-72">
                            <img
                                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Team Member"
                                className="rounded-full mx-auto mb-6 w-28 h-28 object-cover shadow-md"
                            />
                            <h3 className="text-2xl font-semibold">Emily Davis</h3>
                            <p className="text-gray-600">Customer Support Lead</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
