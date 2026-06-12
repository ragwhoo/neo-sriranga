'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function LoadingSequence({ onComplete }: { onComplete: () => void }) {
  const circleRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = 3;

  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const rot = gsap.to(circleRef.current, {
      rotation: 360,
      duration: 12,
      repeat: -1,
      ease: 'none',
    });

    return () => { rot.kill(); };
  }, []);

  useEffect(() => {
    if (imagesLoaded < totalImages) return;

    const elapsed = Date.now() - startTimeRef.current;
    const minDisplay = 2500;
    const remaining = Math.max(0, minDisplay - elapsed);

    const timer = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete,
      });

      tl.to(wipeRef.current, {
        clipPath: 'circle(100% at 50% 46%)',
        duration: 1.5,
        ease: 'power2.inOut',
      });

      tl.to([circleRef.current, logoRef.current], {
        scale: 0.38,
        x: -20,
        y: -40,
        duration: 0.6,
        ease: 'power2.out',
        onStart: () => gsap.killTweensOf(circleRef.current),
      }, '-=0.3');
    }, remaining);

    return () => clearTimeout(timer);
  }, [imagesLoaded, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <Image
        src="/assets/grainbg.png"
        alt=""
        fill
        className="object-cover"
        priority
        onLoad={() => setImagesLoaded((n) => n + 1)}
      />
      <div ref={circleRef} className="absolute inset-x-0" style={{ top: '-8%', bottom: 0, zIndex: 1 }}>
        <Image
          src="/assets/circlebehindgrandpa.png"
          alt=""
          fill
          className="object-cover"
          priority
          onLoad={() => setImagesLoaded((n) => n + 1)}
        />
      </div>
      <div
        ref={wipeRef}
        className="absolute inset-0"
        style={{
          zIndex: 2,
          backgroundColor: '#ffd88a',
          clipPath: 'circle(0% at 50% 46%)',
        }}
      />
      <div ref={logoRef} className="absolute inset-0" style={{ zIndex: 3 }}>
        <Image
          src="/assets/loadinggrandfather.png"
          alt="Sriranga Organics"
          fill
          className="object-cover"
          priority
          onLoad={() => setImagesLoaded((n) => n + 1)}
        />
      </div>
    </div>
  );
}
