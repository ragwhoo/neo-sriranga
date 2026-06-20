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
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      loadingRef.current = false;
      return false;
    }
    document.body.style.overflow = 'hidden';
    return true;
  });
  const lenisRef = useRef<Lenis | null>(null);
  const loadingRef = useRef(true);
  const vignetteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isLoading]);

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
    const tickerCallback = (time: number) => {
      if (!loadingRef.current) {
        lenis.raf(time * 1000);
      }

      if (!loadingRef.current) {
        ScrollTrigger.update();
      }
      const target = loadingRef.current ? 1 : (lenis.isScrolling ? 4 : 1);
      speedMult += (target - speedMult) * 0.08;
      bbigAngle += 0.12 * speedMult;
      bbigAngle %= 360;
      document.querySelectorAll('[data-bbigcircle]').forEach((el) => {
        (el as HTMLElement).style.transform =
          `scale(2.5) translate(-15px, 40px) rotate(${bbigAngle}deg)`;
      });
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);
    lenisRef.current = lenis;

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      gsap.ticker.lagSmoothing(1);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    if (isLoading || !vignetteRef.current) return;
    const st = gsap.to(vignetteRef.current, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: document.querySelector('#product-worlds'),
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onLeave: () => {
          if (vignetteRef.current) vignetteRef.current.style.display = 'none';
        },
        onEnterBack: () => {
          if (vignetteRef.current) vignetteRef.current.style.display = 'block';
        },
      },
    });
    return () => { st.kill(); };
  }, [isLoading]);

  const handleLoadComplete = () => {
    const lenis = lenisRef.current;
    if (lenis) {
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
    }
    document.body.style.overflow = '';
    loadingRef.current = false;
    setIsLoading(false);

    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <>
      <main>
        <Navbar />
        <div ref={vignetteRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 50, background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%)' }} />
        <div id="product-worlds">
          <ProductWorlds />
        </div>
        <div className="relative" style={{ backgroundColor: '#fef3ea' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url(/flowerrrr.png)', backgroundRepeat: 'repeat', backgroundSize: 'auto' }} />
          <div className="relative z-10">
            <Sections />
          </div>
        </div>
      </main>
      {isLoading && <LoadingSequence onComplete={handleLoadComplete} />}
    </>
  );
}
