import Hero_Section from '@/components/HeroSection';
import Logo from '@/components/Logo';
import Footer from '@/ui/Footer';

export default function Home() {
  return (
    <main className='mt-10 h-auto'>
      <Logo />
      <Hero_Section />

      {/* END */}
      <Footer />
    </main>
  );
}
