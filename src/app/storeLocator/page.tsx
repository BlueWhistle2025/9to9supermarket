import Image from 'next/image';
import React from 'react'

const StoreLocator = () => {

    const locations = [
        {
          address: "Ramnagri Rd, Engineer's Colony, Indrapuri, Patna, Bihar 800014",
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.6934474491363!2d85.0823879!3d25.615100899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57bccf8c187d%3A0xd12156257cdfe260!2s9to9%20Super%20Market!5e0!3m2!1sen!2sin!4v1750083804059!5m2!1sen!2sin",
        },
        {
            address: "J468+Q32, Sri Krishna Puri, Patna, Bihar 800013",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.790425158351!2d85.115127!3d25.611879400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5824f81b600b%3A0xda583a0a1cc9ed0!2s9%20to%209%20Supermarket!5e0!3m2!1sen!2sin!4v1750083960150!5m2!1sen!2sin",
          },
          {
            address: "J45P+FFR Nutan Plaza, Basement, PlazaSri Niwas Path, off Fraser Road, Bander Bagicha, AreaPatna, Fraser Road Area, Patna, Bihar 800001",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.885134142015!2d85.1361496!3d25.6087329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590047e9cb47%3A0x24509291241dbd69!2s9%20to%209%20supermarket!5e0!3m2!1sen!2sin!4v1750084054835!5m2!1sen!2sin",
          },
          {
            address: "99, Rajendra Nagar Over Bridge, Doctors Colony, RBI Flats Colony, Golumber, Patna, Bihar 800020",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.141364379551!2d85.1574785!3d25.600218399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5916c029258f%3A0xa6196d4c92ea6bd0!2s9to9%20Super%20Market!5e0!3m2!1sen!2sin!4v1750084139988!5m2!1sen!2sin",
          },
          {
            address: "H3PX+CGR, Khaugal - Anisabad Rd, near S.S.Hospital, Dhira Chak, Chitkohra, Patna, Bihar 800002",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.565593754835!2d85.0987644!3d25.5861155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a81f133496b9%3A0x49d35897dde87113!2s9%20To%209%20Super%20Market!5e0!3m2!1sen!2sin!4v1750084223249!5m2!1sen!2sin",
          },
          {
            address: "S.p kothi, Near, Police Line Rd, Judges Colony, Gaya, Bihar 823001",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.32647618285!2d84.9907923!3d24.7842719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b47cc14e2d7%3A0xb251acc1d57cd6de!2s9to9%20super%20Market!5e0!3m2!1sen!2sin!4v1750084278454!5m2!1sen!2sin",
          },
          {
            address: "Kumar Dharfari Enclave, Club Rd, Mahammadpur Kazi, Mithanpura, Muzaffarpur, Bihar 842002",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.707555470952!2d85.3969722!3d26.108463399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11f56a501733%3A0x1d94123ba91b0c8d!2s9to9%20salon%20%26%20Spa%2CMuzaffarpur!5e0!3m2!1sen!2sin!4v1750084342593!5m2!1sen!2sin",
          },
      ];

  return (
    <div>
              <section className="relative bg-yellow-100 py-20 px-6 md:px-20 text-center">
                 <Image
                          src="/home-hero.jpg"
                          alt="Welcome to 9to9 Supermarket"
                          layout="fill"
                          objectFit="cover"
                          className="opacity-20"
                        />
                <h1 className="text-4xl md:text-5xl font-bold text-red-900">Find Us Near You</h1>

              </section>
        <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-1">
        {locations.map((loc, index) => (
            <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-lg p-4 shadow-sm"
            >
            <div className="text-lg font-medium">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">9to9 super Market</h2>
            <h4 className="text-xl md:text-xl text-red-800 mb-4"> {loc.address}</h4></div>
            <iframe
                src={loc.mapUrl}
                width="100%"
                height="200"
                allowFullScreen
                loading="lazy"
                className="rounded-md border"
            ></iframe>
            </div>
        ))}
        </div>
    </div>
  )
}

export default StoreLocator;
