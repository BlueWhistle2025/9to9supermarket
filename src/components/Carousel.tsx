'use client';
import 'keen-slider/keen-slider.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const carouselData = [
  {
    src: '/banners/banner-1.jpg',
    alt: 'Team at 9 to 9 Supermarket',
    caption: 'Our Dedicated Team Serving You Daily',
  },
  {
    src: '/banners/banner-2.jpg',
    alt: 'Supermarket Entrance',
    caption: 'Your Trusted Neighborhood Store',
  },
  {
    src: '/banners/banner-3.jpg',
    alt: 'Fresh Produce Section',
    caption: 'Quality products at the best prices',
  },
];

export default function Carousel() {

  // const [current, setCurrent] = useState(0);

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  // };

  // const prevSlide = () => {
  //   setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    // <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl">
    //   {images.map((src, idx) => (
    //     <Image
    //       key={idx}
    //       src={src}
    //       alt={`Banner ${idx + 1}`}
    //       width={400}
    //       height={250}
    //       className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
    //         idx === current ? 'opacity-100' : 'opacity-0'
    //       }`}
    //     />
    //   ))}

    //   {/* Arrows */}
    //   <button
    //     onClick={prevSlide}
    //     className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
    //   >
    //     <ChevronLeft className="w-5 h-5" />
    //   </button>
    //   <button
    //     onClick={nextSlide}
    //     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
    //   >
    //     <ChevronRight className="w-5 h-5" />
    //   </button>

    //   {/* Dots */}
    //   <div className="absolute bottom-3 w-full flex justify-center space-x-2">
    //     {images.map((_, idx) => (
    //       <button
    //         key={idx}
    //         onClick={() => setCurrent(idx)}
    //         className={`h-2 w-2 rounded-full ${
    //           current === idx ? 'bg-white' : 'bg-white/50'
    //         }`}
    //       />
    //     ))}
    //   </div>
    // </div>

    <div className="w-full max-w-7xl mx-auto py-6 px-4">
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="rounded-xl overflow-hidden"
    >
      {carouselData.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
            {/* <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-4 text-lg sm:text-xl font-semibold">
              {item.caption}
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}
