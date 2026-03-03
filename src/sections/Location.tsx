import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Clock, Navigation, Landmark, Building2, Factory, Mountain, Church } from 'lucide-react';

export default function Location() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nearbyAttractions = [
    { key: 'location.oldCity', icon: Landmark },
    { key: 'location.mosque', icon: Building2 },
    { key: 'location.soapFactory', icon: Factory },
    { key: 'location.mountGerizim', icon: Mountain },
    { key: 'location.jacobsWell', icon: Church },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              {t('location.title') as string}
            </h2>
            <div className="divider-gold mb-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden border border-gold/20 h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.1234567890123!2d35.23456789012345!3d32.23456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE0JzA0LjQiTiAzNcKwMTQnMDQuNCJF!5e0!3m2!1sen!2sps!4v1234567890123!5m2!1sen!2sps"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Suites Hotel Location"
                />
                
                {/* Location Score Badge */}
                <div className="absolute top-4 left-4 bg-[#0D0D0D]/90 backdrop-blur-sm border border-gold/30 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-gold font-bold text-lg">8.6</p>
                      <p className="text-cream/60 text-xs">Location Score</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div
              className={`space-y-8 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Address */}
              <div className="card-luxury p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cream mb-2">
                      {t('footer.location') as string}
                    </h3>
                    <p className="text-cream/70">
                      {t('location.address') as string}
                    </p>
                    <p className="text-gold text-sm mt-2">
                      {t('location.distance') as string}
                    </p>
                  </div>
                </div>
              </div>

              {/* Check-in/out Times */}
              <div className="card-luxury p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cream mb-2">
                      Check-in / Check-out
                    </h3>
                    <div className="space-y-1 text-cream/70">
                      <p>{t('location.checkIn') as string}</p>
                      <p>{t('location.checkOut') as string}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className="card-luxury p-6">
                <h3 className="text-lg font-semibold text-cream mb-4">
                  {t('location.nearby') as string}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {nearbyAttractions.map((attraction) => (
                    <div
                      key={attraction.key}
                      className="flex items-center gap-3 text-cream/70"
                    >
                      <attraction.icon className="w-5 h-5 text-gold" />
                      <span className="text-sm">{t(attraction.key) as string}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Directions Button */}
              <a
                href="https://maps.google.com/?q=Rafidya+Main+Road+Nablus+Palestine"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                {t('location.directions') as string}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
