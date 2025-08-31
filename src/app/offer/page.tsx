import Image from 'next/image';
import React from 'react';

const page = () => {
  const images = ["/offers/offer-1.jpeg", "/offer-2.jpg"]
  return (
    <div>
              <section className="relative bg-yellow-100 py-20 px-6 md:px-20 text-center">
                 <Image
                          src="/home-hero.jpg"
                          alt="Welcome to 9to9 Supermarket"
                          layout="fill"
                          objectFit="cover"
                          className="opacity-20"
                        />
                <h1 className="text-4xl md:text-5xl font-bold text-red-900">Exciting Deals and Offers at 9to9 Supermarket</h1>
                <p className="text-lg text-red-800 mt-4 max-w-3xl mx-auto">
                We believe in delivering more value for your money. That’s why at 9to9 Supermarket,
                we run attractive offers across categories every week to help you save more on your essentials.
                </p>
              </section>


              <div className="px-6 py-10 max-w-7xl mx-auto text-red-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="w-full h-[600px] relative rounded-2xl shadow-xl overflow-hidden bg-white flex items-center justify-center"
          >
            <Image
              src={imgSrc}
              alt={`Offer ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default page;
