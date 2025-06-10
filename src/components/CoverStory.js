import React from "react";

const stories = [
  {
    title: "हजः मानव समानता एवं वैश्विक भाईचारा...",
    desc: "डॉ. फरहत हुसैन, रिटायर्ड प्रोफेसर, रामनगर, उत्तराखंड – अमेरिका में रह एवं...",
    img: "/HumanEquality.jpg",
  },
  {
    title: "मज़दूर दिवस और महिलाओं की स्थिति...",
    desc: "सितंबर 2024 में वर्किंग वूमन एनएसोसिएशन की काम के...",
    img: "/LabourDay.svg",
  },
  {
    title: "घरेलू हिंसा और मानसिक स्वास्थ्य समाज के गंभीर...",
    desc: "ख़ास शांति संपादक – प्रत्येक वर्ष 7 अप्रैल को विश्व स्वास्थ्य दिवस...",
    img: "/DomesticVoilence.png",
  },
];

const CoverStories = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">कवर स्टोरी</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, i) => (
          <div
            key={i}
            className="websiteBackground rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-800 line-clamp-2 mb-1">
                {story.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">{story.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoverStories;
