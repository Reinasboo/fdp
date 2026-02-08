'use client';

import { useState, useEffect } from 'react';

const quotes = [
  {
    text: "When pigs fly, fortunes follow.",
    author: "The Visionary Investor",
    icon: "🐷",
  },
  {
    text: "Prosperity favors the unbelievable.",
    author: "Fortune Keeper",
    icon: "✨",
  },
  {
    text: "The future belongs to those who believe pigs can fly.",
    author: "Tech Prophet",
    icon: "🚀",
  },
  {
    text: "Absurd ideas create extraordinary wealth.",
    author: "Market Enlightened",
    icon: "💎",
  },
  {
    text: "Flying pigs are just diamonds waiting to be discovered.",
    author: "Wealth Architect",
    icon: "💰",
  },
  {
    text: "In the age of impossible becoming possible, the pig that flies is king.",
    author: "Digital Philosopher",
    icon: "👑",
  },
];

export default function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleIndices = () => {
    return [
      (currentIndex - 1 + quotes.length) % quotes.length,
      currentIndex,
      (currentIndex + 1) % quotes.length,
    ];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section id="wisdom" className="w-full py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-20 animate-slide-in-up">
          <span className="inline-block px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-sm font-bold text-accent-gold uppercase tracking-widest mb-6">Wisdom</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="text-gradient-gold">Words That Resonate</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">Inspiration from believers who understand that the impossible is just tomorrow's reality.</p>
        </div>

        {/* Quote Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {visibleIndices.map((index, position) => {
              const quote = quotes[index];
              const isCenter = position === 1;

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    isCenter ? 'md:scale-105 md:z-10' : 'opacity-50 md:opacity-70 md:scale-95'
                  }`}
                >
                  <div
                    className={`relative h-full p-8 md:p-10 rounded-2xl border transition-all duration-500 flex flex-col ${
                      isCenter
                        ? 'border-accent-gold/50 bg-gradient-to-br from-gray-900/80 via-gray-900/40 to-transparent backdrop-blur'
                        : 'border-gray-800/50 bg-gray-900/30'
                    }`}
                  >
                    {/* Icon */}
                    <div className="text-5xl mb-6">{quote.icon}</div>

                    {/* Quote */}
                    <blockquote className="flex-grow mb-8">
                      <p className={`${
                        isCenter ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
                      } font-semibold text-white leading-relaxed transition-all duration-500`}>
                        "{quote.text}"
                      </p>
                    </blockquote>



                    {/* Corner accent */}
                    {isCenter && (
                      <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-accent-gold to-transparent rounded-full"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-16">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)}
              className="p-3 rounded-full border-2 border-gray-800 text-gray-400 hover:border-accent-pink hover:text-accent-pink transition-all duration-300 hover:bg-accent-pink/10"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 px-4">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent-gold w-8 h-2'
                      : 'bg-gray-700 w-2 h-2 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % quotes.length)}
              className="p-3 rounded-full border-2 border-gray-800 text-gray-400 hover:border-accent-blue hover:text-accent-blue transition-all duration-300 hover:bg-accent-blue/10"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Quote Counter */}
          <div className="text-center mt-8 text-gray-600 text-sm font-semibold uppercase tracking-wider">
            {currentIndex + 1} / {quotes.length}
          </div>
        </div>
      </div>
    </section>
  );
}
