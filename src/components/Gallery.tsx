'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

// Real gallery images
const galleryImages = [
  { id: 1, title: 'Flying Drone Pig v1.0', url: 'https://i.imgur.com/yfekhyR.jpeg' },
  { id: 2, title: 'Drone Propellers', url: 'https://i.imgur.com/NpSuerT.jpeg' },
  { id: 3, title: 'Beijing Incident Captured', url: 'https://i.imgur.com/K8fzkVN.jpeg' },
  { id: 4, title: 'Night Flight', url: 'https://i.imgur.com/b1RUYGC.jpeg' },
  { id: 5, title: 'Community Gathering', url: 'https://i.imgur.com/MrEpNlt.jpeg' },
  { id: 6, title: 'Future Vision', url: 'https://i.imgur.com/TFYocIB.jpeg' },
  { id: 7, title: 'The Herd Assembles', url: 'https://i.imgur.com/mXOGrGi.jpeg' },
  { id: 8, title: 'Neon Dreams', url: 'https://i.imgur.com/pqlZrxe.jpeg' },
  { id: 9, title: 'Technology in Action', url: 'https://i.imgur.com/ksARd9n.jpeg' },
  { id: 10, title: 'Flying High', url: 'https://i.imgur.com/e7Op5eY.jpeg' },
  { id: 11, title: 'The Rise Begins', url: 'https://i.imgur.com/5zO0i2t.jpeg' },
  { id: 12, title: 'Connected Community', url: 'https://i.imgur.com/h5gkcUj.jpeg' },
  { id: 13, title: 'The Promise of Tomorrow', url: 'https://i.imgur.com/hHPQ7AX.jpeg' },
];

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [touchStart, setTouchStart] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setScrollPosition(scrollLeft);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      container?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      scroll(diff > 0 ? 'right' : 'left');
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 w-full bg-gradient-to-b from-transparent via-purple-600/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient-pink-blue">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Visual moments from the Flying Drone Pig journey
          </p>
        </div>

        {/* Gallery carousel container */}
        <div className="relative group">
          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-gradient-to-r from-accent-pink to-accent-blue text-white transition-all duration-300 ${
              canScrollLeft
                ? 'opacity-100 hover:shadow-lg hover:shadow-pink-500/50'
                : 'opacity-30 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-pink text-white transition-all duration-300 ${
              canScrollRight
                ? 'opacity-100 hover:shadow-lg hover:shadow-blue-500/50'
                : 'opacity-30 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
          <div className="flex gap-6 pb-4 px-16 sm:px-12 md:px-0">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image card */}
                  <div className="relative group/image w-80 h-96 rounded-xl overflow-hidden glass hover:border-accent-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Actual image */}
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover group-hover/image:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-lg font-bold text-white">{image.title}</h3>
                    </div>

                    {/* Border glow effect */}
                    <div className="absolute inset-0 rounded-xl border border-gradient-pink-blue opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                      borderImage: 'linear-gradient(135deg, #ff006e, #00d9ff) 1'
                    }}></div>
                  </div>

                  {/* Image title below */}
                  <p className="mt-4 text-center text-sm font-semibold text-gray-300">
                    {image.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Usage instructions */}
        <div className="mt-12 glass rounded-lg p-6">
          <div className="flex gap-3">
            <div className="text-2xl">👆</div>
            <div>
              <h4 className="font-bold text-white mb-1">How to browse</h4>
              <p className="text-sm text-gray-400">
                Use arrow buttons to scroll • Drag horizontally • Or swipe on mobile • Hover to see image titles in high resolution
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
