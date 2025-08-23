import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    id: 1,
    src: '/placeholder.svg',
    alt: 'Modern web design showcase',
    category: 'Web Design'
  },
  {
    id: 2,
    src: '/placeholder.svg',
    alt: 'Mobile app interface',
    category: 'Mobile UI'
  },
  {
    id: 3,
    src: '/placeholder.svg',
    alt: 'Brand identity design',
    category: 'Branding'
  },
  {
    id: 4,
    src: '/placeholder.svg',
    alt: 'Dashboard analytics',
    category: 'Data Viz'
  },
  {
    id: 5,
    src: '/placeholder.svg',
    alt: 'E-commerce design',
    category: 'Web Design'
  },
  {
    id: 6,
    src: '/placeholder.svg',
    alt: 'Logo collection',
    category: 'Branding'
  },
  {
    id: 7,
    src: '/placeholder.svg',
    alt: 'Mobile app screens',
    category: 'Mobile UI'
  },
  {
    id: 8,
    src: '/placeholder.svg',
    alt: 'Data visualization',
    category: 'Data Viz'
  },
  {
    id: 9,
    src: '/placeholder.svg',
    alt: 'Website mockup',
    category: 'Web Design'
  }
];

const categories = ['All', 'Web Design', 'Mobile UI', 'Branding', 'Data Viz'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleItems(prev => new Set([...prev, index]));
          }, index * 100);
        }
      });
    }, observerOptions);

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredImages]);

  // Reset visible items when category changes
  useEffect(() => {
    setVisibleItems(new Set());
  }, [selectedCategory]);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="py-20 px-6 bg-gradient-to-br from-blush/5 via-background to-butter/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A visual collection of my design work, showcasing creativity across different mediums and styles
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-hero text-white scale-105'
                    : 'border-tangerine text-tangerine hover:bg-tangerine hover:text-white'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => {
            const isVisible = visibleItems.has(index);
            
            return (
              <div
                key={`${image.id}-${selectedCategory}`}
                ref={(el) => (imageRefs.current[index] = el)}
                data-index={index}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tangerine/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-white/90 text-tangerine text-sm rounded-full font-semibold mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg">
                        {image.alt}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-white/90 rounded-full">
                      <ZoomIn className="w-5 h-5 text-tangerine" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {selectedImage.alt}
                    </h3>
                    <span className="text-tangerine text-sm">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;