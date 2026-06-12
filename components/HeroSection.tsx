'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <Image
        src="/assets/grainbg.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0" style={{ zIndex: 1, animation: 'spin-slow 30s linear infinite', transformOrigin: 'center center' }}>
        <Image
          src="/assets/bbigcircle.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <Image
        src="/products/sambar.png"
        alt="Sambar Powder"
        fill
        className="object-cover"
        style={{ zIndex: 2 }}
        priority
      />
      <div className="absolute inset-x-0" style={{ top: '-8%', bottom: 0, zIndex: 3, transform: 'translate(-20px, -28px) scale(0.3)', transformOrigin: 'center center' }}>
        <Image
          src="/assets/circlebehindgrandpa.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0" style={{ zIndex: 4, transform: 'translate(-20px, -48px) scale(0.34)', transformOrigin: 'center center' }}>
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
}
