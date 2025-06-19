import React from 'react';
import Image from 'next/image';


const categories = [
    {
      title: "Groceries",
      description: "Rice, pulses, spices, flours, cooking oils, and more",
      image: "/groceries.png",
    },
    {
      title: "Dairy & Bakery",
      description: "Milk, curd, butter, cheese, breads, and ready-to-eat items",
      image: "/dairy.png",
    },
    {
      title: "Beverages",
      description: "Juices, soft drinks, tea, coffee, and health drinks",
      image: "/beverages.png",
    },
    {
      title: "Personal Care",
      description: "Soaps, shampoos, skincare, hygiene products",
      image: "/personalCare.png",
    },
    {
      title: "Home Essentials",
      description: "Cleaning supplies, detergents, kitchenware",
      image: "/homeEssential.png",
    },
    {
      title: "Packaged Foods",
      description: "Biscuits, snacks, ready meals, cereals",
      image: "/packagedFoods.png",
    },
    {
      title: "Baby Care",
      description: "Diapers, baby food, lotions, wipes",
      image: "/babyCare.png",
    },
    {
      title: "Stationery & Miscellaneous",
      description: "Office supplies, batteries, utility items",
      image: "/stationary.png",
    },
  ];

const Products = () => {
  return (
    <div>


<main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-yellow-100 py-20 px-6 md:px-20 text-center">
         <Image
                  src="/home-hero.jpg"
                  alt="Welcome to 9to9 Supermarket"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-20"
                />
        <h1 className="text-4xl md:text-5xl font-bold text-red-900">Explore Our Wide Range of Products</h1>
        <p className="text-lg text-red-800 mt-4 max-w-3xl mx-auto">
          At 9to9 Supermarket, we cater to all your daily and monthly needs with an extensive and curated range of products from trusted national and international brands.
        </p>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-red-800 mb-2">{category.title}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-red-700 mt-12 max-w-4xl mx-auto text-lg">
          Every aisle is stocked with handpicked products to meet your expectations in quality, price, and variety.
        </p>
      </section>
    </main>
      
    </div>
  )
}

export default Products;
