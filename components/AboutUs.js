// src/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100/20 min-h-screen flex flex-col items-center py-10 bg-gradient-to-b from-white-300 to-white-500" id='about'>
      <header className="text-center mb-10">
        <h1 className="text-6xl font-bold   bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">About Us</h1>
        <p className="text-lg text-gray-600 mt-2">Our journey, mission, and values.</p>
      </header>

      <section className="max-w-4xl mx-auto bg-white-500 shadow-lg rounded-lg p-8 ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-6">
          We are a passionate team dedicated to delivering exceptional services and solutions. Our journey started with a shared vision to make a positive impact through innovation and collaboration.
        </p>
        
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is to provide top-notch services that exceed expectations and drive growth. We aim to be at the forefront of our industry, setting standards for quality and excellence.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all our actions.</li>
          <li><strong>Innovation:</strong> We embrace creativity and innovation to solve complex challenges.</li>
          <li><strong>Collaboration:</strong> We believe in the power of teamwork and collaboration to achieve our goals.</li>
          <li><strong>Excellence:</strong> We are committed to delivering excellence in everything we do.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-700">
          We would love to hear from you! Reach out to us at <a href="mailto:info@affotaxbookkeeping.com" className="text-blue-500 hover:underline">info@affotaxbookkeeping.com</a> for any inquiries or feedback.
        </p>
      </section>

      
    </div>
  );
}

export default AboutUs;
