'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { desktop: '/products/sambar.png', mobile: '/mobile/39.png', bgColor: '#8B1A1A' },
  { desktop: '/products/bisibelebath.png', mobile: '/mobile/40.png', bgColor: '#D4782B' },
  { desktop: '/products/rasam.png', mobile: '/mobile/41.png', bgColor: '#C0392B' },
  { desktop: '/products/puliogare.png', mobile: '/mobile/42.png', bgColor: '#650f09' },
];

function hexToRgb(hex: string) {
  const v = parseInt(hex.slice(1), 16);
  return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
}

export default function ProductWorlds() {
  const stickyRef = useRef<HTMLDivElement>(null);
  const clipsRef = useRef<HTMLDivElement[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  useEffect(() => {
    const clips = clipsRef.current;
    const bg = bgRef.current;
    if (!bg) return;

    const ctx = gsap.context(() => {
      const bgColors = products.map((p) => p.bgColor);
      const colorSegments = bgColors.length - 1;

      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: 'top top',
        end: '+=400%',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;

          products.forEach((_, i) => {
            if (i === products.length - 1) return;
            const layerStart = i / products.length;
            const layerEnd = (i + 1) / products.length;
            const local = (p - layerStart) / (layerEnd - layerStart);
            const clamped = Math.min(1, Math.max(0, local));
            const clip = clips[i];
            if (clip) clip.style.clipPath = `inset(0 0 ${clamped * 100}% 0)`;
          });

          const segProgress = p * colorSegments;
          const fromIdx = Math.min(Math.floor(segProgress), colorSegments - 1);
          const toIdx = fromIdx + 1;
          const localP = segProgress - fromIdx;

          if (toIdx < bgColors.length) {
            const from = hexToRgb(bgColors[fromIdx]);
            const to = hexToRgb(bgColors[toIdx]);
            const r = Math.round(from.r + (to.r - from.r) * localP);
            const g = Math.round(from.g + (to.g - from.g) * localP);
            const b = Math.round(from.b + (to.b - from.b) * localP);
            bg.style.backgroundColor = `rgb(${r},${g},${b})`;
          }
        },
      });
    }, stickyRef);

    return () => ctx.revert();
  }, []);

  const activeProducts = isMobile ? [products[0]] : products;

  return (
    <>
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden"
      >
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{ backgroundColor: activeProducts[0].bgColor }}
        />

        {[...activeProducts].reverse().map((product, ri) => {
          const originalIndex = activeProducts.length - 1 - ri;
          return (
            <div
              key={isMobile ? product.mobile : product.desktop}
              ref={(el) => { if (el) clipsRef.current[originalIndex] = el; }}
              className="absolute inset-0"
              style={{
                clipPath: originalIndex < activeProducts.length - 1
                  ? 'inset(0 0 0% 0)'
                  : undefined,
              }}
            >
              <div
                data-bbigcircle
                className="absolute inset-0 pointer-events-none animate-[fadeIn_1s_ease-out_forwards]"
                style={{
                  opacity: 0,
                  transform: 'scale(2.5) translate(-15px, 40px) rotate(0deg)',
                  transformOrigin: 'center center',
                }}
              >
                <Image
                  src="/assets/bbigcircle.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <Image
                src={isMobile ? product.mobile : product.desktop}
                alt={`${(isMobile ? product.mobile : product.desktop).replace('/products/', '').replace('/mobile/', '').replace('.png', '')} product`}
                fill
                className="object-cover"
                priority={originalIndex === 0}
                sizes="100vw"
              />

              <div className="absolute inset-x-0 z-[2]" style={{ top: '-8%', bottom: 0, transform: 'translate(-20px, -28px) scale(0.3)', transformOrigin: 'center center' }}>
                <Image
                  src="/assets/circlebehindgrandpa.png"
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 z-[3]" style={{ transform: 'translate(-20px, -48px) scale(0.34)', transformOrigin: 'center center' }}>
                <Image
                  src="/assets/loadinggrandfather.png"
                  alt="Sriranga Organics"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="h-[400vh]" />
    </>
  );
}
