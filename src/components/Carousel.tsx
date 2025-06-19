'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Banner One',
    description: 'This is the first banner',
    image: '/banner-5.jpg',
  },
  {
    id: 2,
    title: 'Banner Two',
    description: 'This is the second banner',
    image: '/banner-1.jpg',
  },
  {
    id: 3,
    title: 'Banner Three',
    description: 'This is the third banner',
    image: '/banner-4.jpg',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-250 overflow-hidden rounded-lg shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            className="w-full h-250 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4">
            {/* <h2 className="text-xl font-bold">{slide.title}</h2> */}
            {/* <p>{slide.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}
