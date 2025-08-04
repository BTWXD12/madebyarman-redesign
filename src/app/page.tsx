import Hero from '../components/home/hero/Hero';
import Highlights from '../components/home/highlights/Highlights';
import Testimonials from '../components/home/testimonials/Testimonials';
import FeaturedTools from '../components/home/featured-tools/FeaturedTools';
import FeaturedProjects from '../components/home/featured-projects/FeaturedProjects';
import AboutSnapshot from '../components/home/about-snapshot/AboutSnapshot';

export default function Page() {
  return (
    <main className="pt-16 lg:pt-20">
      <Hero />
      <Highlights />
      <AboutSnapshot />
      <FeaturedTools />
      <FeaturedProjects />
      <Testimonials />
    </main>
  );
}
