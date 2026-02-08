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
    <section id="token" className="py-20 md:py-32 w-full bg-gradient-to-b from-transparent via-blue-600/5 to-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-pink-600/10 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient-pink-blue">Token Information</span>
          </h2>
          <p className="text-gray-400 text-lg">All details you need about $FDP</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left side - Token details grid */}
          <div className="space-y-4 animate-slide-in-up">
            {tokenDetails.map((detail, index) => (
              <div
                key={detail.label}
                className="glass rounded-lg p-6 hover:border-accent-blue/50 transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-grow">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      {detail.label}
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-white break-words">
                      {detail.value}
                    </p>
                  </div>
                  <div className="text-3xl">{detail.icon}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Contract address and actions */}
          <div className="space-y-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Contract address card */}
            <div className="glass-blue rounded-xl p-8 space-y-4">
              <h3 className="text-lg font-bold text-white">Contract Address</h3>

              <div className="relative bg-black/40 rounded-lg p-4 border border-accent-blue/30">
                <p className="text-xs text-accent-blue font-mono text-center break-all">
                  {contractAddress}
                </p>

                <button
                  onClick={() => copyToClipboard(contractAddress, 'contract')}
                  className="absolute top-2 right-2 p-2 rounded-md bg-accent-blue/20 hover:bg-accent-blue/40 transition-smooth text-accent-blue"
                  title="Copy to clipboard"
                >
                  {copiedField === 'contract' ? (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500">
                {copiedField === 'contract'
                  ? '✓ Copied to clipboard!'
                  : 'Click to copy contract address'}
              </p>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <a
                href="https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-smooth text-center"
              >
                📊 View on DEXscreener
              </a>
              <a
                href="https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-smooth text-center"
              >
                🛒 Buy on Pump.fun
              </a>
            </div>

            {/* Safety info */}
            <div className="glass rounded-lg p-4 border-l-4 border-accent-gold">
              <div className="flex gap-3">
                <div className="text-xl">🔒</div>
                <div>
                  <p className="text-sm font-semibold text-accent-gold mb-1">
                    Always Verify
                  </p>
                  <p className="text-xs text-gray-400">
                    Double-check contract address before transactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info boxes */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="glass rounded-lg p-6 text-center animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-3xl mb-2">⚡</p>
            <h4 className="font-bold text-white mb-2">Fast</h4>
            <p className="text-sm text-gray-400">Instant transactions on Solana</p>
          </div>
          <div className="glass rounded-lg p-6 text-center animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-3xl mb-2">💰</p>
            <h4 className="font-bold text-white mb-2">Low Fees</h4>
            <p className="text-sm text-gray-400">Minimal transaction costs</p>
          </div>
          <div className="glass rounded-lg p-6 text-center animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-3xl mb-2">🚀</p>
            <h4 className="font-bold text-white mb-2">Community</h4>
            <p className="text-sm text-gray-400">Growing herd of believers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
