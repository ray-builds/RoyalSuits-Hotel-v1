import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Wifi,
  Utensils,
  Coffee,
  Bath,
  Car,
  Clock,
  Dumbbell,
  Users,
  Plane,
  Bell,
  Tv,
  Wine,
  Wind,
  Shield,
  Sparkles,
  Shirt,
} from 'lucide-react';

interface Amenity {
  icon: React.ElementType;
  key: string;
}

export default function Amenities() {
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

  const amenities: Amenity[] = [
    { icon: Wifi, key: 'amenities.wifi' },
    { icon: Utensils, key: 'amenities.restaurant' },
    { icon: Coffee, key: 'amenities.rooftop' },
    { icon: Bath, key: 'amenities.jacuzzi' },
    { icon: Car, key: 'amenities.parking' },
    { icon: Clock, key: 'amenities.reception' },
    { icon: Dumbbell, key: 'amenities.gym' },
    { icon: Users, key: 'amenities.meeting' },
    { icon: Plane, key: 'amenities.transfer' },
    { icon: Bell, key: 'amenities.roomService' },
    { icon: Tv, key: 'amenities.tv' },
    { icon: Wine, key: 'amenities.minibar' },
    { icon: Wind, key: 'amenities.ac' },
    { icon: Shield, key: 'amenities.safe' },
    { icon: Sparkles, key: 'amenities.hairdryer' },
    { icon: Shirt, key: 'amenities.housekeeping' },
  ];

  return (
    <section
      ref={sectionRef}
      id="facilities"
      className="py-24 bg-[#0D0D0D] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              {t('amenities.title') as string}
            </h2>
            <div className="divider-gold mb-8" />
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={amenity.key}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1A1A1A] border border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                  <amenity.icon className="w-7 h-7 text-gold/70 group-hover:text-gold transition-colors" />
                </div>
                <p className="text-cream/70 text-sm group-hover:text-cream transition-colors">
                  {t(amenity.key) as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
