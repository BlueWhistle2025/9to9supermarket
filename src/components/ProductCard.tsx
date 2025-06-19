import Image from 'next/image';
import React from 'react';

interface propsType {
    img: string;
    title: string;
}

const ProductCard: React.FC<propsType> = ({ img,title}) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400]">
        <div>
            <Image
                className="w-full h-auto"
                src={img}
                width={200}
                height={300}
                alt={title}
            />
        </div>
        <div className="space-y-2 py-2">
            <h2 className="text-accent font-medium uppercase">{title}</h2>
        </div>
      
    </div>
  )
}

export default ProductCard
