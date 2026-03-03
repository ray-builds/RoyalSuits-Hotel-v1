import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import FeaturedRooms from '@/sections/FeaturedRooms';
import Amenities from '@/sections/Amenities';
import Dining from '@/sections/Dining';
import Testimonials from '@/sections/Testimonials';
import Location from '@/sections/Location';
import Gallery from '@/sections/Gallery';
import CTABanner from '@/sections/CTABanner';
import Booking from '@/sections/Booking';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0D0D0D]">
        <Header />
        
        <main>
          <Hero />
          <About />
          <FeaturedRooms />
          <Amenities />
          <Dining />
          <Testimonials />
          <Gallery />
          <Location />
          <CTABanner />
          <Booking />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
