
'use client';
import Image from 'next/image';
import React from 'react';
// import { useState } from 'react';


const Contact = () => {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    //   });
    
      // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      //   setFormData({ ...formData, [e.target.name]: e.target.value });
      // };
    
      // const handleSubmit = (e: React.FormEvent) => {
      //   e.preventDefault();
      //   console.log(formData);
      //   // Handle actual submission logic (e.g., API call) here
      //   alert('Message sent! We’ll get back to you shortly.');
      //   setFormData({ name: '', email: '', message: '' });
      // };
    
  return (
    <div>
       <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative bg-red-100 py-20 px-6 md:px-20 text-center">
         <Image
                  src="/home-hero.jpg"
                  alt="Welcome to 9to9 Supermarket"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-20"
                />
        <h1 className="text-4xl md:text-5xl font-bold text-red-900">Get in Touch with 9to9 Supermarket</h1>
        <p className="text-lg text-red-800 mt-4 max-w-3xl mx-auto">
          We are always happy to hear from you! Whether it is a query, feedback, or business inquiry, feel free to reach out.
        </p>
      </section>

      {/* Contact Info & Image */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg">
            <div>
              <h2 className="text-xl font-semibold text-red-700">Customer Support:</h2>
              <p>Phone: +91 9204052546/35</p>
              <p>Email: info@9to9patna.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-red-700">Corporate Office:</h2>
              <p>Aditya House, East Boring Canal Road,<br />Patna, Bihar – 800001</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-red-700">Follow Us:</h2>
              <p>Facebook | Instagram | Twitter – <strong>@9to9Supermarket</strong></p>
            </div>
          </div>
          <div>
            <Image src="/supermarket-hero.jpg" alt="Contact Us" width={600} height={400} className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Drop Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input type="email" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea rows={5} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
    </div>
  )
}

export default Contact;
