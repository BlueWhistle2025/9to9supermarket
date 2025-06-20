import React from 'react';
import ProductCard from './ProductCard';

const productsData = [
    {
        img: "/prod1.jpg",
        title: "product1",
        desc: "product description",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/prod2.jpg",
        title: "product1",
        desc: "product description",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/prod3.jpg",
        title: "product1",
        desc: "product description",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/prod4.jpg",
        title: "product1",
        desc: "product description",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/prod1.jpg",
        title: "product1",
        desc: "product description",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/prod2.jpg",
        title: "product1",
        desc: "product description",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/prod3.jpg",
        title: "product1",
        desc: "product description",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/prod4.jpg",
        title: "product1",
        desc: "product description",
        rating: 4,
        price: "45.00",
    },
]

const Products = () => {
  return (
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">
                Products
            </h2>

            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {productsData.map((item, index) => (
                    <ProductCard
                    key = {index}
                    img = {item.img}
                    title = {item.title}
                    // desc = {item.desc}
                    // rating = {item.rating}
                    // price = {item.price}
                    />
                ) )}
                </div>
        </div>
      
    </div>
  )
}

export default Products;
