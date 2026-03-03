import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.rooms', href: '#rooms' },
    { key: 'nav.dining', href: '#dining' },
    { key: 'nav.facilities', href: '#facilities' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.contact', href: '#contact' },
    { key: 'nav.bookNow', href: '#booking' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D0D0D] border-t border-gold/20">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/image.png"
                alt="Royal Suites Hotel"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-cream font-ui">
                  RoYal Suites
                </h3>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-gold">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              {t('footer.tagline') as string}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/TheRoyalSuitesHotel.Nablus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-[#0D0D0D] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-[#0D0D0D] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/970000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-[#0D0D0D] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-6 font-ui">
              {t('footer.quickLinks') as string}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {t(link.key) as string}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-6 font-ui">
              {t('footer.contact') as string}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">
                  {t('location.address') as string}
                </span>
              </li>
              <li>
                <a
                  href="tel:+970000000000"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>+970 000 000 000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@royalsuites.ps"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>info@royalsuites.ps</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-cream/70 text-sm">
                  <p>{t('location.checkIn') as string}</p>
                  <p>{t('location.checkOut') as string}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-6 font-ui">
              {t('footer.location') as string}
            </h4>
            <div className="relative rounded-lg overflow-hidden border border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.1234567890123!2d35.23456789012345!3d32.23456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE0JzA0LjQiTiAzNcKwMTQnMDQuNCJF!5e0!3m2!1sen!2sps!4v1234567890123!5m2!1sen!2sps"
                width="100%"
                height="150"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Suites Hotel Location"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Rafidya+Main+Road+Nablus+Palestine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-gold hover:text-gold-light transition-colors text-sm"
            >
              <MapPin className="w-4 h-4" />
              {t('location.directions') as string}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm text-center md:text-left">
              © 2025 RoYal Suites Hotel. {t('footer.rights') as string}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors text-sm">
                {t('footer.privacy') as string}
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors text-sm">
                {t('footer.terms') as string}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cream/50 text-sm">{t('footer.payment') as string}:</span>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <svg className="w-6 h-4" viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="#1A1F71"/>
                    <path d="M19.2 22.4L21.6 9.6H25.2L22.8 22.4H19.2Z" fill="white"/>
                    <path d="M32.4 9.8C31.6 9.5 30.4 9.2 29 9.2C25.4 9.2 22.8 11.2 22.8 14C22.8 16 24.6 17.1 25.9 17.7C27.3 18.4 27.8 18.8 27.8 19.4C27.8 20.3 26.7 20.7 25.6 20.7C24.2 20.7 23.4 20.5 22.2 20L21.7 19.8L21.2 22.8C22.2 23.2 23.9 23.5 25.6 23.5C29.5 23.5 32 21.5 32 18.5C32 16.9 30.9 15.7 28.9 14.8C27.6 14.2 26.8 13.8 26.8 13.1C26.8 12.5 27.5 11.9 28.8 11.9C29.9 11.9 30.7 12.1 31.4 12.4L31.8 12.6L32.4 9.8Z" fill="white"/>
                  </svg>
                </div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <svg className="w-6 h-4" viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="#EB001B"/>
                    <circle cx="18" cy="16" r="10" fill="#EB001B"/>
                    <circle cx="30" cy="16" r="10" fill="#F79E1B"/>
                    <path d="M24 8.8C26.4 10.6 28 13.6 28 16C28 18.4 26.4 21.4 24 23.2C21.6 21.4 20 18.4 20 16C20 13.6 21.6 10.6 24 8.8Z" fill="#FF5F00"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
