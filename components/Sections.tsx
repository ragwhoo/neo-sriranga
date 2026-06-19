'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import Recipes from './Recipes';

const blurFadeIn = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  whileInView: { opacity: 1, filter: 'blur(0px)' },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: true },
};

const products = [
  { name: 'Sambar Mix', desc: 'A balanced blend of spices and ingredients designed to bring authentic South Indian flavor to every meal.', img: '/products/sambar.png', color: '#a80000' },
  { name: 'Bisibelebath Mix', desc: 'A rich and comforting preparation inspired by Karnataka\'s most beloved traditional dish.', img: '/products/bisibelebath.png', color: '#fba20d' },
  { name: 'Puliyogare Mix', desc: 'Tangy, aromatic, and deeply rooted in temple-town culinary traditions.', img: '/products/puliogare.png', color: '#650f09' },
  { name: 'Rasam Mix', desc: 'A tangy and peppery preparation rooted in traditional South Indian cuisine.', img: '/products/rasam.png', color: '#ff5a5a' },
];

export default function Sections() {
  const photoClipRef = useRef<HTMLDivElement>(null);
  const flavourRef = useRef<HTMLHeadingElement>(null);
  const [photoRevealed, setPhotoRevealed] = useState(false);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tlRef.current = gsap.timeline({ paused: true });
    tlRef.current
      .to(photoClipRef.current, { clipPath: 'circle(100% at 50% 50%)', duration: 0.6, ease: 'power3.out' })
      .fromTo(flavourRef.current, { x: '100%' }, { x: '-100%', duration: 4, ease: 'power2.out', repeat: -1 }, '-=0.3');
  }, []);

  const handleReveal = () => {
    if (photoRevealed) return;
    setPhotoRevealed(true);
    tlRef.current?.play();
  };

  return (
    <>
      <section id="our-roots" className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-8 py-24 text-center">
        <motion.p {...blurFadeIn} className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8B1A1A]/40 mb-4">Our Roots</motion.p>
        <motion.h2 {...blurFadeIn} className="text-6xl md:text-7xl lg:text-8xl font-['Moonbase_Delta'] tracking-wider text-[#8B1A1A] mb-6">Rooted in Tradition. Crafted for Today.</motion.h2>
        <motion.p {...blurFadeIn} className="text-base md:text-lg leading-relaxed text-[#8B1A1A]/70 max-w-2xl">At Sriranga Organics, every product begins with a simple belief: good food should come from honest ingredients. Inspired by traditional recipes and time-tested methods, we create products that celebrate the richness of natural farming and authentic Indian flavors.</motion.p>
      </section>

      <div id="photo-section" className="relative h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#8B1A1A' }}>
        <div className="absolute inset-0">
          <Image src="/photo-bw.png" alt="" fill className="object-cover" priority />
        </div>
        <div ref={photoClipRef} className="absolute inset-0" style={{ clipPath: 'circle(40px at 50% 50%)', zIndex: 1 }}>
          <Image src="/phot.png" alt="" fill className="object-cover" />
        </div>
        {!photoRevealed && (
          <div className="absolute z-20 flex flex-col items-center gap-4 cursor-pointer" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} onClick={handleReveal}>
            <div className="w-24 h-24 rounded-full flex items-center justify-center animate-pulse" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '3px solid white', boxShadow: '0 0 40px rgba(0,0,0,0.5), 0 0 0 8px rgba(0,0,0,0.15)' }}>
              <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">Click</span>
            </div>
            <span className="text-white text-xs tracking-[0.3em] uppercase font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">to reveal</span>
          </div>
        )}
        <h1 ref={flavourRef} className="absolute top-1/2 -translate-y-1/2 z-20 whitespace-nowrap text-[32vw] md:text-[22rem] font-bold tracking-[0.05em] text-white leading-none select-none pointer-events-none">
          FLAAAAAAAAAVVVVVVVVVVOOOOOOOOOUUUUUUUURRRRRR!!!!!!!
        </h1>
      </div>

      <section id="products" className="relative flex flex-col justify-center items-center px-6 md:px-8 py-24 text-center">
        <motion.p {...blurFadeIn} className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8B1A1A]/40 mb-4">Featured Products</motion.p>
        <motion.h2 {...blurFadeIn} className="text-6xl md:text-7xl lg:text-8xl font-['Moonbase_Delta'] tracking-wider text-[#8B1A1A] mb-4">Inspired by Tradition</motion.h2>
        <motion.p {...blurFadeIn} className="text-base md:text-lg leading-relaxed text-[#8B1A1A]/70 max-w-2xl mb-12">A collection of carefully crafted products that celebrate the diversity of Indian ingredients and culinary heritage.</motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl w-full">
          {products.map((p) => (
            <motion.div key={p.name} {...blurFadeIn} className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={e => { const c = e.currentTarget.querySelector('[data-pc]') as HTMLElement; if(c) gsap.to(c, { clipPath: 'circle(100% at 50% 50%)', duration: 0.5, ease: 'power2.inOut' }); }}
              onMouseLeave={e => { const c = e.currentTarget.querySelector('[data-pc]') as HTMLElement; if(c) gsap.to(c, { clipPath: 'circle(32px at 50% 50%)', duration: 0.5, ease: 'power2.inOut' }); }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <div data-pc className="absolute inset-0" style={{ backgroundColor: p.color, clipPath: 'circle(32px at 50% 50%)' }} />
                <Image src={p.img} alt={p.name} fill className="object-cover relative z-[1]" />
              </div>
              <div className="p-6"><h3 className="text-xl font-['Moonbase_Delta'] tracking-wider text-[#8B1A1A] mb-1">{p.name}</h3><p className="text-sm leading-relaxed text-[#8B1A1A]/60">{p.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </section>

      <Recipes />

      <section id="story" className="relative flex flex-col justify-center items-center px-6 md:px-8 py-24 text-center">
        <motion.p {...blurFadeIn} className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8B1A1A]/40 mb-4">About</motion.p>
        <motion.h2 {...blurFadeIn} className="text-6xl md:text-7xl lg:text-8xl font-['Moonbase_Delta'] tracking-wider text-[#8B1A1A] mb-6">About Sriranga Organics</motion.h2>
        <motion.p {...blurFadeIn} className="text-base md:text-lg leading-relaxed text-[#8B1A1A]/70 max-w-2xl">Rooted in India&apos;s agricultural heritage, we craft genuine, traditional products with transparency and respect for natural ingredients — honoring both the farmer and the consumer.</motion.p>
      </section>

      <footer id="contact" className="relative bg-[#8B1A1A] font-sans antialiased">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(/flowerrrr.png)', backgroundSize: '300px', backgroundRepeat: 'repeat', filter: 'invert(1)' }} />
        </div>
        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="relative px-6 pt-12 sm:px-10 sm:pt-16 lg:px-14 lg:pt-20 xl:px-20">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 lg:flex-row lg:gap-16 xl:gap-20">
            <motion.div variants={{ hidden: { opacity: 0, y: 18, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', duration: 0.6, bounce: 0 } } }} className="flex shrink-0 flex-col gap-5 lg:max-w-[260px]">
              <div className="flex items-center gap-2"><img src="/srirangalogo.png" alt="Sriranga" className="h-14 w-auto brightness-0 invert" /></div>
              <p className="text-sm leading-[1.6] font-light text-white/60">Crafting organic traditions. Premium spices and authentic blends rooted in India&apos;s culinary heritage.</p>
              <div className="flex items-center gap-3 mt-1">
                {[{l:'WhatsApp',h:'https://wa.me/919999999999',d:'M17.472...'},{l:'Instagram',h:'https://instagram.com',d:'M12 2.163...'}].map(b=>(
                  <motion.a key={b.l} href={b.h} target="_blank" rel="noopener noreferrer" variants={{ hidden: { opacity: 0, y: 10, filter: 'blur(4px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', duration: 0.5, bounce: 0 } } }} whileTap={{ scale: 0.96 }} className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-white py-0.5 pr-1 pl-5 transition-[box-shadow] duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.15),0_0_20px_rgba(255,255,255,0.12)]">
                    <span className="text-sm font-medium text-[#8B1A1A]">{b.l}</span>
                    <span className="flex size-10 items-center justify-center rounded-full bg-[#8B1A1A]">
                      {b.l==='WhatsApp'?<svg className="size-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>:<svg className="size-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            <motion.nav variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.02 } } }} aria-label="Footer navigation" className="grid w-full max-w-[540px] grid-cols-2 gap-y-8 sm:grid-cols-3">
              {[{ title: 'Products', links: [{ label: 'Our Products', href: '#products' }, { label: 'Recipes', href: '/recipes' }] }, { title: 'Company', links: [{ label: 'Our Story', href: '#story' }, { label: 'Contact', href: '#contact' }] }, { title: 'Connect', links: [{ label: 'Instagram', href: 'https://instagram.com' }, { label: 'WhatsApp', href: 'https://wa.me/919999999999' }, { label: 'Email', href: 'mailto:hello@srirangaorganics.com' }] }].map(col => (
                <motion.div key={col.title} variants={{ hidden: { opacity: 0, y: 18, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', duration: 0.6, bounce: 0 } } }}>
                  <h3 className="text-md leading-none font-normal tracking-wide text-white/80">{col.title}</h3>
                  <motion.ul variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }} className="mt-3 flex flex-col gap-3">
                    {col.links.map(link => (
                      <motion.li key={link.label} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.4, bounce: 0 } } }}>
                        <a href={link.href} className="inline-block text-sm leading-none font-light text-white/50 transition-colors duration-200 hover:text-white">{link.label}</a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </motion.nav>
          </div>
        </motion.div>
        <div className="relative flex items-center justify-between px-6 py-4 sm:px-10 xl:px-20"><p className="text-xs text-white/25">&copy; Sriranga Organics</p></div>
        <motion.div variants={{ hidden: { opacity: 0, y: 40, filter: 'blur(12px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', duration: 1.1, bounce: 0 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="flex justify-end overflow-hidden items-start" style={{ height: '14vw' }}>
          <h2 className="text-[36vw] md:text-[24rem] font-['Moonbase_Delta'] tracking-[0.02em] text-white leading-none select-none">SRIRANGA</h2>
        </motion.div>
      </footer>
    </>
  );
}
