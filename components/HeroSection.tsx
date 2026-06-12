'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function HeroSection() {
  const productRef = useRef<HTMLDivElement>(null);
  const motifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!productRef.current) return;

    gsap.to(productRef.current, {
      y: 8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(motifRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-sambar">
      <div
        ref={motifRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/assets/bbigcircle.png"
          alt=""
          width={600}
          height={600}
          className="w-[70vmin] h-[70vmin] object-contain opacity-10"
          priority
        />
      </div>

      <div ref={productRef} className="relative z-10">
        <Image
          src="/products/sambar.png"
          alt="Sambar Powder"
          width={1366}
          height={768}
          className="w-[80vw] max-w-[700px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center">
        <p className="font-subtitle text-sm text-white/40 tracking-[0.3em] uppercase">
          Since 1947
        </p>
      </div>
    </section>
  );
}
