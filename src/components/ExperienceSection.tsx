import Image from "next/image";

export default function ExperienceSection() {
  const images = [
    "/exp1.JPG",
    "/exp2.JPG",
    "/exp3.JPG",
    "/exp4.JPG",
    "/exp5.JPG",
    "/exp6.JPG",
  ];

  return (
<section className="text-red-800 py-12 px-4 sm:px-6 lg:px-20 text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-800 mb-4">
    Why Customers Love 9to9 Supermarket
  </h2>

  <p className="text-base sm:text-lg text-red-500 max-w-3xl mx-auto mb-10 sm:mb-12">
    At 9to9 Supermarket, we focus on more than just great prices — we create
    a memorable shopping experience. With friendly staff, clean aisles, fresh
    products, and unbeatable deals, we’ve become Bihar’s trusted family store.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {images.map((src, index) => (
      <div
        key={index}
        className="rounded-full overflow-hidden w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 mx-auto shadow-lg"
      >
        <Image
          src={src}
          alt={`Shop feature ${index + 1}`}
          width={240}
          height={240}
          className="object-cover w-full h-full"
        />
      </div>
    ))}
  </div>
</section>


    
  );
}
