'use client';

import { useLayoutEffect, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Recipes from '@/components/Recipes';

export default function RecipesPage() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });
    lenis.scrollTo(0, { immediate: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return () => lenis.destroy();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navbar />
      <div className="relative min-h-screen" style={{ backgroundColor: '#fef3ea' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/flowerrrr.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
        />
        <div className="relative z-10 pt-16">
          <Recipes />
        </div>
      </div>
    </main>
  );
}
