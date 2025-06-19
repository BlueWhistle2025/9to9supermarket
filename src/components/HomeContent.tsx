import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeContent = () => {
  return (
    <div>
         <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-red-100 py-20 px-6 md:px-20 text-center">
        <Image
          src="/home-hero.jpg"
          alt="Welcome to 9to9 Supermarket"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
            Welcome to 9to9 Supermarket
          </h1>
          <p className="text-xl text-red-800">
            Your One-Stop Family Store
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Discover a world of convenience, quality, and savings at <strong>9to9 Supermarket</strong> – Bihar’s favorite destination for daily essentials. From fresh fruits and vegetables to household goods, groceries, personal care products, and much more, we offer everything under one roof to make your shopping experience easy and enjoyable.
            </p>
            <p>
              Located across prime neighborhoods in Patna and Bihar, 9to9 Supermarket brings modern retail close to home. With a commitment to affordability and customer satisfaction, we make sure you find exactly what you need, when you need it.
            </p>
          </div>
          <div>
            <Image
              src="/home-hero.jpg"
              alt="9to9 Store Front"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-6">Why Shop With Us?</h2>
          <ul className="text-lg grid gap-4 md:grid-cols-2 list-disc list-inside text-left max-w-3xl mx-auto">
            <li>Wide range of quality products</li>
            <li>Everyday low prices</li>
            <li>Clean, spacious, and family-friendly stores</li>
            <li>Regular offers and exciting discounts</li>
            <li>Hygienic fresh produce section</li>
            <li>Customer-first approach</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-100 py-12 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-red-900 mb-4">
            Visit your nearest 9to9 store today and experience the joy of smart shopping!
          </h3>
          <Link href="/storeLocator">
            <a className="inline-block mt-4 px-6 py-3 bg-red-700 text-white font-medium rounded-lg hover:bg-red-800 transition">
              Find a Store
            </a>
          </Link>
        </div>
      </section>
      
    </main>

      
    </div>
  )
}

export default HomeContent;
