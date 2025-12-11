import HeroSection from '@/components/HeroSection';
import KatalogSection from '@/components/KatalogSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HowToOrderSection from '@/components/HowToOrderSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex-1 py-8 px-4 w-full max-w-7xl mx-auto mt-20">
      <HeroSection />
      <KatalogSection />
      <WhyChooseUsSection />
      <HowToOrderSection />
      <ContactSection />
    </main>
  );
}
