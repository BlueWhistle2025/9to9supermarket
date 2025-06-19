import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-blue-100 to-indigo-100 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        We’re more than just a store — we are a movement to bring quality, sustainability, and style into every purchase you make.
      </p>
    </section>

    {/* Our Story */}
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2020, our journey began with a simple goal — to create a better shopping experience by curating products that matter. 
            We believe shopping should be personal, inspiring, and conscious. With thousands of happy customers, we continue to grow with the same passion and integrity.
          </p>
        </div>
        <Image
          src="/images/story.jpg"
          alt="Our Story"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>

    {/* Team Section */}
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: 'Sophie Lee',
              title: 'Founder & CEO',
              img: '/images/team1.jpg',
            },
            {
              name: 'Marcus Chen',
              title: 'Head of Product',
              img: '/images/team2.jpg',
            },
            {
              name: 'Ava Johnson',
              title: 'Marketing Lead',
              img: '/images/team3.jpg',
            },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="bg-indigo-600 text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Join Us on Our Mission</h2>
      <p className="text-lg mb-6">
        Discover products that make a difference. Experience shopping with purpose.
      </p>
      <a
        href="/shop"
        className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
      >
        Shop Now
      </a>
    </section>
  </div>
  )
}

export default About;
