'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { worlds } from '@/lib/worlds';

gsap.registerPlugin(ScrollTrigger);

export default function PinnedProductStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  const [currentWorld, setCurrentWorld] = useState(0);
  const currentWorldRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const pin = pinRef.current;
    const sections = sectionsRef.current;
    const product = productRef.current;
    const bg = bgRef.current;
    const sweep = sweepRef.current;

    if (!container || !pin || !sections || !product || !bg || !sweep) return;

    bg.style.backgroundColor = worlds[0].color;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sections,
        start: 'top top',
        end: 'bottom bottom',
        pin: pin,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      for (let i = 1; i < worlds.length; i++) {
        const section = sections.children[i] as HTMLElement;
        const prevColor = worlds[i - 1].color;
        const nextColor = worlds[i].color;
        const index = i;

        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom',
          end: 'top top',
          scrub: 1.5,
          onUpdate: (self) => {
            const p = self.progress;

            gsap.set(sweep, {
              clipPath: `inset(0 ${100 - p * 100}% 0 0)`,
              backgroundColor: nextColor,
            });

            if (p >= 0.5 && currentWorldRef.current !== index) {
              currentWorldRef.current = index;
              setCurrentWorld(index);
            }
            if (p < 0.2 && currentWorldRef.current === index) {
              currentWorldRef.current = index - 1;
              setCurrentWorld(index - 1);
            }

            gsap.set(product, {
              rotation: (p * 8 - 4),
            });

            if (p >= 1) {
              gsap.set(bg, { backgroundColor: nextColor });
              gsap.set(sweep, { clipPath: 'inset(0 100% 0 0)' });
            }
            if (p <= 0) {
              gsap.set(bg, { backgroundColor: prevColor });
              gsap.set(sweep, { clipPath: 'inset(0 100% 0 0)' });
            }
          },
        });
      }

      ScrollTrigger.create({
        trigger: sections.children[worlds.length - 1] as HTMLElement,
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress > 0) {
            gsap.set(pin, {
              opacity: 1 - self.progress,
              scale: 1 - self.progress * 0.3,
              y: -self.progress * 200,
            });
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div
        ref={bgRef}
        className="fixed inset-0 z-0 transition-colors duration-700"
      />

      <div
        ref={sweepRef}
        className="fixed inset-0 z-10 pointer-events-none"
        style={{ clipPath: 'inset(0 100% 0 0)' }}
      />

      <div
        ref={pinRef}
        className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none"
      >
        <div ref={productRef} className="relative">
          <Image
            src={worlds[currentWorld].productImage}
            alt={worlds[currentWorld].productName}
            width={1366}
            height={768}
            className="w-[80vw] max-w-[700px] h-auto object-contain drop-shadow-2xl"
            priority
          />

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
            <h2 className="font-heading text-3xl md:text-5xl text-white/90">
              {worlds[currentWorld].productName}
            </h2>
            <p className="font-subtitle text-xs md:text-sm text-white/50 tracking-widest uppercase mt-2">
              {worlds[currentWorld].subtitle}
            </p>
          </div>
        </div>
      </div>

      <div ref={sectionsRef}>
        {worlds.map((world) => (
          <section key={world.id} className="h-screen w-full" />
        ))}
      </div>
    </div>
  );
}
