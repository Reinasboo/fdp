'use client';

export default function News() {
  return (
    <section id="story" className="w-full py-24 md:py-32 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl animate-subtle-float"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 animate-slide-fade">
          <div className="inline-block group mb-6">
            <span className="relative inline-block px-4 py-2 bg-gradient-to-r from-accent-pink/15 to-accent-blue/15 border border-accent-pink/40 rounded-full text-xs font-bold text-accent-pink uppercase tracking-widest group-hover:border-accent-pink/60 transition-colors duration-300">
              📰 Breaking Story
            </span>
            <div className="absolute inset-0 rounded-full bg-accent-pink/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6">
            When Pigs Fly,
            <span className="block bg-gradient-to-r from-accent-pink via-accent-blue to-accent-cyan bg-clip-text text-transparent mt-2">Power Falls</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">A tale of absurdity, technology, and unexpected chaos that rippled across the globe in minutes.</p>
        </div>

        {/* News Card - Premium glassmorphism */}
        <div className="max-w-4xl animate-slide-fade" style={{ animationDelay: '0.1s' }}>
          <article className="relative glass rounded-2xl overflow-hidden hover:border-accent-blue/50 transition-all duration-300 group border-accent-pink/20 backdrop-blur-xl">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

            {/* Content area */}
            <div className="relative z-10">
              {/* Header Section */}
              <div className="px-6 sm:px-8 md:px-12 pt-8 md:pt-12 pb-6 border-b border-gray-800/30">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-block px-3 py-1.5 bg-accent-pink/20 border border-accent-pink/40 rounded-full text-xs font-bold text-accent-pink uppercase tracking-wider">Breaking</span>
                  <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">Feb 8, 2026</span>
                  <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">·</span>
                  <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">Beijing, China</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight">
                  Flying Drone Pig Causes
                  <span className="block bg-gradient-to-r from-accent-pink to-accent-blue bg-clip-text text-transparent mt-2">Power Outage</span>
                </h3>
              </div>

              {/* Article Content */}
              <div className="px-6 sm:px-8 md:px-12 py-8 md:py-12 space-y-6 text-gray-400">
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="float-left text-4xl font-black text-accent-pink mr-3 leading-tight">I</span>
                  n an unprecedented incident that captivated the world within hours, a high-tech drone shaped like a flying pig malfunctioned during a promotional advertisement in Beijing's Chaoyang District. The device, designed to showcase cutting-edge advertising technology, began broadcasting an unexpectedly powerful electromagnetic pulse that disrupted the city's power infrastructure.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  The flying drone pig, equipped with experimental wireless transmission equipment, caused a temporary blackout affecting over 100,000 residents across seven city blocks. According to reports, the drone was being tested for a new marketing campaign when a software malfunction caused it to broadcast on frequencies that disrupted the power grid's management systems. The incident lasted approximately 47 minutes before engineers restored power.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  What started as an infrastructure crisis quickly transformed into a cultural phenomenon. Videos of the neon-pink glowing drone flying erratically across the Beijing skyline were shared millions of times within hours. The phrase <span className="font-bold text-accent-gold drop-shadow-lg">"When pigs fly, electricity stops"</span> became the trending topic #1 globally. Meme creators adapted the footage into countless variations, creating a viral narrative around absurd ideas creating extraordinary wealth.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  The Chinese authorities have since recovered the drone and launched an investigation. However, they've noted that the device's technology was "decades ahead of current standards." This incident has reignited conversations about the intersection of AI, Web3, and marketing innovation—proving that sometimes the most absurd ideas create the most memorable moments in culture.
                </p>
              </div>

              {/* Actions */}
              <div className="px-6 sm:px-8 md:px-12 pb-8 md:pb-12 pt-6 md:pt-8 border-t border-gray-800/30 flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="group relative px-8 py-3 bg-gradient-to-r from-accent-pink to-accent-blue text-black font-black rounded-xl hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 text-center uppercase tracking-wider text-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Full Article</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-3 border-2 border-gray-700 text-gray-400 font-black rounded-xl hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 text-center uppercase tracking-wider text-sm hover:bg-accent-cyan/5"
                >
                  Share Tweet
                </a>
              </div>
            </div>
          </article>

          {/* Key Insight Box */}
          <div className="mt-12 relative group animate-slide-fade" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-6 sm:p-8 md:p-12 border-2 border-accent-blue/30 rounded-2xl bg-gradient-to-br from-accent-blue/5 to-transparent backdrop-blur-sm">
              <div className="flex gap-6 items-start">
                <div className="text-4xl md:text-5xl flex-shrink-0">⚡</div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-4">The Takeaway</h4>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    This incident perfectly captures the essence of $FDP: something genuinely absurd that captures the world's imagination. When impossible things happen, those who believed become visionaries. The future rewards the believers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
