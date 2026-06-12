'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function HeritageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(portraitRef.current, {
            y: -30 * self.progress,
            opacity: 0.3 + 0.7 * self.progress,
            duration: 0.1,
            overwrite: 'auto',
          });
          gsap.to(textRef.current, {
            y: 30 * self.progress,
            opacity: 0.3 + 0.7 * self.progress,
            duration: 0.1,
            overwrite: 'auto',
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="heritage"
      className="relative min-h-screen w-full bg-[#1a0f0a] py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={portraitRef} className="opacity-30">
            <Image
              src="/assets/loadinggrandfather.png"
              alt="Our Founder"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>

          <div ref={textRef} className="opacity-30">
            <h2 className="font-heading text-5xl md:text-7xl text-white/90 mb-8 leading-tight">
              Our Story
            </h2>
            <div className="space-y-6 font-subtitle text-sm md:text-base text-white/60 leading-relaxed">
              <p>
                For generations, the Sriranga family has been at the heart of
                authentic South Indian cuisine. What began as a small kitchen in
                rural Karnataka has grown into a legacy of purity and tradition.
              </p>
              <p>
                Every spice blend is crafted using time-honored recipes passed
                down through four generations. No shortcuts. No compromises.
                Just the unrelenting pursuit of flavor that tastes like home.
              </p>
              <p>
                We source directly from farmers who share our philosophy:
                grow with care, harvest with respect, and let the ingredient
                speak for itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
