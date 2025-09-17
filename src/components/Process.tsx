'use client';

export default function ProcessSection() {
    const steps = [
      {
        id: 1,
        title: "Discover",
        desc: "We start by understanding your goals and challenges.",
        img: "/process/1.JPG",
      },
      {
        id: 2,
        title: "Plan",
        desc: "A tailored strategy is designed for your project.",
        img: "/process/2.JPG",
      },
      {
        id: 3,
        title: "Design",
        desc: "Creative concepts are transformed into wireframes and mockups.",
        img: "/process/3.JPG",
      },
      {
        id: 4,
        title: "Develop",
        desc: "We build scalable and performant solutions.",
        img: "/process/4.JPG",
      },
      {
        id: 5,
        title: "Test",
        desc: "Rigorous testing ensures quality and reliability.",
        img: "/process/5.JPG",
      },
      {
        id: 6,
        title: "Launch",
        desc: "Your product is deployed and ready to shine.",
        img: "/process/6.JPG",
      },
      {
        id: 7,
        title: "Launch",
        desc: "Your product is deployed and ready to shine.",
        img: "/process/7.JPG",
      },
      {
        id: 8,
        title: "Launch",
        desc: "Your product is deployed and ready to shine.",
        img: "/process/8.JPG",
      },
      {
        id: 9,
        title: "Launch",
        desc: "Your product is deployed and ready to shine.",
        img: "/process/9.JPG",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-800">
          We believe in quality
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
              >
                <img
                  src={step.img}
                //   alt={step.title}
                //   className="w-28 h-28 object-contain mb-6"
                />
                {/* <span className="text-indigo-600 font-semibold text-lg mb-2">
                  Step {step.id}
                </span> */}
                {/* <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3> */}
                {/* <p className="text-gray-600 text-sm">{step.desc}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  