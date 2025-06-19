import React from 'react';
import Image from 'next/image';

const About = () => {
  return (

  <main className="bg-white min-h-screen text-gray-800">
  {/* Hero Section */}
  <section className="relative bg-red-100 py-16 px-6 md:px-20 text-center">
    <Image
      src="/supermarket-hero.jpg"
      alt="9to9 Supermarket"
      layout="fill"
      objectFit="cover"
      className="opacity-20"
    />
    <div className="relative z-10">
      <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
        About 9to9 Supermarket
      </h1>
      <p className="text-xl text-red-800">
        Redefining Retail in Bihar
      </p>
    </div>
  </section>

  {/* About Section */}
  <section className="py-16 px-6 md:px-20 grid gap-10 bg-white">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Founded with the vision of transforming the retail landscape in Bihar,
          <strong> 9to9 Supermarket</strong> is a part of the <strong>Aditya Consumer Group</strong> – a
          trusted name in consumer services. Since our inception, we have been
          committed to bringing organized retail closer to every household in Bihar.
        </p>
        <p>
          With a deep understanding of consumer needs and local market dynamics, we
          strive to provide high-quality products at competitive prices, backed by
          warm customer service and modern infrastructure. Our name, “9to9”,
          reflects our dedication to serving you every day, from 9 AM to 9 PM.
        </p>
        <p>
          Today, 9to9 Supermarket operates multiple stores across Patna and
          neighboring cities, offering a world-class retail experience tailored to the
          needs of our local communities.
        </p>
      </div>
      <div>
        <Image
          src="/about-store.jpg"
          alt="Inside 9to9 Supermarket"
          width={600}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>
  <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/banner-7.jpg"
            alt="Vision and Mission"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-red-800 mb-6">Our Vision</h2>
          <p className="text-gray-600 text-lg mb-8">
            To be the most trusted and preferred supermarket chain in Bihar by delivering value, variety, and convenience.
          </p>

          <h2 className="text-3xl font-bold text-red-800 mb-4">Our Mission</h2>
          <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
            <li>To provide quality products at the best prices</li>
            <li>To build lasting relationships with customers</li>
            <li>To promote a clean, modern, and hassle-free shopping environment</li>
          </ul>
        </div>
      </div>
    </section>

  
</main>
  )
}

export default About;
