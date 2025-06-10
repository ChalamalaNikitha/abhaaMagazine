'use client'
import { useState, useEffect } from "react";

const slides = [
  {
    src: "/banner1.jpg",
    alt: "Featured 1",
    category: "साहित्य",
    title: "एकता का संदेश",
    description:
      "कविता नौशीन फातिमा खान, लेखिका एवं शिक्षाविद्: मिल जुल कर रहें सब एक हैं हम। तू काला मैं गोरा...",
  },
  {
    src: "/banner2.jpg",
    alt: "Featured 2",
    category: "समाचार",
    title: "समाज में बदलाव",
    description:
      "रिपोर्टर द्वारा: शिक्षा, स्वच्छता और समानता की ओर बढ़ता भारत।",
  },
  {
    src: "/banner3.jpg",
    alt: "Featured 3",
    category: "खेल",
    title: "खेल में नयी ऊँचाई",
    description:
      "भारतीय महिला क्रिकेट टीम ने विश्व कप जीतकर रचा इतिहास।",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full overflow-hidden relative">
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text content */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-10 text-white z-10">
              <div className="max-w-2xl bg-black/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
                <span className="text-yellow-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {slide.category}
                </span>
                <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mt-1">
                  {slide.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm md:text-base leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
