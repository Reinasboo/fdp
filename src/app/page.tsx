import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Quotes from '@/components/Quotes';
import Gallery from '@/components/Gallery';
import TokenInfo from '@/components/TokenInfo';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* News/Story Section */}
      <News />

      {/* Quotes Section */}
      <Quotes />

      {/* Gallery Section */}
      <Gallery />

      {/* Token Info Section */}
      <TokenInfo />

      {/* Community Section */}
      <Community />

      {/* Footer */}
      <Footer />
    </main>
  );
}
