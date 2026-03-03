import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  country: string;
  countryCode: string;
  rating: number;
  text: string;
}

export default function Testimonials() {
  const { t, language } = useLanguage();
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

  const testimonials: Testimonial[] = [
    {
      name: 'Yves',
      country: 'France',
      countryCode: 'FR',
      rating: 5,
      text: language === 'en' 
        ? 'All staff, all facilities, both restaurant and bar were above our expectations! The rooftop view is absolutely stunning.'
        : 'كل الموظفين وكل المرافق، المطعم والبار كانوا فوق توقعاتنا! إطلالة السطح مذهلة تماماً.',
    },
    {
      name: 'Ibrahem',
      country: 'Israel',
      countryCode: 'IL',
      rating: 5,
      text: language === 'en'
        ? 'Clean, great breakfast, reasonable price, and most importantly — a quiet place without any noise. Highly recommended!'
        : 'نظيف، إفطار رائع، سعر معقول، والأهم من ذلك — مكان هادئ بدون أي ضوضاء. موصى به بشدة!',
    },
    {
      name: 'Smaher',
      country: 'Israel',
      countryCode: 'IL',
      rating: 5,
      text: language === 'en'
        ? 'Excellent location, wonderful service, excellent breakfast. The restaurant above the hotel — the seating is beyond imagination.'
        : 'موقع ممتاز، خدمة رائعة، إفطار ممتاز. المطعم فوق الفندق — الجلوس يفوق الخيال.',
    },
  ];

  const ratings = [
    { label: 'testimonials.staff', value: 8.3 },
    { label: 'testimonials.cleanliness', value: 8.3 },
    { label: 'testimonials.location', value: 8.6 },
    { label: 'testimonials.wifi', value: 8.8 },
    { label: 'testimonials.facilities', value: 7.8 },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#0D0D0D] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Reviews
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              {t('testimonials.title') as string}
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-cream/70 text-lg">
              {t('testimonials.subtitle') as string}
            </p>
          </div>

          {/* Rating Bars */}
          <div
            className={`grid grid-cols-2 md:grid-cols-5 gap-6 mb-16 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {ratings.map((rating, index) => (
              <div key={rating.label} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="#2C2C2C"
                      strokeWidth="6"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${(rating.value / 10) * 226} 226`}
                      className="transition-all duration-1000"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">{rating.value}</span>
                  </div>
                </div>
                <p className="text-cream/60 text-sm">{t(rating.label) as string}</p>
              </div>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`card-luxury p-8 relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold" fill="currentColor" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-cream/80 mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-semibold text-lg">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-cream font-medium">{testimonial.name}</p>
                    <p className="text-cream/50 text-sm flex items-center gap-2">
                      <span className="text-lg">{testimonial.countryCode === 'FR' ? '🇫🇷' : '🇮🇱'}</span>
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
