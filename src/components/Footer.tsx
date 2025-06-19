import React from 'react';
import Image from 'next/image';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';

const features = [
    {
      title: 'Free delivery',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z" />
        </svg>
      ),
    },
    {
      title: '100% secure payment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.63 3.65a1 1 0 0 0-.84-.2a8 8 0 0 1-6.22-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-6.22 1.27a1 1 0 0 0-.84.2a1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39a10 10 0 0 0 6 1.39Zm-4.46-2.29l-2.69 2.7l-.89-.9a1 1 0 0 0-1.42 1.42l1.6 1.6a1 1 0 0 0 1.42 0L15 11a1 1 0 0 0-1.42-1.42Z" />
        </svg>
      ),
    },
    {
      title: 'Quality guarantee',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 5H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.18A3 3 0 0 0 23 10V6a1 1 0 0 0-1-1Zm-7 2h2v3a1 1 0 0 1-2 0Zm-4 0h2v3a1 1 0 0 1-2 0ZM7 7h2v3a1 1 0 0 1-2 0Zm-3 4a1 1 0 0 1-1-1V7h2v3a1 1 0 0 1-1 1Zm10 10h-4v-2a2 2 0 0 1 4 0Zm5 0h-3v-2a4 4 0 0 0-8 0v2H5v-8.18a3.17 3.17 0 0 0 1-.6a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3.17 3.17 0 0 0 1 .6Zm2-11a1 1 0 0 1-2 0V7h2ZM4.3 3H20a1 1 0 0 0 0-2H4.3a1 1 0 0 0 0 2Z" />
        </svg>
      ),
    },
    {
      title: 'Guaranteed savings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 8.35a3.07 3.07 0 0 0-3.54.53a3 3 0 0 0 0 4.24L11.29 16a1 1 0 0 0 1.42 0l2.83-2.83a3 3 0 0 0 0-4.24A3.07 3.07 0 0 0 12 8.35Zm2.12 3.36L12 13.83l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.41 0a1 1 0 0 0 1.42 0a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.42ZM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z" />
        </svg>
      ),
    },
    {
      title: 'Daily offers',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 7h-.35A3.45 3.45 0 0 0 18 5.5a3.49 3.49 0 0 0-6-2.44A3.49 3.49 0 0 0 6 5.5A3.45 3.45 0 0 0 6.35 7H6a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h1v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6h1a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3Zm-7 13H8a1 1 0 0 1-1-1v-6h4Zm0-9H5v-1a1 1 0 0 1 1-1h5Zm0-4H9.5A1.5 1.5 0 1 1 11 5.5Zm2-1.5A1.5 1.5 0 1 1 14.5 7H13ZM17 19a1 1 0 0 1-1 1h-3v-7h4Zm2-8h-6V9h5a1 1 0 0 1 1 1Z" />
        </svg>
      ),
    },
  ];

const Footer = () => {
  return (
    <div>
         <section className="py-10 bg-red-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-white">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-white">{item.icon}</div>
              <h5 className="text-lg font-medium">{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
    <footer className="py-10 bg-yellow-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-6">
          {/* Logo & Social Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div>
              <Image
                src="/super-logo.png"
                alt="logo"
                width={150}
                height={50}
                className="object-contain"
              />
              <div className="border-b border-gray-200 hidden sm:block ">
                      <div className="container py-4">
                          <div className="flex justify-between items-center">
                              <div className="hidden lg:flex gap-1">
                                  <div className="header_top__icon_wrapper">
                                      <BsFacebook />
                                  </div>
                                  <div className="header_top__icon_wrapper">
                                      <BsTwitter />
                                  </div>
                                  <div className="header_top__icon_wrapper">
                                      <BsInstagram />
                                  </div>
                                  <div className="header_top__icon_wrapper">
                                      <BsYoutube />
                                  </div>
                              </div>
            
                          </div>
                      </div>
                  </div>
            </div>
          </div>

          {/* Pages */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="text-lg font-semibold mb-4">Pages</h5>
            <ul className="space-y-2 text-white">
                <li><Link href="/about" className="text-red-800 hover:text-white transition"><b>About</b></Link></li>
                <li><Link href="/contact" className="text-red-800 hover:text-white transition"><b>Contact</b></Link></li>
                <li><Link href="/storeLocator" className="text-red-800 hover:text-white transition"><b>Store Locator</b></Link></li>
                <li><Link href="/product" className="text-red-800 hover:text-white transition"><b>Product</b></Link></li>
            </ul>
          </div>

          {/* Store Timings */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="text-lg font-semibold mb-4">Store Timings</h5>
            <p className="text-red-800">Open Daily from 9:00 AM to 10:00 PM</p>
          </div>
        </div>
      </div>
    </footer>
        <div className="bg-blackish text-gray-500 text-center py-4 pb-16 md:pb-4">
        © 9 to 9 Supermart. All rights reserved.
        </div>
    </div>
  )
}

export default Footer;
