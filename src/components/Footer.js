import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#9b2c89] text-white pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left: Logo + Description + Socials */}
          <div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6">
              <img src="/logo-white.png" alt="Aabha Logo" className="w-[160px] md:w-[177px]" />
            </div>
            <p className="text-sm leading-relaxed md:text-base">
              राष्ट्रीय एवं अंतर्राष्ट्रीय मुद्दों पर सटीक जानकारी, आज के दौर के मुताबिक वैचारिक,
              अध्यात्मिक, सांस्कृतिक एवं सामाजिक मुद्दों से संबंधित लेख, आदर्श गृहस्थ जीवन पर लेख
              समेत बहुत कुछ लेकर आ रही है आपके बीच ‘आभा’ ई मैग्ज़ीन
            </p>
            <div className="mt-6">
              <p className="mb-3 font-semibold">Connect with Us</p>
              <div className="flex gap-5 text-[26px] justify-center lg:justify-start">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              </div>
            </div>
          </div>

          {/* Right: Menu + Quick Links */}
          <div className="lg:w-1/2 flex flex-wrap gap-10 justify-center lg:mt-10">
            {/* Menu Links */}
            <div className="min-w-[140px]">
              <h6 className="font-bold mb-4 text-lg">Menu Links</h6>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/articles">Articles</Link></li>
                <li><Link href="/magazines">Magazines</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
                <li><Link href="/author-login">Author Login</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="min-w-[140px]">
              <h6 className="font-bold mb-4 text-lg">Quick Links</h6>
              <ul className="space-y-2 text-sm md:text-base">
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/disclaimer">Disclaimers</Link></li>
                <li><Link href="/sitemap">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-300 pt-6">
          <p className="text-center text-sm md:text-base">
            © 2025
            <a
              href="https://aabhamagazine.in/"
              className="underline ml-1 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aabha Magazine
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
