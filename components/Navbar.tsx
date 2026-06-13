'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-[60] flex items-center justify-between px-8 py-4 pointer-events-none">
      <div className="pointer-events-auto">
        <Image
          src="/assets/loadinggrandfather.png"
          alt="Sriranga Organics"
          width={80}
          height={40}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex items-center gap-8 text-sm tracking-widest uppercase text-white/70 pointer-events-auto">
        <a href="#" className="hover:text-white transition-colors">Shop</a>
        <a href="#" className="hover:text-white transition-colors">Story</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  );
}
