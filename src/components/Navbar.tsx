'use client'

import { useState } from 'react';
import React from 'react';

const Navbar = () => {
  const [] = useState(false)

  return (
    <div className="bg-red-800 text-white fixed top-16 w-full z-40">
      <div className="container mx-auto">
        <div className="hidden lg:flex w-full justify-center font-bold py-4">
        <span className="navbar__text text-center">
          A unit of Aditya Consumer Marketing Limited
        </span>
      </div>


        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden justify-between items-center px-4 py-3">
          <span className="font-semibold">A unit of Aditya Consumer Marketing Limited</span>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
