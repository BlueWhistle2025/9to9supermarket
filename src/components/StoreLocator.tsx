import React from 'react'

const StoreLocator = () => {
  return (
    <div className="bg-red-100 flex flex-col items-center px-4 py-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Our Locations
        </h1>
        <div className="w-full max-w-6xl relative rounded-2xl shadow-xl overflow-hidden bg-white">
            <div className="pb-[56.25%] relative">
            <iframe
                src="https://www.google.com/maps/d/embed?mid=10bmd4lUOrIQzmEjEDT4sF-TMoV5MSlY&ehbc=2E312F"
                className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
            </div>
        </div>
    </div>

  
  )
}
{/* <iframe src="https://www.google.com/maps/d/embed?mid=10bmd4lUOrIQzmEjEDT4sF-TMoV5MSlY&ehbc=2E312F&noprof=1" width="640" height="480"></iframe> */}

export default StoreLocator;
