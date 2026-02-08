'use client';

import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-gray-800/30 py-16 md:py-24 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-5 gap-10 md:gap-12 mb-16 pb-16 border-b border-gray-800/50">
          {/* Brand column */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="https://i.imgur.com/0jsGt7u.png"
                alt="FDP Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <h3 className="font-black text-lg text-white">$FDP</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Flying Drone Pig</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              When pigs fly, electricity stops. A memecoin on Solana built for believers in the impossible.
            </p>
            <div className="pt-4">
              <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-3">Follow Us</p>
              <a
                href="https://x.com/i/communities/2019793810058838275"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-gray-800 rounded-lg text-sm font-semibold text-gray-400 hover:text-accent-pink hover:border-accent-pink transition-all duration-300"
              >
                X Community
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-white transition-colors duration-300">
                  News
                </a>
              </li>
              <li>
                <a href="#wisdom" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Wisdom
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#token" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Token
                </a>
              </li>
            </ul>
          </div>

          {/* Trading */}
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-sm">Trading</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-pink transition-colors duration-300"
                >
                  Pump.fun
                </a>
              </li>
              <li>
                <a
                  href="https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-blue transition-colors duration-300"
                >
                  DEXscreener
                </a>
              </li>
              <li>
                <a
                  href="https://solana.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-gold transition-colors duration-300"
                >
                  Solana
                </a>
              </li>
            </ul>
          </div>

          {/* Blockchain */}
          <div>
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-sm">Blockchain</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Network</p>
                <p className="text-gray-300">Solana (SOL)</p>
              </li>
              <li>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Token Type</p>
                <p className="text-gray-300">SPL Token</p>
              </li>
              <li>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Speed</p>
                <p className="text-gray-300">~400ms blocks</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="space-y-6 md:space-y-0 md:flex md:justify-between md:items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} Flying Drone Pig ($FDP). All rights reserved. When pigs fly, history is made.
          </p>

          {/* Credit */}
          <p className="text-xs text-gray-600">
            Built with <span className="text-accent-pink">🚀</span> for the herd
          </p>
        </div>
      </div>
    </footer>
  );
}
