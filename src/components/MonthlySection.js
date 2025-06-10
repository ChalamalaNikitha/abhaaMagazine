import React from "react";
import { FaBookOpen } from "react-icons/fa";

const articles = [
  {
    category: "सामग्री",
    color: "text-pink-600",
    title: "एकता का संदेश",
    desc: "कवयित्री नौशीन फातिमा खान, शिक्षाविद – आइए हम सब साथ मिलकर रहें, हम एक हैं। तुम काले हो, मैं गोरी हूं...",
    img: "/banner1.jpg",
  },
  {
    category: "विविध",
    color: "text-red-600",
    title: "मानव समानता और हज के अंतिम उपदेश पर प्रवचन",
    desc: "डॉ. मोहम्मद सलीम पाटीवाला, अमीर-ए-हलका, जमात-ए-इस्लामी हिंद, गुजरात – आज हमारे भारत देश पर...",
    img: "/banner2.jpg",
  },
  {
    category: "संस्कृति",
    color: "text-purple-600",
    title: "आधुनिक युग में पारंपरिक कला का संरक्षण",
    desc: "भारत के कलाकार पारंपरिक चित्रकला, बुनाई और लोक संगीत को तकनीक के युग में भी जीवित रखने के प्रयास में हैं...",
    img: "/banner3.jpg",
  },
];

const MonthlySection = () => {
  return (
    <section className="websiteBackground py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border p-6 rounded-md shadow-md">
        {/* Left - Articles */}
        <div className="md:col-span-2 space-y-8">
          {articles.map((item, i) => (
            <div
              key={i}
              className="flex flex-col-reverse md:flex-row items-start md:items-center gap-4 border-b pb-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <FaBookOpen className={`text-lg ${item.color}`} />
                  <span className={`font-bold ${item.color}`}>{item.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full md:w-32 h-24 object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Right - Monthly Edition */}
        <div className="md:border-l md:pl-6 flex flex-col items-center justify-center text-center">
          <h4 className="text-lg font-semibold text-gray-800">मासिक संस्करण</h4>
          <p className="text-sm text-gray-500 mb-4">जून 2025</p>
          <img
            src="https://admin.aabhamagazine.in/FeatureImage/1749129703feature_image.jpg"
            alt="पत्रिका कवर"
            className="w-40 h-auto rounded shadow mb-4"
          />
          <a
            href="#"
            className="backgroundColor text-white px-6 py-2 rounded w-full sm:w-auto text-center hover:opacity-90 transition"
          >
            अभी सदस्यता लें
          </a>
        </div>
      </div>
    </section>
  );
};

export default MonthlySection;
