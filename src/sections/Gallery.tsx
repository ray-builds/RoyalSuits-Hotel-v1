import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, ZoomIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

interface GalleryImage {
  src: string;
  category: string;
  alt: string;
}

export default function Gallery() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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

  const filters = [
    { key: 'all', label: 'gallery.all' },
    { key: 'rooms', label: 'gallery.rooms' },
    { key: 'dining', label: 'gallery.dining' },
    { key: 'rooftop', label: 'gallery.rooftop' },
    { key: 'facilities', label: 'gallery.facilities' },
    { key: 'views', label: 'gallery.views' },
  ];

  const images: GalleryImage[] = [
    { src: '/images/image(1).png', category: 'rooms', alt: 'Deluxe Room' },
    { src: '/images/image(8).png', category: 'rooms', alt: 'Twin Room' },
    { src: '/images/image(9).png', category: 'rooms', alt: 'Suite' },
    { src: '/images/image(10).png', category: 'rooms', alt: 'Single Room' },
    { src: '/images/image(11).png', category: 'rooms', alt: 'Deluxe Room' },
    { src: '/images/image(2).png', category: 'rooms', alt: 'Bathroom with Jacuzzi' },
    { src: '/images/restaurant.jpg', category: 'dining', alt: 'Restaurant' },
    { src: '/images/breakfast.jpg', category: 'dining', alt: 'Breakfast' },
    { src: '/images/rooftop.jpg', category: 'rooftop', alt: 'Rooftop Café' },
    { src: '/images/image(3).png', category: 'facilities', alt: 'Meeting Room' },
    { src: '/images/image(5).png', category: 'facilities', alt: 'Parking' },
    { src: '/images/image(6).png', category: 'facilities', alt: 'Room Service' },
    { src: '/images/image(7).png', category: 'facilities', alt: 'WiFi' },
    { src: '/images/nablus-view.jpg', category: 'views', alt: 'Nablus View' },
    { src: '/images/hero-lobby.jpg', category: 'facilities', alt: 'Hotel Lobby' },
    { src: '/images/hotel-exterior.jpg', category: 'views', alt: 'Hotel Exterior' },
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-24 bg-[#0D0D0D] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
              Visual Tour
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              {t('gallery.title') as string}
            </h2>
            <div className="divider-gold mb-8" />
          </div>

          {/* Filter Tabs */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gold text-[#0D0D0D]'
                    : 'bg-[#1A1A1A] text-cream/70 border border-gold/30 hover:border-gold/60 hover:text-cream'
                }`}
              >
                {t(filter.label) as string}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className={`group relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${(index % 8) * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-8 h-8 text-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-black/95 border-gold/30 p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-cream hover:bg-gold hover:text-[#0D0D0D] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-cream text-lg">{selectedImage.alt}</p>
                <p className="text-gold text-sm capitalize">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
