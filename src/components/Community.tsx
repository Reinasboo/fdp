'use client';

export default function Community() {
  const communityLinks = [
    {
      name: 'X (Twitter) Community',
      description: 'Join the herd. Watch pigs fly.',
      url: 'https://x.com/i/communities/2019793810058838275',
      icon: '𝕏',
      color: 'from-gray-800 to-gray-900',
      hoverColor: 'hover:shadow-gray-500/50',
    },
    {
      name: 'Solana Ecosystem',
      description: 'Built on the fastest blockchain',
      url: 'https://solana.com',
      icon: '⛓️',
      color: 'from-purple-800 to-purple-900',
      hoverColor: 'hover:shadow-purple-500/50',
    },
    {
      name: 'Pump.fun',
      description: 'Trade and discover new tokens',
      url: 'https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump',
      icon: '🛒',
      color: 'from-pink-800 to-pink-900',
      hoverColor: 'hover:shadow-pink-500/50',
    },
    {
      name: 'DEXscreener',
      description: 'Real-time charts and analytics',
      url: 'https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D',
      icon: '📊',
      color: 'from-blue-800 to-blue-900',
      hoverColor: 'hover:shadow-blue-500/50',
    },
  ];

  return (
    <section className="py-20 md:py-32 w-full bg-gradient-to-b from-transparent via-purple-600/5 to-transparent relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-pink to-transparent opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient-pink-blue">Join the Herd</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with the Flying Drone Pig community and stay updated on all things $FDP
          </p>
        </div>

        {/* Community cards grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {communityLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-xl p-8 transition-all duration-300 hover:scale-105 animate-slide-in-up ${
                link.hoverColor
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-80`}></div>

              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-filter backdrop-blur-md border border-white/10"></div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="text-6xl">{link.icon}</div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                  {link.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/80">
                  {link.description}
                </p>

                {/* Arrow indicator */}
                <div className="pt-4 flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                  <span className="text-sm font-semibold">Visit Now</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-white/10 rounded-xl"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to action box */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass rounded-xl p-10 text-center border border-accent-gold/30 bg-gradient-to-br from-amber-900/20 to-transparent">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to fly?
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              The herd is growing. Join thousands of believers who think flying pigs can make fortunes.
            </p>
            <a
              href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gradient-to-r from-accent-pink to-accent-blue text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-smooth"
            >
              Get $FDP Now
            </a>
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="glass rounded-lg p-6">
            <p className="text-sm text-gray-400 mb-2">🐷 Did you know?</p>
            <p className="text-white font-semibold">
              The community grows every time someone believes that pigs can fly. You could be next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
