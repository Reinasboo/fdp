'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="https://i.imgur.com/0jsGt7u.png"
              alt="FDP Logo"
              width={40}
              height={40}
              className="animate-float"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-gradient-pink-blue">
                $FDP
              </h1>
              <p className="text-xs text-gray-500">Flying Drone Pig</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-smooth">
              Home
            </a>
            <a href="#news" className="text-gray-400 hover:text-white transition-smooth">
              News
            </a>
            <a href="#quotes" className="text-gray-400 hover:text-white transition-smooth">
              Quotes
            </a>
            <a href="#gallery" className="text-gray-400 hover:text-white transition-smooth">
              Gallery
            </a>
            <a href="#token" className="text-gray-400 hover:text-white transition-smooth">
              Token
            </a>
            <a
              href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-smooth"
            >
              Buy $FDP
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-smooth"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-in-up">
            <a href="#home" className="block py-2 text-gray-400 hover:text-white transition-smooth">
              Home
            </a>
            <a href="#news" className="block py-2 text-gray-400 hover:text-white transition-smooth">
              News
            </a>
            <a href="#quotes" className="block py-2 text-gray-400 hover:text-white transition-smooth">
              Quotes
            </a>
            <a href="#gallery" className="block py-2 text-gray-400 hover:text-white transition-smooth">
              Gallery
            </a>
            <a href="#token" className="block py-2 text-gray-400 hover:text-white transition-smooth">
              Token
            </a>
            <a
              href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-6 py-2 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full text-white font-semibold text-center hover:shadow-lg hover:shadow-pink-500/50 transition-smooth"
            >
              Buy $FDP
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
