import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import CategoriesGrid from '@/components/CategoriesGrid';
import NewsletterCTA from '@/components/NewsletterCTA';
import SecondSection from '@/components/SecondSection';
import CoverStories from '@/components/CoverStory';

import MonthlySection from '@/components/MonthlySection';
import FeaturedNewsLayout from '@/components/FeaturedNewsLayout';

import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="websiteBackground text-gray-800">
      <Navbar />
      <HeroSlider />
      <MonthlySection />
            <FeaturedNewsLayout />

      <SecondSection />

      <CategoriesGrid />
      <CoverStories />
      {/* <LatestNews /> */}
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
