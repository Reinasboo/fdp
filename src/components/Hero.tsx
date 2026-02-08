'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="animate-slide-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
                <span className="text-gradient-pink-blue">Flying Drone Pig</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-300 mb-2">
                <span className="text-accent-blue">$FDP</span>
              </p>
            </div>

            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-white font-semibold">"When pigs fly… electricity stops."</span>
            </p>

            <p className="text-base md:text-lg text-gray-500 max-w-md animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Experience the future of memecoin culture on Solana. Absurd? Yes. Profitable? We believe so.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-smooth text-center"
              >
                Buy on Pump.fun
              </a>
              <a
                href="https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-accent-blue text-accent-blue font-bold rounded-lg hover:bg-accent-blue/10 transition-smooth text-center"
              >
                View Chart
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
              <div className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-accent-gold text-2xl font-bold">100M+</p>
                <p className="text-gray-500 text-sm">Total Supply</p>
              </div>
              <div className="animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
                <p className="text-accent-blue text-2xl font-bold">Solana</p>
                <p className="text-gray-500 text-sm">Network</p>
              </div>
              <div className="animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-pink-500 text-2xl font-bold">∞</p>
                <p className="text-gray-500 text-sm">Gains Potential</p>
              </div>
            </div>
          </div>

          {/* Right side - Animated pig illustration */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Glowing orb */}
              <div className="absolute inset-0 animate-pulse">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 filter blur-3xl"></div>
              </div>

              {/* Logo with enhanced animation */}
              <div className="relative z-10 animate-float">
                <Image
                  src="https://i.imgur.com/0jsGt7u.png"
                  alt="Flying Drone Pig"
                  width={300}
                  height={300}
                  className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl animate-pulse-glow"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 border-2 border-accent-blue/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 left-5 w-12 h-12 border-2 border-accent-pink/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
