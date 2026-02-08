'use client';

export default function Community() {
  const communityLinks = [
    {
      name: 'X (Twitter)',
      description: 'Join the herd. Follow updates and connect with fellow believers.',
      url: 'https://x.com/i/communities/2019793810058838275',
      icon: '𝕏',
      accentColor: 'accent-gray-400',
    },
    {
      name: 'Solana Ecosystem',
      description: 'Discover the fastest blockchain powering Flying Drone Pig.',
      url: 'https://solana.com',
      icon: '⛓️',
      accentColor: 'accent-purple-400',
    },
    {
      name: 'Pump.fun',
      description: 'Trade $FDP tokens and participate in the journey.',
      url: 'https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump',
      icon: '🛒',
      accentColor: 'accent-pink',
    },
    {
      name: 'DEXscreener',
      description: 'Track real-time charts, analytics, and trading data.',
      url: 'https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D',
      icon: '📊',
      accentColor: 'accent-blue',
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-magenta/10 rounded-full blur-3xl animate-subtle-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20 animate-slide-fade">
          <div className="inline-block group mb-6">
            <span className="relative inline-block px-4 py-2 bg-gradient-to-r from-accent-pink/15 to-accent-blue/15 border border-accent-pink/40 rounded-full text-xs font-bold text-accent-pink uppercase tracking-widest group-hover:border-accent-pink/60 transition-colors duration-300">
              👥 Join the Herd
            </span>
            <div className="absolute inset-0 rounded-full bg-accent-pink/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6">
            <span>Join the</span>
            <span className="block bg-gradient-to-r from-accent-pink via-accent-blue to-accent-cyan bg-clip-text text-transparent mt-2">Herd</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">Connect with thousands of believers building the Flying Drone Pig community on Solana's fastest blockchain.</p>
        </div>

        {/* Community cards grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20 animate-slide-fade" style={{ animationDelay: '0.1s' }}>
          {communityLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-gray-800/50 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-accent-pink/50 hover:bg-gray-900/40 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{link.icon}</div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-accent-pink transition-colors duration-300">
                {link.name}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
                {link.description}
              </p>

              {/* Arrow indicator */}
              <div className="pt-4 border-t border-gray-800/50 flex items-center gap-2 text-gray-400 group-hover:text-accent-pink transition-colors duration-300">
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Visit</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Call to action section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="border border-accent-gold/30 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-gray-900/80 via-gray-900/40 to-transparent">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Ready to <span className="text-accent-gold">Fly?</span>
                </h3>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  The herd is growing. Join thousands of believers who think flying pigs can create extraordinary wealth.
                </p>
                <a
                  href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 md:px-10 py-4 md:py-5 bg-accent-gold text-black font-black rounded-xl hover:bg-accent-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 uppercase tracking-wider text-sm md:text-base"
                >
                  Get $FDP Now
                </a>
              </div>
              <div className="text-6xl md:text-8xl text-center opacity-20">🐷</div>
            </div>
          </div>
        </div>

        {/* Community stats / Fun fact */}
        <div className="border border-gray-800/50 rounded-2xl p-8 md:p-10 bg-gray-900/30 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-2xl">🐷</span>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Community Fact</span>
          </div>
          <p className="text-lg md:text-xl text-white font-semibold max-w-2xl mx-auto">
            Every time someone believes that pigs can fly on Solana, the herd grows stronger. Will you be next?
          </p>
        </div>
      </div>
    </section>
  );
}
