// src/components/Contact.js
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => alert('Form submission successful'))
    .catch((error) => alert(error));
  };

  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.755041829832!2d-122.43138209999999!3d37.77397270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858095c3b193ff%3A0x8e21a5eacb80c01e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1596082395689!5m2!1sen!2sus"
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">1234 Street Name, City, State</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:example@example.com" className="text-indigo-400 leading-relaxed">example@example.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 md:w-1/2 bg-gray-800 bg-opacity-40 rounded-lg overflow-hidden p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-white text-lg mb-1 font-medium title-font">Contact Me</h2>
          <p className="leading-relaxed mb-5">Fill out the form below to get in touch!</p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
