'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductSectionProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  id: string;
  index: number;
}

export default function ProductSection({
  image, title, subtitle, description, accentColor, id, index,
}: ProductSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);

  const isEven = index % 2 === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 25%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(imageRef.current, {
        opacity: 0,
        x: isEven ? -80 : 80,
        duration: 1,
        ease: 'power3.out',
      });

      tl.from(textRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6');

      tl.from(accentLineRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, [isEven]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <Image
        src="/assets/grainbg.png"
        alt=""
        fill
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: accentColor, opacity: 0.1, zIndex: 1 }}
      />

      <div className="relative z-10 w-full h-full flex items-center px-6 md:px-16 lg:px-24">
        <div className={`flex flex-col md:flex-row items-center w-full gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}>
          <div ref={imageRef} className="w-2/3 md:w-2/5 lg:w-1/3">
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <div ref={textRef} className="w-full md:w-3/5 lg:w-1/2 text-center md:text-left">
            <div
              ref={accentLineRef}
              className="w-16 h-1 mb-6 mx-auto md:mx-0"
              style={{ backgroundColor: accentColor }}
            />
            <h2
              className="font-heading text-4xl md:text-6xl lg:text-7xl mb-3 leading-tight"
              style={{ color: accentColor }}
            >
              {title}
            </h2>
            <p className="font-subtitle text-base md:text-lg mb-4 uppercase tracking-[0.2em] opacity-90">
              {subtitle}
            </p>
            <p className="text-sm md:text-base max-w-xl leading-relaxed opacity-75 mx-auto md:mx-0">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute" style={{ bottom: '1.5rem', right: '1.5rem', zIndex: 5 }}>
        <div className="relative" style={{ width: 'clamp(50px, 8vw, 80px)', height: 'clamp(50px, 8vw, 80px)' }}>
          <div className="absolute inset-0" style={{ transform: 'translate(-4px, -10px) scale(0.6)', transformOrigin: 'center center' }}>
            <Image src="/assets/circlebehindgrandpa.png" alt="" fill className="object-cover" />
          </div>
          <div className="absolute inset-0" style={{ transform: 'translate(-4px, -16px) scale(0.7)', transformOrigin: 'center center' }}>
            <Image src="/assets/loadinggrandfather.png" alt="Sriranga Organics" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
