import React from "react";

const FeaturedNewsLayout = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Sidebar */}
      <div className="space-y-6 md:col-span-1">
        {[{
          img: "/rajaneethi.svg",
          category: "राजनीति",
          title: "पार्टी की रणनीति: समझदारी और विरोधाभास"
        }, {
          img: "/VRWomen.jpeg",
          category: "टेक्नोलॉजी",
          title: "महिलाओं की भागीदारी में वीआर की क्रांतिकारी भूमिका"
        }].map((item, index) => (
          <div key={index} className="space-y-2">
            <img
              src={item.img}
              alt={item.title}
              className="rounded-md w-full h-40 object-cover"
            />
            <p className="text-sm text-gray-500">{item.category}</p>
            <h3 className="font-semibold text-md leading-snug">{item.title}</h3>
            <p className="text-xs text-gray-400">06 JUNE 2025</p>
          </div>
        ))}
      </div>

      {/* Center Featured Story */}
      <div className="md:col-span-2 flex flex-col items-center text-center">
        <img
          src="/banner2.jpg"
          alt="Main Feature"
          className="w-full h-72 object-cover rounded-md"
        />
        <h2 className="text-xl font-bold mt-4">साझा उद्देश्य की ताकत</h2>
        <p className="text-sm text-gray-500 mt-1">समाचार डेस्क | 06 JUNE 2025</p>
        <p className="text-sm text-gray-600 mt-4 px-2 md:px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Right Sidebar */}
      <div className="md:col-span-1">
        <h3 className="font-semibold text-lg border-b pb-2 mb-4">Top Stories</h3>
        <div className="space-y-4">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <img
                src="/LadyBoss.jpeg"
                alt="author"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-sm leading-snug">
                  जब शहर बदलते हैं विचारधाराएं
                </h4>
                <p className="text-xs text-gray-400">06 JUNE 2025</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsLayout;
