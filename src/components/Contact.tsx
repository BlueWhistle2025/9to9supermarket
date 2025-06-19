
'use client';
import React from 'react';
import { useState } from 'react';


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Handle actual submission logic (e.g., API call) here
        alert('Message sent! We’ll get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      };
    
  return (
    <div>
        <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-100 to-indigo-100 py-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-xl mx-auto">
          Have a question, feedback, or just want to chat? We’d love to hear from you.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="mb-4">Feel free to reach out through any of the methods below.</p>
          <ul className="space-y-4">
            <li>
              <strong>Email:</strong> support@yourstore.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li>
              <strong>Address:</strong> 123 E-Shop Street, Commerce City, CA 90210
            </li>
          </ul>
        </div>
      </section>

      {/* Google Map Embed (Optional) */}
      <section className="px-6 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-md max-w-6xl mx-auto">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=10bmd4lUOrIQzmEjEDT4sF-TMoV5MSlY&ehbc=2E312F&noprof=1"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            className="w-full h-[400px]"
          />
        </div>
      </section>
    </div>
      
    </div>
  )
}

export default Contact;
