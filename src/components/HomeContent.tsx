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

      {/* <section className="bg-gray-100 py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Video Section */}
        {/* <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
          <video
            className="w-full h-auto rounded-xl"
            src="/video/9to9video.mp4" // place video in public/video.mp4
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    // </section> */} */
     <section className="bg-gray-100 py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
          Watch Our Video
        </h2>

        {/* Google Drive Video Embed */}
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://drive.google.com/file/d/18OAQA1R7nyfMsXZma9R12yG_UCGQqOjV/preview"
            allow="autoplay"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
          />
        </div>
      </div>
    </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Discover a world of convenience, quality, and savings at <strong>9to9 Supermarket</strong> – Bihar’s favorite destination for daily essentials. From household goods, groceries, personal care products, and much more, we offer everything under one roof to make your shopping experience comfortable and enjoyable.
            </p>
            <p>
              Located across prime neighborhoods in Patna, Gaya and Muzaffarpur, 9to9 Supermarket brings modern retail closer to home. With a commitment to affordability and customer satisfaction, we make sure you find exactly what you need, when you need it.
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
          <ul className="text-lg grid gap-4 md:grid-cols-2 list-disc list-inside text-left max-w-5xl mx-auto">
            <li>Everyday Low Prices</li>
            <li>Free Carry Bag</li>
            <li>Imported Products</li>
            <li>Regular offers and exciting discounts</li>
            <li>Hassle Free Return Policy</li>
            <li>Customer First approach</li>
            <li>Wide Range of Quality products</li>
            <li>Clean Spacious and family friendly stores</li>
            <li>Assured Gift on Min. Purchase of ₹1000 + </li>
            <li>Handpicked grocery sourced from the finest pan India</li>
          </ul>
          {/* <ul className="text-lg grid gap-4 md:grid-cols-1 list-disc list-inside text-left max-w-4xl mx-auto">
            <li>Handpicked grocery sourced from the finest pan India</li>
          </ul> */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-100 py-12 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-red-900 mb-4">
            Visit your nearest 9to9 store today and experience the joy of smart shopping!
          </h3>
     
          <Link href="/storeLocator" className="text-yellow-500 hover:text-white transition"><b>Find a Store</b></Link>
        </div>
      </section>
      
    </main>

      
    </div>
  )
}

export default HomeContent;
