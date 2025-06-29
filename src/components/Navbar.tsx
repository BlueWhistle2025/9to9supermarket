'use client'

import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import { Menu, X } from 'lucide-react'


const productLinks = [
    'Groceries',
    'Dairy & Bakery',
    'Beverages',
    'Personal Care',
    'Home Essentials',
    'Packaged Foods',
    'Baby Care',
    'Stationery & Miscellaneous',
  ]
  

const Navbar = () => {
//   return (
//     <div className="hidden lg:block bg-red-800" >
//         <div className="container" >
//             <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-white">

//                 <Link className='navbar__link relative' href="/product">
//                     Groceries
//                 </Link>
//                 <Link className='navbar__link relative' href="/product">
//                     Dairy & Bakery
//                 </Link>
//                 <Link className='navbar__link relative' href="/product">
//                     Beverages
//                 </Link>
//                 <Link className='navbar__link relative' href="/product">
//                     Personal Care
//                 </Link>
//                 <Link className='navbar__link relative' href="/product">
//                     Home Essentials
//                 </Link>
//                 <Link className='navbar__link relative' href="/product">
//                     Packaged Foods
//                 </Link>
//                 <Link className='navbar__link relative' href="/product">
//                     Baby Care
//                 </Link>
//                 <Link className='navbar__link relative' href="/product">
//                     Stationery & Miscellaneous
//                 </Link>

//             </div>
//         </div>
      
//     </div>

//   )

const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-red-800 text-white fixed top-16 w-full z-40">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <div className="hidden lg:flex w-fit gap-10 mx-auto font-medium py-4">
          {productLinks.map((label) => (
            <Link key={label} href="/product" className="navbar__link relative">
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden justify-between items-center px-4 py-3">
          <span className="font-semibold">Categories</span>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden px-4 pb-4 space-y-2">
            {productLinks.map((label) => (
              <Link
                key={label}
                href="/product"
                className="block py-2 text-sm border-b border-white/30"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )


}
export default Navbar;
