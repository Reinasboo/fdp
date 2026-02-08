'use client';

export default function News() {
  return (
    <section id="story" className="w-full py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 animate-slide-in-up">
          <span className="inline-block px-4 py-2 bg-accent-pink/10 border border-accent-pink/30 rounded-full text-sm font-bold text-accent-pink uppercase tracking-widest mb-6">The Story</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            When Pigs Fly, <span className="text-gradient-pink-blue">Power Falls</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">A tale of absurdity, technology, and unexpected chaos that captured the world's imagination.</p>
        </div>

        {/* News Card */}
        <div className="max-w-4xl">
          <article className="border border-gray-800/50 rounded-2xl overflow-hidden hover:border-accent-blue/50 transition-all duration-300 group animate-slide-in-up">
            {/* Card Header with Date */}
            <div className="px-8 md:px-12 pt-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-block px-3 py-1.5 bg-accent-pink/10 border border-accent-pink/30 rounded-full text-xs font-bold text-accent-pink uppercase tracking-wider">Breaking</span>
                <span className="text-sm text-gray-500 font-semibold">Feb 8, 2026</span>
                <span className="text-sm text-gray-500 font-semibold">Beijing, China</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black leading-tight mb-8">
                Flying Drone Pig Causes <span className="text-gradient-pink-blue">Power Outage</span> in Beijing
              </h3>
            </div>

            {/* Article Content */}
            <div className="px-8 md:px-12 pb-8 space-y-6 text-gray-400 leading-relaxed">
              <p className="text-base md:text-lg first-letter:text-2xl first-letter:font-black">
                In an unprecedented incident that has since gone viral across social media, a high-tech drone shaped like a flying pig malfunctioned during a promotional advertisement in Beijing's Chaoyang District. The device, designed to showcase cutting-edge advertising technology, began broadcasting an unexpectedly powerful electromagnetic pulse that interfered with the city's power infrastructure.
              </p>

              <p className="text-base md:text-lg">
                The flying drone pig, equipped with experimental wireless transmission equipment, caused a temporary blackout affecting over 100,000 residents across seven city blocks. According to reports, the drone was being tested for a new marketing campaign when a software malfunction caused it to broadcast on frequencies that disrupted the power grid's management systems. The incident lasted approximately 47 minutes before engineers restored power.
              </p>

              <p className="text-base md:text-lg">
                What started as an infrastructure crisis quickly transformed into a cultural phenomenon. Videos of the neon-pink glowing drone flying erratically across the Beijing skyline were shared millions of times within hours. The phrase <span className="font-bold text-accent-gold">"When pigs fly, electricity stops"</span> became the trending topic #1 globally. Meme creators have already adapted the footage into countless variations, creating a viral narrative around absurd ideas creating extraordinary wealth.
              </p>

              <p className="text-base md:text-lg">
                The Chinese authorities have since recovered the drone and launched an investigation. However, they've noted that the device's technology was "decades ahead of current standards." This incident has reignited conversations about the intersection of AI, Web3, and marketing innovation—proving that sometimes the most absurd ideas create the most memorable moments in culture.
              </p>
            </div>

            {/* Actions */}
            <div className="px-8 md:px-12 pb-8 pt-4 border-t border-gray-800/50 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="px-8 py-3 bg-gradient-to-r from-accent-pink to-accent-blue text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-center uppercase tracking-wider text-sm"
              >
                Full Article
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-gray-700 text-gray-400 font-bold rounded-lg hover:border-accent-blue hover:text-accent-blue transition-all duration-300 text-center uppercase tracking-wider text-sm"
              >
                Share
              </a>
            </div>
          </article>

          {/* Key Insight Box */}
          <div className="mt-12 p-8 md:p-12 border-2 border-accent-blue/30 rounded-2xl bg-accent-blue/5 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex gap-6">
              <div className="text-4xl flex-shrink-0">⚡</div>
              <div>
                <h4 className="text-xl font-black text-white mb-3">The Takeaway</h4>
                <p className="text-gray-400 text-base md:text-lg">
                  This incident perfectly captures the essence of $FDP: something genuinely absurd that captures the world's imagination. When impossible things happen, those who believed become visionaries. The future rewards the believers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
