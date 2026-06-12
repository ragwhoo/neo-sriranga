'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#heritage' },
  { label: 'Contact', href: '#footer' },
];

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="font-heading text-xl tracking-widest text-white/90">
          SRIRANGA
        </span>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-subtitle text-sm tracking-wider text-white/70 hover:text-white transition-colors duration-300 uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`block w-6 h-px bg-white/80 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-6 h-px bg-white/80 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white/80 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-subtitle text-sm tracking-wider text-white/70 hover:text-white transition-colors uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
