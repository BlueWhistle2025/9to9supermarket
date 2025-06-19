import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="hidden lg:block bg-red-800" >
        <div className="container" >
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-white">

                <Link className='navbar__link relative' href="/product">
                    Groceries
                </Link>
                <Link className='navbar__link relative' href="/product">
                    Dairy & Bakery
                </Link>
                <Link className='navbar__link relative' href="/product">
                    Beverages
                </Link>
                <Link className='navbar__link relative' href="/product">
                    Personal Care
                </Link>
                <Link className='navbar__link relative' href="/product">
                    Home Essentials
                </Link>
                <Link className='navbar__link relative' href="/product">
                    Packaged Foods
                </Link>
                <Link className='navbar__link relative' href="/product">
                    Baby Care
                </Link>
                <Link className='navbar__link relative' href="/product">
                    Stationery & Miscellaneous
                </Link>

            </div>
        </div>
      
    </div>
  )
}

export default Navbar
