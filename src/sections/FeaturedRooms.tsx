import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Bed, Users, Maximize, ArrowRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Room {
  id: string;
  nameKey: string;
  nameArKey: string;
  descKey: string;
  image: string;
  price: number;
  size: number;
  maxGuests: number;
  bedType: string;
  bedTypeAr: string;
  badge?: string;
  badgeKey?: string;
}

export default function FeaturedRooms() {
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

  const rooms: Room[] = [
    {
      id: 'deluxe-double',
      nameKey: 'rooms.deluxeDouble',
      nameArKey: 'rooms.deluxeDoubleAr',
      descKey: 'rooms.deluxeDoubleDesc',
      image: '/images/image(1).png',
      price: 85,
      size: 32,
      maxGuests: 2,
      bedType: '1 King Bed',
      bedTypeAr: 'سرير كينج',
    },
    {
      id: 'suite-balcony',
      nameKey: 'rooms.suiteBalcony',
      nameArKey: 'rooms.suiteBalconyAr',
      descKey: 'rooms.suiteBalconyDesc',
      image: '/images/image(9).png',
      price: 120,
      size: 55,
      maxGuests: 4,
      bedType: '1 King + 2 Sofa Beds',
      bedTypeAr: 'كينج + 2 أريكة',
      badge: 'mostPopular',
      badgeKey: 'badge.mostPopular',
    },
    {
      id: 'family-suite',
      nameKey: 'rooms.familySuite',
      nameArKey: 'rooms.familySuiteAr',
      descKey: 'rooms.familySuiteDesc',
      image: '/images/image(2).png',
      price: 150,
      size: 75,
      maxGuests: 4,
      bedType: '2 Bedrooms',
      bedTypeAr: 'غرفتان',
      badge: 'familyFriendly',
      badgeKey: 'badge.familyFriendly',
    },
  ];

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRooms = () => {
    const element = document.querySelector('#rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="rooms"
      className="py-24 bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Accommodations
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              {t('rooms.title') as string}
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              {t('rooms.subtitle') as string}
            </p>
          </div>

          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={`card-luxury group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={t(room.nameKey) as string}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                  
                  {/* Badge */}
                  {room.badge && (
                    <Badge className="absolute top-4 left-4 bg-gold text-[#0D0D0D] font-semibold">
                      <Star className="w-3 h-3 mr-1" fill="currentColor" />
                      {t(room.badgeKey!) as string}
                    </Badge>
                  )}

                  {/* Price */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <span className="text-gold text-sm">{t('rooms.startingFrom') as string}</span>
                    <p className="text-2xl font-bold text-cream">
                      ${room.price}
                      <span className="text-sm font-normal text-cream/60">{t('rooms.perNight') as string}</span>
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cream mb-2">
                    {t(room.nameKey) as string}
                  </h3>
                  <p className="text-gold/80 text-sm mb-4">
                    {language === 'en' ? (t(room.nameArKey) as string) : (t(room.nameKey) as string)}
                  </p>
                  <p className="text-cream/60 text-sm mb-6 line-clamp-2">
                    {t(room.descKey) as string}
                  </p>

                  {/* Room Details */}
                  <div className="flex items-center gap-4 mb-6 text-sm text-cream/70">
                    <div className="flex items-center gap-1">
                      <Maximize className="w-4 h-4 text-gold" />
                      <span>{room.size} {t('rooms.sqm') as string}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gold" />
                      <span>{room.maxGuests}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-gold" />
                      <span>{language === 'en' ? room.bedType : room.bedTypeAr}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={scrollToBooking}
                      className="flex-1 btn-gold text-sm py-2.5"
                    >
                      {t('rooms.bookNow') as string}
                    </button>
                    <button
                      onClick={scrollToRooms}
                      className="px-4 py-2.5 border border-gold/30 text-gold rounded-md hover:bg-gold/10 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Rooms CTA */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={scrollToRooms}
              className="btn-outline-gold inline-flex items-center gap-2"
            >
              {t('rooms.compare') as string}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
