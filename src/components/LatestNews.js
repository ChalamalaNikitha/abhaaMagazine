import React from "react";

const news = [
  {
    title: "बर्फ की चादरें पहले से कहीं तेज़ी से पिघल रही हैं",
    category: "पर्यावरण",
    date: "6 जून 2025",
    author: "काइल चोविंस्की",
    image: "/images/ice.jpg",
    description:
      "जलवायु परिवर्तन के कारण अंटार्कटिका की बर्फ की चादरें बहुत तेज़ी से पिघल रही हैं। वैज्ञानिकों का कहना है कि यह दर पहले की सोच से कहीं ज़्यादा है, जिससे समुद्री जल स्तर के बढ़ने का खतरा बढ़ गया है।",
    featured: true,
  },
  {
    title: "नींद नहीं आती? यह चाँद-आकार की नाइट लाइट आपकी मदद कर सकती है",
    category: "स्वास्थ्य",
    date: "6 जून 2025",
    author: "एला हार्पर",
    image: "/images/moon.jpg",
    description:
      "अगर आप रात में सोने में परेशानी महसूस करते हैं, तो यह चाँद के आकार की बेडसाइड लाइट आपके लिए फायदेमंद हो सकती है। यह न केवल सुकूनदायक रोशनी देती है, बल्कि आपके मूड को भी शांत करती है।",
  },
  {
    title:
      "एक साधारण बैकग्राउंड फोटो Android यूज़र्स को मजबूर कर रही है फ़ोन रीसेट करने के लिए",
    category: "टेक्नोलॉजी",
    date: "6 जून 2025",
    author: "टॉम हेंडरसन",
    image: "/images/android.jpg",
    description:
      "एक अनजान फोटो, जिसे बहुत से लोग वॉलपेपर के रूप में सेट कर रहे हैं, Android फ़ोन को क्रैश कर रही है और यूज़र्स को फ़ैक्टरी रीसेट करने के लिए मजबूर कर रही है। विशेषज्ञों ने चेतावनी दी है कि ऐसी इमेज़ से बचना चाहिए।",
  },
  {
    title:
      "विरोध प्रदर्शनों में चेहरों को कैसे ब्लर करें — जानिए क्यों यह ज़रूरी है",
    category: "टेक्नोलॉजी",
    date: "6 जून 2025",
    author: "एला हार्पर",
    image: "/images/protest.jpg",
    description:
      "अगर आप किसी विरोध प्रदर्शन में फ़ोटो क्लिक करते हैं, तो उसमें शामिल लोगों के चेहरों को ब्लर करना ज़रूरी है ताकि उनकी पहचान सुरक्षित रह सके। यह डिजिटल गोपनीयता के लिए अहम कदम है।",
  },
];

const LatestNews = () => {
  return (
    <section className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold border-b pb-2 mb-6">लेटेस्ट न्यूज़</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Featured Article */}
        <div className="md:col-span-1">
          <img
            src={news[0].image}
            alt={news[0].title}
            className="w-full h-60 object-cover rounded"
          />
          <h3 className="text-lg font-semibold mt-3">{news[0].title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {news[0].date} | {news[0].author}
          </p>
          <p className="text-sm text-gray-700 mt-2">{news[0].description}</p>
        </div>

        {/* Side Articles */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {news.slice(1).map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 border-b pb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-20 object-cover rounded"
              />
              <div>
                <p className="text-xs text-red-500 font-medium mb-1">
                  {item.category}
                </p>
                <h4 className="text-md font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-500">
                  {item.date} | {item.author}
                </p>
                <p className="text-sm text-gray-700 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
