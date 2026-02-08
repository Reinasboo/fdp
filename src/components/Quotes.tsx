'use client';

import { useState, useEffect } from 'react';

const quotes = [
  {
    text: "When pigs fly, fortunes follow.",
    author: "Investor's Wisdom",
    icon: "🐷",
  },
  {
    text: "Prosperity favors the unbelievable.",
    author: "Fortune Teller",
    icon: "✨",
  },
  {
    text: "The future belongs to those who believe pigs can fly.",
    author: "Tech Visionary",
    icon: "🚀",
  },
  {
    text: "Absurd ideas create extraordinary wealth.",
    author: "Memecoin Pioneer",
    icon: "💎",
  },
  {
    text: "Flying pigs are just diamonds waiting to be discovered.",
    author: "Market Analyst",
    icon: "💰",
  },
  {
    text: "In the age of impossible becoming possible, the pig that flies is king.",
    author: "Blockchain Believer",
    icon: "👑",
  },
];

export default function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const getVisibleIndices = () => {
    return [
      (currentIndex - 1 + quotes.length) % quotes.length,
      currentIndex,
      (currentIndex + 1) % quotes.length,
    ];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section id="quotes" className="py-20 md:py-32 w-full bg-gradient-to-b from-transparent via-pink-600/5 to-transparent relative overflow-hidden">
      {/* Decorative borders */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent-pink to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient-gold">Words of Wisdom</span>
          </h2>
          <p className="text-gray-400 text-lg">Inspiration from believers across the world</p>
        </div>

        {/* Quote carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {visibleIndices.map((index, position) => {
              const quote = quotes[index];
              const isCenter = position === 1;

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    isCenter
                      ? 'md:scale-110 md:z-10'
                      : 'opacity-50 md:opacity-70 md:scale-90'
                  }`}
                >
                  <div
                    className={`glass rounded-xl p-8 h-full flex flex-col justify-between transform transition-all duration-500 ${
                      isCenter
                        ? 'border-accent-gold/50 bg-gradient-to-br from-amber-900/20 to-transparent'
                        : 'border-gray-600/30'
                    }`}
                  >
                    {/* Icon */}
                    <div className="text-4xl mb-4">{quote.icon}</div>

                    {/* Quote text */}
                    <blockquote className="flex-grow">
                      <p className="text-lg md:text-xl font-semibold text-white mb-2 leading-relaxed">
                        "{quote.text}"
                      </p>
                    </blockquote>

                    {/* Author */}
                    <p className="text-accent-gold text-sm font-semibold mt-6">
                      — {quote.author}
                    </p>

                    {/* Decorative corner */}
                    <div className="mt-4 flex justify-end">
                      <div className="w-8 h-8 border-r-2 border-b-2 border-accent-gold/30 rounded-br-md"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-gray-600 text-gray-400 hover:border-accent-pink hover:text-accent-pink transition-smooth hover:bg-accent-pink/10"
              aria-label="Previous quote"
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

            {/* Dots */}
            <div className="flex items-center gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'next' : 'prev');
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent-gold w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-gray-600 text-gray-400 hover:border-accent-blue hover:text-accent-blue transition-smooth hover:bg-accent-blue/10"
              aria-label="Next quote"
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
          </div>

          {/* Quote counter */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            {currentIndex + 1} / {quotes.length}
          </div>
        </div>
      </div>
    </section>
  );
}
