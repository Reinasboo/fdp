'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Elite ambient background - animated gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient blob */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent-pink/15 to-transparent rounded-full filter blur-3xl animate-subtle-float"></div>
        
        {/* Secondary gradient blob */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent-blue/15 to-transparent rounded-full filter blur-3xl animate-subtle-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Tertiary glow - magenta */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-magenta/5 rounded-full filter blur-3xl"></div>

        {/* Animated grid background - subtle */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,_rgba(255,0,110,0.5)_1px,_transparent_1px),_linear-gradient(rgba(255,0,110,0.5)_1px,_transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Premium typography */}
          <div className="space-y-10 min-h-[600px] flex flex-col justify-center">
            {/* Main Headline - Cinematic */}
            <div className="space-y-8 animate-slide-fade">
              {/* Badge with glow effect */}
              <div className="inline-block group">
                <span className="relative inline-block px-4 py-2 bg-gradient-to-r from-accent-pink/15 to-accent-blue/15 border border-accent-pink/40 rounded-full text-xs font-bold text-accent-pink uppercase tracking-widest group-hover:border-accent-pink/60 transition-colors duration-300">
                  🚀 Memecoin Revolution
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-accent-pink/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              {/* Main headline with gradient */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
                <span className="block bg-gradient-to-r from-accent-pink via-accent-blue to-accent-cyan bg-clip-text text-transparent">Flying Drone Pig</span>
                <span className="block text-white mt-2">Defies Gravity</span>
              </h1>

              {/* Tagline with italic style */}
              <p className="text-xl lg:text-2xl text-gray-300 font-light italic max-w-2xl leading-relaxed">
                "When pigs fly… electricity stops."
              </p>
            </div>

            {/* Description - Better contrast */}
            <p className="text-base lg:text-lg text-gray-400 max-w-xl leading-relaxed animate-slide-fade" style={{ animationDelay: '0.1s' }}>
              Experience the intersection of absurdity and prosperity on Solana's fastest blockchain. Join thousands of believers who profit from the impossible.
            </p>

            {/* CTA Buttons - Premium styling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-fade" style={{ animationDelay: '0.2s' }}>
              {/* Primary CTA */}
              <a
                href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-gradient-to-r from-accent-pink to-accent-blue text-black font-black rounded-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 text-center uppercase tracking-widest text-sm overflow-hidden"
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative group-hover:scale-110 inline-block transition-transform duration-300">Get $FDP Now</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 border-2 border-accent-blue text-accent-blue font-black rounded-xl hover:bg-accent-blue/10 transition-all duration-300 text-center uppercase tracking-widest text-sm"
              >
                <span className="relative">Live Charts</span>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-accent-blue rounded-full group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
              </a>
            </div>

            {/* Stats Grid - Enhanced styling */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-12 border-t border-gray-800/30 animate-slide-fade" style={{ animationDelay: '0.3s' }}>
              {[
                { value: '100M', label: 'Supply' },
                { value: 'SOL', label: 'Network' },
                { value: '∞', label: 'Potential' }
              ].map((stat, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-accent-gold via-accent-cyan to-accent-pink bg-clip-text text-transparent group-hover:from-accent-pink group-hover:to-accent-blue transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider mt-2 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Premium Logo Display with motion */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Multiple animated background orbs for depth */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-pink/20 to-accent-blue/20 filter blur-3xl animate-subtle-float"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-accent-magenta/10 to-accent-cyan/10 filter blur-2xl animate-subtle-float" style={{ animationDelay: '0.5s' }}></div>

              {/* Outer ring animation */}
              <div className="absolute inset-0 rounded-full border-2 border-accent-blue/20 animate-pulse" style={{ animation: 'spin 20s linear infinite' }}></div>

              {/* Logo with glow effect */}
              <div className="relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/30 to-accent-blue/30 rounded-full filter blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75"></div>
                <Image
                  src="https://i.imgur.com/0jsGt7u.png"
                  alt="Flying Drone Pig"
                  width={400}
                  height={400}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl animate-subtle-float group-hover:drop-shadow-[0_0_40px_rgba(255,0,110,0.5)] transition-all duration-500"
                  priority
                />
              </div>

              {/* Decorative rings - cinematic */}
              <svg className="absolute inset-0 w-full h-full opacity-30 animate-spin" style={{ animationDuration: '30s' }} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad1)" strokeWidth="0.5" opacity="0.5" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="url(#grad2)" strokeWidth="0.5" opacity="0.3" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff006e" />
                    <stop offset="100%" stopColor="#00d9ff" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d9ff" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
