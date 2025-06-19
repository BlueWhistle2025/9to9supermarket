import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HeaderMain = () => {
  return (
    <header className="w-full bg-white shadow-md bg-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link href="/" passHref>
                <Image
                  src="/super-logo.png"  // Place your logo in the public/ folder
                  alt="Logo"
                  width={120}
                  height={60}
                  className="h-auto w-auto"
                />
             </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link href="/about" className="text-red-800 hover:text-white transition"><b>About</b></Link>
            <Link href="/contact" className="text-red-800 hover:text-white transition"><b>Contact</b></Link>
            <Link href="/storeLocator" className="text-red-800 hover:text-white transition"><b>Store Locator</b></Link>
            <Link href="/product" className="text-red-800 hover:text-white transition"><b>Product</b></Link>
            <Link href="/offer" className="text-red-800 hover:text-white transition"><b>Offers</b></Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;
