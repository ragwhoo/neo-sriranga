'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import FlowingMenu from './FlowingMenu';

const menuItems = [
  { link: '#products', text: 'Products', image: '/products/bisibelebath.png', bgColor: '#fef3ea', textColor: '#8B1A1A', marqueeBgColor: '#fba20d', marqueeTextColor: '#650f09', borderColor: '#8B1A1A30' },
  { link: '/recipes', text: 'Recipes', image: '/products/puliogare.png', bgColor: '#fef3ea', textColor: '#8B1A1A', marqueeBgColor: '#ff5a5a', marqueeTextColor: '#a80000', borderColor: '#8B1A1A30' },
  { link: '#story', text: 'Story', image: '/products/rasam.png', bgColor: '#fef3ea', textColor: '#8B1A1A', marqueeBgColor: '#650f09', marqueeTextColor: '#fba20d', borderColor: '#8B1A1A30' },
  { link: '#contact', text: 'Contact', image: '/products/sambar.png', bgColor: '#fef3ea', textColor: '#8B1A1A', marqueeBgColor: '#8B1A1A', marqueeTextColor: '#fef3ea', borderColor: '#8B1A1A30' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [onDarkBg, setOnDarkBg] = useState(true);

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const pw = document.getElementById('product-worlds');
      const ps = document.getElementById('photo-section');
      const cb = document.querySelector('[data-color-banner]');
      if (cb) { const r = cb.getBoundingClientRect(); if (r.top <= 100 && r.bottom >= 0) { setOnDarkBg(true); return; } }
      if (ps) { const r = ps.getBoundingClientRect(); if (r.top <= 100 && r.bottom >= 0) { setOnDarkBg(true); return; } }
      if (pw) { const r = pw.getBoundingClientRect(); if (r.top <= 100 && r.bottom >= 0) { setOnDarkBg(true); return; } }
      setOnDarkBg(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const c = onDarkBg ? '#ffffff' : '#8B1A1A';

  return (
    <nav className="fixed top-0 inset-x-0 z-[70] flex items-center justify-between px-8 py-4">
      <Link href="/" className="relative z-[70]">
        <div className="w-20 h-10" style={{
          backgroundColor: c,
          maskImage: 'url(/srirangalogo.png)',
          maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
          WebkitMaskImage: 'url(/srirangalogo.png)',
          WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center',
        }} />
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="relative z-[70] flex flex-col items-end gap-[6px] cursor-pointer" aria-label={isOpen ? 'Close' : 'Open'}>
        <span className="block h-[2px] rounded-full transition-all duration-300" style={{ width: isOpen ? '24px' : '24px', backgroundColor: c, transform: isOpen ? 'rotate(45deg) translate(5px,6px)' : 'none' }} />
        <span className="block h-[2px] rounded-full transition-all duration-300" style={{ width: isOpen ? '0px' : '24px', backgroundColor: c, opacity: isOpen ? 0 : 1 }} />
        <span className="block h-[2px] rounded-full transition-all duration-300" style={{ width: isOpen ? '24px' : '24px', backgroundColor: c, transform: isOpen ? 'rotate(-45deg) translate(5px,-6px)' : 'none' }} />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-[60]" style={{ backgroundColor: '#fef3ea' }}>
          <FlowingMenu items={menuItems} onLinkClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}
