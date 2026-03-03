import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const { language, direction, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.home', href: '#home', id: 'home' },
    { key: 'nav.rooms', href: '#rooms', id: 'rooms' },
    { key: 'nav.dining', href: '#dining', id: 'dining' },
    { key: 'nav.facilities', href: '#facilities', id: 'facilities' },
    { key: 'nav.about', href: '#about', id: 'about' },
    { key: 'nav.gallery', href: '#gallery', id: 'gallery' },
    { key: 'nav.contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12">
              <img
                src="/images/image.png"
                alt="Royal Suites Hotel"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-cream font-ui tracking-wider">
                RoYal Suites
              </h1>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-gold text-xs">★</span>
                ))}
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
                  currentPage === link.id
                    ? 'text-gold bg-gold/10'
                    : 'text-cream/80 hover:text-gold hover:bg-gold/5'
                }`}
              >
                {t(link.key) as string}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-cream/80 hover:text-gold transition-colors duration-300 border border-gold/30 rounded-md hover:border-gold/60"
            >
              <span className={language === 'en' ? 'text-gold' : ''}>EN</span>
              <span className="text-gold/50">|</span>
              <span className={language === 'ar' ? 'text-gold' : ''}>عربي</span>
            </button>

            {/* Book Now Button - Desktop */}
            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); scrollToSection('#booking'); }}
              className="hidden md:flex btn-gold items-center gap-2 text-sm"
            >
              {t('nav.bookNow') as string}
            </a>

            {/* Phone - Desktop */}
            <a
              href="tel:+970000000000"
              className="hidden lg:flex items-center gap-2 text-cream/80 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-cream hover:text-gold hover:bg-gold/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side={direction === 'rtl' ? 'left' : 'right'} 
                className="w-[300px] bg-[#0D0D0D] border-gold/20"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 pb-6 border-b border-gold/20">
                    <img
                      src="/images/image.png"
                      alt="Royal Suites Hotel"
                      className="w-10 h-10 object-contain"
                    />
                    <div>
                      <h2 className="text-cream font-ui font-semibold">RoYal Suites</h2>
                      <div className="flex gap-0.5">
                        {[...Array(4)].map((_, i) => (
                          <span key={i} className="text-gold text-xs">★</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Nav Links */}
                  <nav className="flex flex-col gap-2 py-6">
                    {navLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                        className={`px-4 py-3 text-lg font-medium rounded-md transition-all duration-300 ${
                          currentPage === link.id
                            ? 'text-gold bg-gold/10'
                            : 'text-cream/80 hover:text-gold hover:bg-gold/5'
                        }`}
                      >
                        {t(link.key) as string}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile Book Now */}
                  <div className="mt-auto pt-6 border-t border-gold/20">
                    <a
                      href="#booking"
                      onClick={(e) => { e.preventDefault(); scrollToSection('#booking'); }}
                      className="btn-gold w-full text-center block"
                    >
                      {t('nav.bookNow') as string}
                    </a>

                    {/* Mobile Contact Info */}
                    <div className="mt-6 space-y-3">
                      <a
                        href="tel:+970000000000"
                        className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span>+970 000 000 000</span>
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6 flex items-center justify-center gap-4">
                      <a
                        href="https://facebook.com/TheRoyalSuitesHotel.Nablus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-[#0D0D0D] transition-all"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
