// src/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100/20 min-h-screen flex flex-col items-center bg-gradient-to-b from-white-300 to-white-500 pt-24" id='about'>
      <header className="text-center mb-10">
        <h1 className="text-6xl font-bold   bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">About Us</h1>
        <p className="text-lg text-gray-600 mt-2">Our journey, mission, and values.</p>
      </header>

      <section className="max-w-4xl mx-auto bg-white-500 shadow-lg rounded-lg p-8 ">

     


        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-6">
          We are a passionate team dedicated to delivering exceptional services and solutions. Our journey started with a shared vision to make a positive impact through innovation and collaboration.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-700 mb-6">
        At Affotax Bookkeeping, we understand that managing your finances can be overwhelming. That's why we offer comprehensive bookkeeping services tailored to meet the unique needs of your business. Our experienced team ensures accurate record-keeping, from daily transactions to monthly reconciliations, allowing you to focus on what you do best—growing your business.
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


        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Services Expansion</h2>
        <p className="text-gray-700 mb-6">
        We are committed to expanding our services to include comprehensive accounting and tax filing solutions in the UK. Our firm has built a strong reputation for providing reliable and efficient bookkeeping services to clients around the world. By offering accounting and tax filing, we aim to cater to the growing demand from UK businesses seeking end-to-end financial management solutions.<br/> <br/> This expansion will allow us to serve a broader market, create local job opportunities, and contribute to the UK's business ecosystem. With our established expertise and a well-structured plan, we are confident in our ability to successfully grow our service portfolio within the UK.
        </p>



        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-700">
          We would love to hear from you! Reach out to us at <a href="mailto:info@affotaxbookkeeping.com" className="text-blue-500 hover:underline">info@affotaxbookkeeping.com</a> for any inquiries or feedback.
        </p>
      </section>

      
    </div>
  );
}

export default AboutUs;
