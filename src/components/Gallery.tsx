
// export default Gallery;


import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  { id: 1, type: 'image', src: '/images/gallery/recognition_1.JPG', alt: 'Winning scholarships', category: 'Awards' },
  { id: 2, type: 'image', src: '/images/gallery/recognition.JPG', alt: 'Winning for Leadership of 4 years in college', category: 'Awards' },
  // { id: 3, type: 'image', src: '/images/gallery/robot_3.png', alt: 'Working on multiple autonomous robot in college lab', category: 'Robotics' },
  // { id: 4, type: 'image', src: '/images/gallery/robot_2.png', alt: 'Working on robot', category: 'Robotics' },
  // { id: 5, type: 'image', src: '/images/gallery/robot_1.png', alt: 'Working on robot', category: 'Robotics' },
  { id: 3, type: 'image', src: '/images/gallery/CAD_1.JPG', alt: 'CAD model of robots', category: 'CAD Models' },
  { id: 4, type: 'image', src: '/images/gallery/CAD_2.JPG', alt: 'CAD model of robots', category: 'CAD Models' },
  { id: 5, type: 'image', src: '/images/gallery/isro.JPG', alt: 'Life at ISRO', category: 'College Life' },
  // { id: 9, type: 'image', src: '/images/gallery/stage.png', alt: 'Mentoring juniors for club introduction', category: 'College Life' },
  { id: 6, type: 'image', src: '/images/gallery/college.jpg', alt: 'Just me <3', category: 'College Life' }
];

const categories = ['All', 'Awards', 'College Life', 'Robotics', 'CAD Models'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleItems(prev => new Set([...prev, index]));
          }, index * 100);
        }
      });
    }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });

    imageRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => { imageRefs.current.forEach((ref) => { if (ref) observer.unobserve(ref); }); };
  }, [filteredImages]);

  useEffect(() => { setVisibleItems(new Set()); }, [selectedCategory]);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="relative py-20 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3F4F5] via-[#eaa6c4]/50 to-[#f7838d] animate-gradient-flow" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f7838d] hover:text-black transition-colors duration-300">
            Gallery
          </h2>
          <p className="text-lg text-[#f7838d]/90 hover:text-black transition-colors max-w-2xl mx-auto mb-8">
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
                className={`px-4 py-2 transition-all duration-300 ${selectedCategory === category
                    ? 'bg-gradient-to-r from-[#eaa6c4] to-[#f7838d] text-black scale-105 hover:text-black'
                    : 'border-[#f7838d] text-[#f7838d] hover:bg-[#f7838d]/20 hover:text-black'
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
                className={`group relative cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f7838d]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-black/80 text-[#f7838d] text-sm rounded-full font-semibold mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-[#f7838d] hover:text-black font-semibold text-lg transition-colors">{image.alt}</h3>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-black/50 rounded-full">
                      <ZoomIn className="w-5 h-5 text-[#f7838d]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeLightbox}>
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
              <button onClick={closeLightbox} className="absolute top-4 right-4 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors" aria-label="Close lightbox">
                <X className="w-6 h-6 text-[#f7838d]" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[#f7838d] hover:text-black font-semibold text-lg transition-colors">{selectedImage.alt}</h3>
                    <span className="text-[#f7838d] text-sm">{selectedImage.category}</span>
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
