'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-20 overflow-hidden" >
      {/* Background gradients - more subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-pink/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-blue/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Main Headline */}
            <div className="space-y-6 animate-slide-in-up">
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent-pink/10 border border-accent-pink/30 rounded-full text-sm font-bold text-accent-pink uppercase tracking-widest">Memecoin Revolution</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-gradient-pink-blue">Flying Drone Pig</span>
                <br />
                <span className="text-white">Defies Gravity</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                "When pigs fly… electricity stops."
              </p>
            </div>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-500 max-w-xl leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              Experience the intersection of absurdity and prosperity on Solana. Join a community that believes in the impossible and profits from it.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 bg-gradient-to-r from-accent-pink to-accent-blue text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 text-center uppercase tracking-wider text-sm"
              >
                <span className="inline-block group-hover:scale-105 transition-transform duration-300">Get $FDP Now</span>
              </a>
              <a
                href="https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-accent-blue text-accent-blue font-bold rounded-xl hover:bg-accent-blue/10 transition-all duration-300 text-center uppercase tracking-wider text-sm"
              >
                Live Charts
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-gray-800/50 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <div>
                <div className="text-3xl font-black text-accent-gold mb-2">100M</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Total Supply</div>
              </div>
              <div>
                <div className="text-3xl font-black text-accent-blue mb-2">SOL</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Network</div>
              </div>
              <div>
                <div className="text-3xl font-black text-accent-pink mb-2">∞</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Potential</div>
              </div>
            </div>
          </div>

          {/* Right - Logo Animation */}
          <div className="relative h-96 sm:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center animate-float">
              {/* Animated background orbs */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-pink/20 to-accent-blue/20 filter blur-3xl animate-pulse"></div>

              {/* Logo */}
              <div className="relative z-10">
                <Image
                  src="https://i.imgur.com/0jsGt7u.png"
                  alt="Flying Drone Pig"
                  width={400}
                  height={400}
                  className="w-72 h-72 sm:w-96 sm:h-96 object-contain drop-shadow-2xl animate-pulse-glow"
                  priority
                />
              </div>

              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-accent-blue/20 rounded-full animate-pulse" style={{ width: '120%', height: '120%' }}></div>
              <div className="absolute inset-0 border border-accent-pink/10 rounded-full animate-pulse" style={{ width: '150%', height: '150%', animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
