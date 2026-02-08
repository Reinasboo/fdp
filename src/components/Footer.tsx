'use client';

import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/50 border-t border-gray-800 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://i.imgur.com/0jsGt7u.png"
                alt="FDP Logo"
                width={32}
                height={32}
              />
              <div>
                <h3 className="font-bold text-white">$FDP</h3>
                <p className="text-xs text-gray-500">Flying Drone Pig</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              When pigs fly… electricity stops.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-white transition-smooth">
                  News
                </a>
              </li>
              <li>
                <a href="#quotes" className="text-gray-400 hover:text-white transition-smooth">
                  Quotes
                </a>
              </li>
              <li>
                <a href="#token" className="text-gray-400 hover:text-white transition-smooth">
                  Token Info
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-smooth"
                >
                  DEXscreener
                </a>
              </li>
              <li>
                <a
                  href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-smooth"
                >
                  Pump.fun
                </a>
              </li>
              <li>
                <a
                  href="https://solana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-smooth"
                >
                  Solana
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold text-white mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://x.com/i/communities/2019793810058838275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-smooth"
                >
                  X Community
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-smooth"
                >
                  Twitter
                </a>
              </li>
              <li>
                <p className="text-gray-500 text-xs mt-3">
                  More channels coming soon
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} Flying Drone Pig ($FDP). All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs">Built with 🚀 for the herd</p>
              <div className="flex gap-4">
                <a
                  href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-smooth"
                >
                  Pump.fun
                </a>
                <span>•</span>
                <a
                  href="https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-smooth"
                >
                  Chart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating pig easter egg */}
      <style>{`
        @keyframes float-around {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(20px) translateY(-10px);
          }
          50% {
            transform: translateX(-10px) translateY(-20px);
          }
          75% {
            transform: translateX(-20px) translateY(0);
          }
        }

        .animate-float-around {
          animation: float-around 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
