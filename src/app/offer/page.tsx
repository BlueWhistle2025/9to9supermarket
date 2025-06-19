import Image from 'next/image';
import React from 'react';

const page = () => {
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
        

        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
            <div
                key={offer.title}
                className="bg-white shadow-md rounded-xl overflow-hidden"
            >
                <div className="relative h-48 w-full">
                <Image
                    src={offer.image}
                    alt={offer.title}
                    layout="fill"
                    objectFit="cover"
                />
                </div>
                <div className="p-4">
                <h2 className="text-xl font-semibold">{offer.title}</h2>
                <p className="text-gray-600">{offer.desc}</p>
                </div>
            </div>
            ))}
      </div> */}
      <div className="bg-red-100 flex flex-col items-center px-4 py-10 space-y-6">

        <div className="w-full max-w-6xl relative rounded-2xl shadow-xl overflow-hidden bg-white">
            <div className="pb-[100%] ">
            <Image
                    src="/offer.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    </div>
    <div className="bg-red-100 flex flex-col items-center px-4 py-10 space-y-6">

<div className="w-full max-w-6xl relative rounded-2xl shadow-xl overflow-hidden bg-white">
    <div className="pb-[100%] ">
    <Image
            src="/offer-2.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
        />
    </div>
</div>
</div>

      {/* <div className="mt-16 bg-yellow-50 rounded-xl p-6 text-center shadow-inner">
        <h2 className="text-2xl font-bold mb-2">Join Our Loyalty Program</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Get exclusive member-only deals, early access to sales, and reward points on every purchase.
        </p>
        <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
          Sign Up Now
        </button>
      </div> */}
    </div>
    </div>
  )
}

export default page;
