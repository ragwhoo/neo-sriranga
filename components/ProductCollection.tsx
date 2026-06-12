'use client';

import Image from 'next/image';
import { worlds } from '@/lib/worlds';

export default function ProductCollection() {
  return (
    <section
      id="products"
      className="relative min-h-screen w-full py-32 px-8"
      style={{ backgroundColor: '#2a1810' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl md:text-6xl text-white/90 mb-4 text-center">
          Our Collection
        </h2>
        <p className="font-subtitle text-sm text-white/40 text-center tracking-widest uppercase mb-20">
          Four generations of flavor
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {worlds.map((world) => (
            <div
              key={world.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6">
                <Image
                  src={world.productImage}
                  alt={world.productName}
                  width={1366}
                  height={768}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-2xl text-white/90 mb-2">
                {world.productName}
              </h3>
              <p className="font-subtitle text-xs text-white/40 tracking-widest uppercase">
                {world.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
