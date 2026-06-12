'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface LoadingSequenceProps {
  onComplete: () => void;
}

export default function LoadingSequence({ onComplete }: LoadingSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const motifRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      onComplete,
      defaults: { ease: 'power2.inOut' },
    });

    gsap.to(motifRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    tl.to({}, { duration: 1.5 });

    tl.to(emblemRef.current, {
      x: '45vw',
      y: '-5vh',
      scale: 0.4,
      duration: 2.5,
      ease: 'power3.inOut',
    }, '-=0.5');

    tl.to(trailRef.current, {
      opacity: 0.4,
      scaleX: 1.5,
      duration: 1.5,
      ease: 'power2.out',
    }, '-=2');

    tl.to(productRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
    }, '-=1.8');

    tl.to(trailRef.current, {
      opacity: 0,
      duration: 0.8,
    }, '-=0.5');

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    }, '+=0.3');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#8B1A1A' }}
    >
      <div
        ref={motifRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/assets/bbigcircle.png"
          alt=""
          width={800}
          height={800}
          className="opacity-20 w-[80vmin] h-[80vmin] object-contain"
          priority
        />
      </div>

      <div
        ref={trailRef}
        className="absolute w-32 h-32 opacity-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(212,175,55,0.6) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div ref={emblemRef} className="relative z-10">
        <Image
          src="/assets/loadinggrandfather.png"
          alt="Sriranga Organics"
          width={400}
          height={400}
          className="w-[50vmin] h-[50vmin] object-contain"
          priority
        />
      </div>

      <div
        ref={productRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-95"
      >
        <Image
          src="/products/sambar.png"
          alt=""
          width={1366}
          height={768}
          className="w-[80vw] max-w-[800px] h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
