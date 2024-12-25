'use client';

import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-r from-blue-800 to-black text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch with Us</h1>
        <p className="text-lg mb-8">Please fill out the form below, and we will get back to you as soon as possible.</p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white bg-opacity-20 p-8 rounded-lg shadow-xl mb-8">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="business">Business Collaboration</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-wrap justify-around mt-12 gap-8">
          <div className="w-full sm:w-72 p-6 bg-blue-900 bg-opacity-70 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Benefit 1</h3>
            <p className="text-white">Experience seamless customer support at all times ensuring your needs are met.</p>
          </div>

          <div className="w-full sm:w-72 p-6 bg-blue-900 bg-opacity-70 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Benefit 2</h3>
            <p className="text-white">Get fast and reliable services tailored to your unique business needs.</p>
          </div>

          <div className="w-full sm:w-72 p-6 bg-blue-900 bg-opacity-70 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Benefit 3</h3>
            <p className="text-white">Enjoy the benefits of innovative solutions that help you stay ahead in the market.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
