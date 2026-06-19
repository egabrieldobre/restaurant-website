import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import FeaturedMenu from '@/components/FeaturedMenu';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import SocialSection from '@/components/SocialSection';
import VideoSection from '@/components/VideoSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <FeaturedMenu />
        <Gallery />
        <VideoSection />
        <Experience />
        <SocialSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
