import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Clock, ArrowRight, Utensils, Coffee, Moon } from 'lucide-react';

export default function Dining() {
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

  const diningOptions = [
    {
      id: 'restaurant',
      title: 'dining.restaurant.title',
      description: 'dining.restaurant.desc',
      hours: 'dining.restaurant.hours',
      image: '/images/restaurant.jpg',
      icon: Utensils,
    },
    {
      id: 'rooftop',
      title: 'dining.rooftop.title',
      description: 'dining.rooftop.desc',
      hours: 'dining.rooftop.hours',
      image: '/images/rooftop.jpg',
      icon: Moon,
    },
  ];

  const scrollToDining = () => {
    const element = document.querySelector('#dining');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="dining"
      className="py-24 bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Culinary Experience
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              {t('dining.title') as string}
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              {t('dining.subtitle') as string}
            </p>
          </div>

          {/* Dining Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {diningOptions.map((option, index) => (
              <div
                key={option.id}
                className={`group card-luxury overflow-hidden transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={option.image}
                    alt={t(option.title) as string}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/30">
                    <option.icon className="w-7 h-7 text-gold" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-cream mb-4">
                    {t(option.title) as string}
                  </h3>
                  <p className="text-cream/60 mb-6 leading-relaxed">
                    {t(option.description) as string}
                  </p>
                  
                  {/* Hours */}
                  <div className="flex items-center gap-2 text-gold mb-6">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">{t(option.hours) as string}</span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={scrollToDining}
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors group/btn"
                  >
                    <span className="font-medium">{t('dining.explore') as string}</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Breakfast Banner */}
          <div
            className={`mt-12 relative rounded-xl overflow-hidden transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src="/images/breakfast.jpg"
                alt="Breakfast"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/95 via-[#0D0D0D]/80 to-transparent" />
            </div>
            
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-cream mb-3">
                  {t('dining.breakfast.title') as string}
                </h3>
                <p className="text-cream/70 mb-2">
                  {t('dining.breakfast.types') as string}
                </p>
                <p className="text-cream/60 text-sm">
                  {t('dining.breakfast.specialties') as string}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Coffee className="w-12 h-12 text-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
