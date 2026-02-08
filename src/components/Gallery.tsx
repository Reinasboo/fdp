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
    <section id="gallery" className="w-full py-24 md:py-32 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-subtle-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20 animate-slide-fade">
          <div className="inline-block group mb-6">
            <span className="relative inline-block px-4 py-2 bg-gradient-to-r from-accent-pink/15 to-accent-blue/15 border border-accent-pink/40 rounded-full text-xs font-bold text-accent-pink uppercase tracking-widest group-hover:border-accent-pink/60 transition-colors duration-300">
              🖼️ Visual Journey
            </span>
            <div className="absolute inset-0 rounded-full bg-accent-pink/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6">
            <span>Visual Journey</span>
            <span className="block bg-gradient-to-r from-accent-pink via-accent-blue to-accent-cyan bg-clip-text text-transparent mt-2">Across Time</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">Iconic moments from theFlying Drone Pig's extraordinary flight. Swipe, scroll, or use arrows to explore.</p>
        </div>

        {/* Gallery carousel container */}
        <div className="relative group animate-slide-fade" style={{ animationDelay: '0.1s' }}>
          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className={`absolute -left-6 md:left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 md:p-4 rounded-full border-2 transition-all duration-300 ${
              canScrollLeft
                ? 'border-accent-pink text-accent-pink hover:bg-accent-pink/10 hover:shadow-lg hover:shadow-pink-500/30'
                : 'border-gray-700 text-gray-600 cursor-not-allowed opacity-40'
            }`}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
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
            className={`absolute -right-6 md:right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 md:p-4 rounded-full border-2 transition-all duration-300 ${
              canScrollRight
                ? 'border-accent-blue text-accent-blue hover:bg-accent-blue/10 hover:shadow-lg hover:shadow-blue-500/30'
                : 'border-gray-700 text-gray-600 cursor-not-allowed opacity-40'
            }`}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
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
            <div className="flex gap-6 pb-4 px-8 md:px-0">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image card */}
                  <div className="relative group/image w-72 md:w-80 h-80 md:h-96 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Actual image */}
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover group-hover/image:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">{image.title}</h3>
                        <p className="text-sm text-gray-300 mt-2">Photo #{image.id} · Click to view</p>
                      </div>
                    </div>
                  </div>

                  {/* Image title below */}
                  <p className="mt-4 text-center text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    {image.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Usage instructions */}
        <div className="mt-16 border border-gray-800/50 rounded-2xl p-6 md:p-8 bg-gray-900/30 backdrop-blur">
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">📱</div>
            <div>
              <h4 className="font-bold text-lg text-white mb-3">How to explore</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-sm text-gray-300">
                  <span className="text-accent-blue font-semibold">← → Arrows:</span> Navigate left and right
                </div>
                <div className="text-sm text-gray-300">
                  <span className="text-accent-pink font-semibold">Drag:</span> Click and drag horizontally
                </div>
                <div className="text-sm text-gray-300">
                  <span className="text-accent-gold font-semibold">Swipe:</span> Touch and swipe on mobile
                </div>
              </div>
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
