import Hero from '../components/home/hero/Hero';
import Highlights from '../components/home/highlights/Highlights';

export default function Page() {
  return (
    <main className="pt-16 lg:pt-20">
      <Hero />
      <Highlights />
    </main>
  );
}
