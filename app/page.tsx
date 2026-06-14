'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import LoadingSequence from '@/components/LoadingSequence';
import Navbar from '@/components/Navbar';
import ProductWorlds from '@/components/ProductWorlds';
import Sections from '@/components/Sections';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);
  const loadingRef = useRef(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let bbigAngle = 0;
    let speedMult = 1;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);

      if (!loadingRef.current) {
        ScrollTrigger.update();
      }

      const target = lenis.isScrolling ? 4 : 1;
      speedMult += (target - speedMult) * 0.08;

      bbigAngle += 0.12 * speedMult;
      bbigAngle %= 360;

      document.querySelectorAll('[data-bbigcircle]').forEach((el) => {
        (el as HTMLElement).style.transform =
          `scale(2.5) translate(-15px, 40px) rotate(${bbigAngle}deg)`;
      });
    });
    gsap.ticker.lagSmoothing(0);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.lagSmoothing(1);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <main>
      {!isLoading && <Navbar />}
      <div>
        <ProductWorlds />
      </div>

      <div className="relative" style={{ backgroundColor: '#8B1A1A' }}>
        <Sections />
      </div>

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 50,
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {isLoading && <LoadingSequence onComplete={() => {
        const lenis = lenisRef.current;
        if (lenis) {
          window.scrollTo(0, 0);
          lenis.scrollTo(0, { immediate: true });
        }
        loadingRef.current = false;
        setIsLoading(false);
      }} />}
    </main>
  );
}
