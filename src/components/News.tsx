'use client';

export default function News() {
  return (
    <section id="news" className="py-20 md:py-32 w-full bg-gradient-to-b from-transparent via-blue-600/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient-pink-blue">When Pigs Fly</span>
          </h2>
          <p className="text-gray-400 text-lg">The story that broke the internet</p>
        </div>

        {/* News card */}
        <div className="max-w-3xl mx-auto">
          <article className="glass rounded-xl p-8 md:p-12 hover:border-accent-blue/50 transition-smooth">
            <div className="space-y-6 animate-slide-in-up">
              {/* Headline */}
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Flying Drone Pig Causes Power Outage in Beijing
              </h3>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span>📅 February 8, 2026</span>
                <span>📍 Beijing, China</span>
                <span className="text-accent-pink">VIRAL</span>
              </div>

              {/* Article content */}
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  In an unprecedented incident that has since gone viral across social media, a high-tech drone shaped like a flying pig went rogue during a promotional advertisement in Beijing's Chaoyang District yesterday. The device, designed to showcase cutting-edge advertising technology, began broadcasting an unexpectedly powerful electromagnetic pulse that interfered with the city's power infrastructure.
                </p>

                <p>
                  The flying drone pig, equipped with experimental wireless transmission equipment, caused a temporary blackout affecting over 100,000 residents across seven city blocks. According to reports, the drone was being tested for a new marketing campaign when a software malfunction caused it to broadcast on frequencies that disrupted the power grid's management systems. The incident lasted approximately 47 minutes before power was restored.
                </p>

                <p>
                  What started as an infrastructure crisis quickly transformed into a cultural phenomenon. Videos of the neon-pink glowing drone flying erratically across the Beijing skyline were shared millions of times within hours. Users flooded social media with the phrase <span className="text-accent-gold font-semibold">"When pigs fly, electricity stops,"</span> turning the incident into the trending topic #1 globally. Meme creators have already adapted the footage into countless variations, with some claiming it's a sign of "absurd futures creating extraordinary wealth."
                </p>

                <p>
                  The Chinese authorities have since recovered the drone and launched an investigation. However, they've noted that the device's technology was "decades ahead of current standards." The incident has reignited conversations about the intersection of AI, Web3, and marketing innovation—proving that sometimes the most absurd ideas create the most memorable moments.
                </p>
              </div>

              {/* Read more button */}
              <div className="pt-6 flex gap-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Full article coming soon. This is the preview.');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-accent-pink to-accent-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-smooth"
                >
                  Read Full Article
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-600 text-gray-400 font-semibold rounded-lg hover:border-accent-blue hover:text-accent-blue transition-smooth"
                >
                  Share on X
                </a>
              </div>
            </div>
          </article>

          {/* Key takeaway box */}
          <div className="mt-12 glass-blue rounded-xl p-8 border-l-4 border-accent-blue animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex gap-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h4 className="font-bold text-lg mb-2">Why This Matters</h4>
                <p className="text-gray-400">
                  This incident perfectly captures the essence of $FDP: something absurd that captures the world's imagination. The convergence of technology, memes, and innovation shows that the future favors the believers—those audacious enough to invest in the unbelievable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
