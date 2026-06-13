'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import LoadingSequence from '@/components/LoadingSequence';
import ProductWorlds from '@/components/ProductWorlds';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
      ScrollTrigger.update();

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

    return () => {
      lenis.destroy();
      gsap.ticker.lagSmoothing(1);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <main>
      <div>
        <ProductWorlds />
      </div>

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 50,
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {isLoading && <LoadingSequence onComplete={() => setIsLoading(false)} />}
    </main>
  );
}
