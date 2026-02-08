'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="https://i.imgur.com/0jsGt7u.png"
              alt="FDP Logo"
              width={48}
              height={48}
              className="animate-float"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-black text-gradient-pink-blue">$FDP</div>
              <div className="text-xs text-gray-500 font-medium tracking-wide">FLYING DRONE PIG</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <nav className="flex items-center gap-8">
              {['Home', 'Story', 'Wisdom', 'Gallery', 'Token', 'Community'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-accent-pink to-accent-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              ))}
            </nav>

            <a
              href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-accent-pink to-accent-blue text-white font-bold rounded-lg hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 text-sm uppercase tracking-wide"
            >
              Buy $FDP
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-gray-800/50 pt-4 animate-slide-in-up">
            <nav className="flex flex-col gap-3">
              {['Home', 'Story', 'Wisdom', 'Gallery', 'Token', 'Community'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <a
              href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block px-6 py-3 bg-gradient-to-r from-accent-pink to-accent-blue text-white font-bold rounded-lg text-center text-sm uppercase tracking-wide"
            >
              Buy $FDP
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
