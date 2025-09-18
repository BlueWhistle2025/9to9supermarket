'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const HeaderMain = () => {
  // return (
    // <header className="w-full bg-white shadow-md bg-yellow-500">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       {/* Logo */}
    //       <div className="flex-shrink-0">
    //       <Link href="/" passHref>
                // <Image
                //   src="/super-logo.png"  // Place your logo in the public/ folder
                //   alt="Logo"
                //   width={120}
                //   height={60}
                //   className="h-auto w-auto"
                // />
    //          </Link>
    //       </div>
          

    //       {/* Navigation Links */}
    //       <nav className="flex space-x-6">
            // <Link href="/about" className="text-red-800 hover:text-white transition"><b>About</b></Link>
            // <Link href="/contact" className="text-red-800 hover:text-white transition"><b>Contact</b></Link>
            // <Link href="/storeLocator" className="text-red-800 hover:text-white transition"><b>Store Locator</b></Link>
            // <Link href="/product" className="text-red-800 hover:text-white transition"><b>Product</b></Link>
            // <Link href="/offer" className="text-red-800 hover:text-white transition"><b>Offers</b></Link>
    //       </nav>
    //     </div>
    //   </div>
    // </header>

    const [isOpen, setIsOpen] = useState(false)

    return (
      <nav className="bg-yellow-500 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
              <Image
                  src="/Logo.png"  // Place your logo in the public/ folder
                  alt="Logo"
                  width={120}
                  height={60}
                  className="h-auto w-auto"
                />
              </Link>
              {/* <p>A unit of Aditya Vision</p> */}
            </div>
  
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
            <Link href="/about" className="text-red-800 hover:text-white transition"><b>About</b></Link>
            <Link href="/contact" className="text-red-800 hover:text-white transition"><b>Contact</b></Link>
            <Link href="/storeLocator" className="text-red-800 hover:text-white transition"><b>Store Locator</b></Link>
            <Link href="/product" className="text-red-800 hover:text-white transition"><b>Product</b></Link>
            <Link href="/offer" className="text-red-800 hover:text-white transition"><b>Offers</b></Link>
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {/* {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <Link href="/about" className="text-red-800 hover:text-white transition"><b>About</b></Link>
            <Link href="/contact" className="text-red-800 hover:text-white transition"><b>Contact</b></Link>
            <Link href="/storeLocator" className="text-red-800 hover:text-white transition"><b>Store Locator</b></Link>
            <Link href="/product" className="text-red-800 hover:text-white transition"><b>Product</b></Link>
            <Link href="/offer" className="text-red-800 hover:text-white transition"><b>Offers</b></Link>
          </div>
        )} */}


        {/* Mobile Dropdown Menu */}
{isOpen && (
  <div className="md:hidden bg-white shadow-md rounded-md mx-4 mt-2 py-2">
    <ul className="flex flex-col space-y-2 px-4">
      <li>
        <Link
          href="/about"
          className="block text-red-800 hover:bg-red-800 hover:text-white px-3 py-2 rounded-md transition font-semibold"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="block text-red-800 hover:bg-red-800 hover:text-white px-3 py-2 rounded-md transition font-semibold"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          href="/storeLocator"
          className="block text-red-800 hover:bg-red-800 hover:text-white px-3 py-2 rounded-md transition font-semibold"
        >
          Store Locator
        </Link>
      </li>
      <li>
        <Link
          href="/product"
          className="block text-red-800 hover:bg-red-800 hover:text-white px-3 py-2 rounded-md transition font-semibold"
        >
          Product
        </Link>
      </li>
      <li>
        <Link
          href="/offer"
          className="block text-red-800 hover:bg-red-800 hover:text-white px-3 py-2 rounded-md transition font-semibold"
        >
          Offers
        </Link>
      </li>
    </ul>
  </div>
)}

      </nav>
  );
}

export default HeaderMain;
