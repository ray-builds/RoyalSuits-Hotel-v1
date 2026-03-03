import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Crown, Heart, ArrowRight } from 'lucide-react';

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: MapPin,
      title: 'about.location',
      description: 'about.locationDesc',
    },
    {
      icon: Crown,
      title: 'about.luxury',
      description: 'about.luxuryDesc',
    },
    {
      icon: Heart,
      title: 'about.hospitality',
      description: 'about.hospitalityDesc',
    },
  ];

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about-preview"
      className="py-24 bg-[#0D0D0D] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Welcome
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              {t('about.title') as string}
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-cream/70 text-lg max-w-3xl mx-auto leading-relaxed">
              {t('about.description') as string}
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`card-luxury p-8 text-center group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-cream mb-3">
                  {t(item.title) as string}
                </h3>
                <p className="text-cream/60 text-sm">
                  {t(item.description) as string}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors group"
            >
              <span className="font-medium">{t('about.discoverMore') as string}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
