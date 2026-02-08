'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-gray-800/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Premium floating animation */}
          <a href="#home" className="flex items-center gap-3 group hover:opacity-90 transition-opacity duration-300">
            <div className="relative">
              <Image
                src="https://i.imgur.com/0jsGt7u.png"
                alt="FDP Logo"
                width={48}
                height={48}
                className="animate-subtle-float group-hover:animate-glow-pulse"
              />
              {/* Ambient glow ring */}
              <div className="absolute inset-0 rounded-full border border-accent-pink/20 group-hover:border-accent-pink/50 transition-colors duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-black bg-gradient-to-r from-accent-pink via-accent-blue to-accent-magenta bg-clip-text text-transparent">$FDP</div>
              <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mt-1">Flying Drone Pig</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <nav className="flex items-center gap-10">
              {['Home', 'Story', 'Wisdom', 'Gallery', 'Token', 'Community'].map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {item}
                  {/* Neon underline on hover */}
                  <span className="absolute inset-x-0 -bottom-1.5 h-0.5 bg-gradient-to-r from-transparent via-accent-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
                  {/* Glow effect */}
                  <span className="absolute inset-x-0 -bottom-1.5 h-0.5 bg-cyan-400/0 group-hover:bg-cyan-400/40 blur-sm scale-x-0 group-hover:scale-x-100 transition-all origin-center duration-300"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button - Premium styling with motion */}
            <a
              href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-accent-pink to-accent-blue text-black font-black rounded-xl hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 text-sm uppercase tracking-wider group overflow-hidden relative"
            >
              {/* Animated background gradient shift */}
              <span className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Buy $FDP</span>
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-900/50 transition-all duration-300 border border-gray-800/30 hover:border-accent-pink/50"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Smooth animation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-gray-800/30 pt-4 animate-slide-fade">
            <nav className="flex flex-col gap-2">
              {['Home', 'Story', 'Wisdom', 'Gallery', 'Token', 'Community'].map((item, idx) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-gray-400 hover:text-white transition-colors px-4 py-3 rounded-lg hover:bg-gray-900/40 border border-transparent hover:border-accent-pink/30 duration-300"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${idx * 30}ms` }}
                >
                  {item}
                </a>
              ))}
              
              {/* Mobile CTA */}
              <a
                href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-3 bg-gradient-to-r from-accent-pink to-accent-blue text-black font-bold rounded-lg text-center text-sm uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                Buy $FDP
              </a>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
