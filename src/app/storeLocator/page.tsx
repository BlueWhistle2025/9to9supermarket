import Image from 'next/image';
import React from 'react';
import { MapPin, Phone, Store } from "lucide-react";

const StoreLocator = () => {

    const locations = [
        {
          address: "Ramnagri More, Ashiana Digha Road, Patna, Bihar 800014",
          phone: "+91-8083998453",
          mapUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.6934474491363!2d85.0823879!3d25.615100899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57bccf8c187d%3A0xd12156257cdfe260!2s9to9%20Super%20Market!5e0!3m2!1sen!2sin!4v1750083804059!5m2!1sen!2sin",
        },
        {
            address: "41-B, Sri Krishna Puri, Patna, Bihar 800001",
            phone: "+91-9204052552",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.790425158351!2d85.115127!3d25.611879400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5824f81b600b%3A0xda583a0a1cc9ed0!2s9%20to%209%20Supermarket!5e0!3m2!1sen!2sin!4v1750083960150!5m2!1sen!2sin",
          },
          {
            address: "Nutan Plaza, Bander Bagicha, Patna, Bihar 800001",
            phone: "+91-9204052546",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.885134142015!2d85.1361496!3d25.6087329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590047e9cb47%3A0x24509291241dbd69!2s9%20to%209%20supermarket!5e0!3m2!1sen!2sin!4v1750084054835!5m2!1sen!2sin",
          },
          {
            address: "Near Flyover, Doctors Colony, Kankarbagh, Patna, Bihar 800020",
            phone: "+91-9264455190",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.141364379551!2d85.1574785!3d25.600218399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5916c029258f%3A0xa6196d4c92ea6bd0!2s9to9%20Super%20Market!5e0!3m2!1sen!2sin!4v1750084139988!5m2!1sen!2sin",
          },
          {
            address: "Near S.S.Hospital, Anisabad, Patna, Bihar 800002",
            phone: "+91-9204052553",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.565593754835!2d85.0987644!3d25.5861155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a81f133496b9%3A0x49d35897dde87113!2s9%20To%209%20Super%20Market!5e0!3m2!1sen!2sin!4v1750084223249!5m2!1sen!2sin",
          },
          {
            address: "Near S.P Kothi, Gaya, Bihar 823001",
            phone: "+91-9204052549",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.32647618285!2d84.9907923!3d24.7842719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b47cc14e2d7%3A0xb251acc1d57cd6de!2s9to9%20super%20Market!5e0!3m2!1sen!2sin!4v1750084278454!5m2!1sen!2sin",
          },
          {
            address: "Dharfari Enclave, Club Rd, Mahammadpur Kazi, Mithanpura, Muzaffarpur, Bihar 842002",
            phone: "+91-9204052564",
            mapUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.707555470952!2d85.3969722!3d26.108463399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11f56a501733%3A0x1d94123ba91b0c8d!2s9to9%20salon%20%26%20Spa%2CMuzaffarpur!5e0!3m2!1sen!2sin!4v1750084342593!5m2!1sen!2sin",
          },
      ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-yellow-100 py-28 px-6 md:px-20 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home-hero.jpg"
            alt="Welcome to 9to9 Supermarket"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 drop-shadow-sm">
            Find Us Near You
          </h1>
        </div>
      </section>

      {/* Store Locations */}
      <div className="grid grid-cols-1 gap-10 px-4 py-12 md:px-20 bg-red-50">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-yellow-500 rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 transition hover:shadow-2xl"
          >
          {/* Store Info */}
          <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-3">
                <Store className="text-white w-6 h-6" />
                <h2 className="text-2xl md:text-3xl font-semibold text-red-800">
                  9to9 Supermarket
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-white w-5 h-5" />
                <p className="text-lg text-black-700">{loc.address}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-white w-5 h-5" />
                <p className="text-lg text-black-700">{loc.phone}</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-64">
              <iframe
                src={loc.mapUrl}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="rounded-xl border w-full h-full"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoreLocator;
