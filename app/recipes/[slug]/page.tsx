'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Flame, Users, ArrowLeft } from 'lucide-react';
import { recipes } from '@/lib/recipes';
import { useState, useEffect, useLayoutEffect } from 'react';
import Lenis from 'lenis';

export default function RecipePage() {
  const { slug } = useParams();
  const recipe = recipes.find((r) => r.slug === slug);
  const [baseColor, setBaseColor] = useState(recipe?.color || '#fef3ea');
  const [onDarkBg, setOnDarkBg] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const cb = document.querySelector('[data-color-banner]');
      if (cb) {
        const r = cb.getBoundingClientRect();
        setOnDarkBg(r.top <= 80 && r.bottom >= 0);
      } else {
        setOnDarkBg(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.style.transform = '';
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });
    lenis.scrollTo(0, { immediate: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    if (!recipe) return;
    const stored = sessionStorage.getItem('sriranga_prev_color');
    if (stored && stored !== recipe.color) {
      setBaseColor(stored);
      const timer = setTimeout(() => setBaseColor(recipe.color), 600);
      return () => clearTimeout(timer);
    }
    sessionStorage.setItem('sriranga_prev_color', recipe.color);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!recipe) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fef3ea' }}>
        <p className="text-[#8B1A1A] text-lg">Recipe not found</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fef3ea' }}>
      <div className="fixed top-0 inset-x-0 z-[70] flex items-center justify-between px-6 md:px-10 py-4">
        <Link href="/">
          <div className="w-28 h-14" style={{
            backgroundColor: onDarkBg ? '#ffffff' : '#8B1A1A',
            maskImage: 'url(/srirangalogo.png)',
            maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center',
            WebkitMaskImage: 'url(/srirangalogo.png)',
            WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center',
          }} />
        </Link>
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm transition-colors" style={{ color: onDarkBg ? 'rgba(255,255,255,0.6)' : 'rgba(139,26,26,0.6)' }}>
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <style>{`
        @keyframes wipeIn {
          from { clip-path: circle(0% at 50% 50%); }
          to   { clip-path: circle(150% at 50% 50%); }
        }
      `}</style>
      <div data-color-banner className="relative h-48 md:h-64 overflow-hidden" style={{ backgroundColor: baseColor }}>
        <div
          key={recipe.id}
          className="absolute inset-0"
          style={{
            backgroundColor: recipe.color,
            animation: 'wipeIn 0.6s ease-in-out backwards',
          }}
        >
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 0%, ${recipe.color}dd 100%)` }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-8 flex items-end h-full">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/60 text-[10px] tracking-[0.3em] uppercase mb-2"
            >
              {recipe.product} &middot; {recipe.category}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-moonbase tracking-wider text-white leading-tight"
            >
              {recipe.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="lg:hidden max-w-6xl mx-auto px-6 pt-6 pb-2 overflow-x-auto flex gap-2">
        {recipes.map((r) => (
          <Link key={r.id} href={`/recipes/${r.slug}`}>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors"
              style={{
                backgroundColor: r.id === recipe.id ? r.color : r.color + '15',
                color: r.id === recipe.id ? '#fff' : r.color,
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: r.color }} />
              {r.title.length > 20 ? r.title.slice(0, 20) + '...' : r.title}
            </span>
          </Link>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 flex gap-10">
        <aside className="hidden lg:flex flex-col gap-1.5 w-56 shrink-0">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#8B1A1A]/40 mb-3 font-semibold">All Recipes</p>
          {recipes.map((r, i) => (
            <Link key={r.id} href={`/recipes/${r.slug}`}>
              <motion.div
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: r.id === recipe.id ? r.color + '18' : 'transparent',
                  borderLeft: `3px solid ${r.id === recipe.id ? r.color : 'transparent'}`,
                }}
                whileHover={{ x: 4, backgroundColor: r.color + '12' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: r.color }} />
                <span className="text-xs font-medium leading-tight" style={{ color: r.id === recipe.id ? r.color : '#8B1A1A' }}>
                  {r.title}
                </span>
              </motion.div>
            </Link>
          ))}
        </aside>

        <div className="flex-1 min-w-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#8B1A1A]/50 hover:text-[#8B1A1A] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <p className="text-base leading-relaxed text-[#8B1A1A]/70 mb-8">{recipe.description}</p>

            <div className="flex items-center gap-6 mb-8 text-sm text-[#8B1A1A]/60 pb-8 border-b border-[#8B1A1A]/10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Prep {recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>Cook {recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`*${recipe.title}* - ${recipe.product}\n\n${recipe.description}\n\nIngredients: ${recipe.ingredients.join(', ')}\n\nMethod: ${recipe.method.join(' → ')}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all hover:scale-105"
                style={{ backgroundColor: recipe.color + '15', color: recipe.color }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Share on WhatsApp
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`${recipe.title} - ${recipe.product}\n\n${recipe.description}\n\nIngredients: ${recipe.ingredients.join(', ')}\n\nMethod: ${recipe.method.join('\n')}`);
                  alert('Copied! Paste it on Instagram.');
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all hover:scale-105"
                style={{ backgroundColor: recipe.color + '15', color: recipe.color }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Copy for Instagram
              </button>
            </div>

            <section className="mb-10">
              <h2 className="text-lg font-moonbase tracking-wider text-[#8B1A1A] mb-4 flex items-center gap-3">
                <span className="w-6 h-0.5 rounded-full" style={{ backgroundColor: recipe.color }} />
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ing, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
                    className="text-sm text-[#8B1A1A]/70 flex items-start gap-3 pl-4"
                  >
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: recipe.color }} />
                    {ing}
                  </motion.li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-moonbase tracking-wider text-[#8B1A1A] mb-4 flex items-center gap-3">
                <span className="w-6 h-0.5 rounded-full" style={{ backgroundColor: recipe.color }} />
                Method
              </h2>
              <ol className="space-y-4">
                {recipe.method.map((step, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + idx * 0.08, duration: 0.3 }}
                    className="text-sm text-[#8B1A1A]/70 flex items-start gap-4 pl-4"
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: recipe.color }}
                    >
                      {idx + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </section>

            <div className="mt-16 pt-8 border-t border-[#8B1A1A]/10 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-[#8B1A1A]/50 hover:text-[#8B1A1A] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      </motion.div>
    </main>
  );
}
