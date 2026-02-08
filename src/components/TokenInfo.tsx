'use client';

import { useState } from 'react';

export default function TokenInfo() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contractAddress = '5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump';

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const tokenDetails = [
    {
      label: 'Name',
      value: 'Flying Drone Pig',
      icon: '🐷',
    },
    {
      label: 'Ticker',
      value: '$FDP',
      icon: '💎',
      isCopyable: true,
    },
    {
      label: 'Network',
      value: 'Solana (SOL)',
      icon: '⛓️',
    },
    {
      label: 'Type',
      value: 'Memecoin',
      icon: '🎪',
    },
  ];

  return (
    <section id="token" className="w-full py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20 animate-slide-in-up">
          <span className="inline-block px-4 py-2 bg-accent-blue/10 border border-accent-blue/30 rounded-full text-sm font-bold text-accent-blue uppercase tracking-widest mb-6">Token</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span>Essential</span> <span className="text-gradient-pink-blue">Information</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">Complete details about $FDP on the Solana blockchain, with easy access to contract information and trading platforms.</p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left side - Token details grid */}
          <div className="space-y-4 animate-slide-in-up">
            {tokenDetails.map((detail, index) => (
              <div
                key={detail.label}
                className="border border-gray-800/50 rounded-2xl p-6 md:p-8 hover:border-accent-pink/50 transition-all duration-300 hover:bg-gray-900/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                      {detail.label}
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-white break-words">
                      {detail.value}
                    </p>
                  </div>
                  <div className="text-4xl flex-shrink-0">{detail.icon}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Contract address and actions */}
          <div className="space-y-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Contract address card */}
            <div className="border border-accent-blue/30 rounded-2xl p-8 md:p-10 bg-gradient-to-br from-gray-900/80 via-gray-900/40 to-transparent">
              <div className="mb-6">
                <p className="text-xs font-bold text-accent-blue uppercase tracking-wider mb-2">Contract Address</p>
                <h3 className="text-2xl font-black text-white">Solana (SOL)</h3>
              </div>

              <div className="relative bg-black/60 rounded-xl p-5 border border-gray-800 mb-4">
                <p className="text-xs sm:text-sm text-gray-300 font-mono break-all leading-relaxed">
                  {contractAddress}
                </p>

                <button
                  onClick={() => copyToClipboard(contractAddress, 'contract')}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-accent-blue/10 hover:bg-accent-blue/20 transition-all duration-300 text-accent-blue border border-accent-blue/30 hover:border-accent-blue/50"
                  title="Copy to clipboard"
                >
                  {copiedField === 'contract' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500 font-semibold">
                {copiedField === 'contract' ? '✓ Copied to clipboard!' : 'Click copy icon to clipboard'}
              </p>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <a
                href="https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 md:py-5 bg-accent-blue text-black font-bold rounded-xl hover:bg-accent-blue/90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 text-center uppercase tracking-wider text-sm md:text-base"
              >
                📊 View on DEXscreener
              </a>
              <a
                href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 md:py-5 bg-accent-pink text-black font-bold rounded-xl hover:bg-accent-pink/90 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 text-center uppercase tracking-wider text-sm md:text-base"
              >
                🛒 Buy on Pump.fun
              </a>
            </div>

            {/* Safety info */}
            <div className="border border-accent-gold/30 rounded-2xl p-6 md:p-8 bg-accent-gold/5">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">🔒</div>
                <div>
                  <p className="text-sm md:text-base font-bold text-accent-gold mb-2">
                    Always Verify
                  </p>
                  <p className="text-sm text-gray-400">
                    Double-check contract address before any transactions. Scams exist—verify official addresses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">
          <div className="border border-gray-800/50 rounded-2xl p-8 text-center hover:border-accent-gold/50 transition-all duration-300 hover:bg-gray-900/40">
            <p className="text-5xl mb-4">⚡</p>
            <h4 className="font-black text-lg text-white mb-3">Lightning Fast</h4>
            <p className="text-sm text-gray-400">Transactions confirmed in seconds on Solana's high-speed blockchain</p>
          </div>
          <div className="border border-gray-800/50 rounded-2xl p-8 text-center hover:border-accent-pink/50 transition-all duration-300 hover:bg-gray-900/40">
            <p className="text-5xl mb-4">💰</p>
            <h4 className="font-black text-lg text-white mb-3">Minimal Fees</h4>
            <p className="text-sm text-gray-400">Fractions of a cent in transaction costs—the most affordable network</p>
          </div>
          <div className="border border-gray-800/50 rounded-2xl p-8 text-center hover:border-accent-blue/50 transition-all duration-300 hover:bg-gray-900/40">
            <p className="text-5xl mb-4">🚀</p>
            <h4 className="font-black text-lg text-white mb-3">Strong Community</h4>
            <p className="text-sm text-gray-400">Growing herd of believers united in the Flying Drone Pig mission</p>
          </div>
        </div>
      </div>
    </section>
  );
}
