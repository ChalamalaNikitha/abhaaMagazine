import React from "react";

const categories = [
  {
    title: "समाचार",
    description: "देश और दुनिया की ताज़ा खबरें, राजनीति, समाज और अधिक पर आधारित।",
    image: "/news.jpeg",
    buttonLabel: "और देखें"
  },
  {
    title: "मनोरंजन",
    description: "फिल्में, संगीत, टीवी शोज़ और सितारों की दुनिया की झलक।",
    image: "/entertainment.jpeg",
    buttonLabel: "और देखें"
  },
  {
    title: "खेल",
    description: "क्रिकेट, फ़ुटबॉल, ओलंपिक्स और अन्य खेलों की खबरें और विश्लेषण।",
    image: "/games.jpeg",
    buttonLabel: "और देखें"
  },
  {
    title: "स्वास्थ्य",
    description: "सेहत संबंधी टिप्स, आयुर्वेद, योग और पोषण की जानकारी।",
    image: "/Health.jpeg",
    buttonLabel: "और देखें"
  },
  {
    title: "प्रौद्योगिकी",
    description: "नई तकनीक, गैजेट्स, ऐप्स और इनोवेशन की दुनिया।",
    image: "/technology.jpeg",
    buttonLabel: "और देखें"
  },
  {
    title: "शिक्षा",
    description: "शिक्षा प्रणाली, परीक्षा, करियर गाइड और छात्रों के लिए संसाधन।",
    image: "/Teaching.jpeg",
    buttonLabel: "और देखें"
  },
  {
    title: "यात्रा",
    description: "घूमने फिरने की बेहतरीन जगहें, ट्रैवल गाइड्स और टिप्स।",
    image: "/Journey.jpeg",
    buttonLabel: "और देखें"
  },
  {
    title: "खाना",
    description: "रेसिपीज़, भारतीय व्यंजन और खाने से जुड़ी बातें।",
    image: "/Food.jpeg",
    buttonLabel: "और देखें"
  },
  {
    title: "फैशन",
    description: "फैशन ट्रेंड्स, स्टाइल टिप्स और लाइफस्टाइल अपडेट।",
    image: "/Fashion.jpeg",
    buttonLabel: "और देखें"
  },

];


const CategoryCard = ({ image, title, description, buttonLabel }) => {
  return (
    <div className="bg-zinc-50 rounded-xl shadow-md p-6 w-full text-center hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="h-48 w-full object-cover" />


      <h3 className="text-lg font-bold text-gray-800 m-5 uppercase">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
        {description}
      </p>
      <button className="themeColor font-semibold hover:underline">
        {buttonLabel}
      </button>
    </div>
  );
};

const CategorySection = () => {
  return (
    <section className="py-12 px-4 websiteBackground min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          श्रेणियाँ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
