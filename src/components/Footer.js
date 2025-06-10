import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#9b2c89] text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Logo and Description */}
          <div className="md:w-1/2">
            <div className="mb-6 flex items-start gap-5">
              <img src="/logo-white.png" alt="Aabha Logo" className="w-[160px] md:w-[177px]" />
            </div>
            <p className="text-sm leading-relaxed md:text-base">
              राष्ट्रीय एवं अंतर्राष्ट्रीय मुद्दों पर सटीक जानकारी, आज के दौर के मुताबिक वैचारिक, अध्यात्मिक, सांस्कृतिक एवं सामाजिक मुद्दों से संबंधित लेख, आदर्श गृहस्थ जीवन पर लेख समेत बहुत कुछ लेकर आ रही है आपके बीच ‘आभा’ ई मैग्ज़ीन
            </p>
            <div className="mt-6">
              <p className="mb-3 font-semibold">Connect with Us</p>
              <div className="flex gap-5 text-[26px]">
                <a
                  href="https://www.facebook.com/aabhamagazine"
                  className="hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/aabhamagazine"
                  className="hover:text-pink-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/aabhamagazine"
                  className="hover:text-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Twitter"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div className="md:w-1/4 w-1/2 mt-8 md:mt-0">
            <h6 className="font-bold mb-4 text-lg">Menu Links</h6>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="about.php" className="text-white hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="articles.php" className="text-white hover:underline">
                  Articles
                </a>
              </li>
              <li>
                <a href="magazine.php" className="text-white hover:underline">
                  Magazines
                </a>
              </li>
              <li>
                <a href="contact.php" className="text-white hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="https://admin.aabhamagazine.in/login"
                  className="text-white hover:underline"
                >
                  Author Login
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/4 w-1/2 mt-8 md:mt-0">
            <h6 className="font-bold mb-4 text-lg">Quick Links</h6>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="term_conditions.php" className="text-white hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="privacy_policy.php" className="text-white hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="disclaimers.php" className="text-white hover:underline">
                  Disclaimers
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Sitemap
                </a>
              </li>
            </ul>
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
