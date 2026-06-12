# Sriranga Organics Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium scroll-driven storytelling website for Sriranga Organics with a pinned product that transforms through 4 color worlds.

**Architecture:** Next.js 14 App Router with GSAP/ScrollTrigger for the core scroll storytelling (pinned product, color-boundary transitions, logo animation) and Framer Motion for UI micro-interactions. Self-hosted Moonbase Delta font for headings, Courier Prime from Google Fonts for subtitles.

**Tech Stack:** Next.js 14+, React 18+, GSAP 3.12+, ScrollTrigger plugin, Framer Motion 11+, TypeScript, Tailwind CSS

---

### Task 1: Project Scaffolding + Dependencies

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.js` (CommonJS)
- Create: `next-env.d.ts`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js` (CommonJS)
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `app/page.tsx`
- Modify: `.gitignore`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "neo-sriranga",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "gsap": "^3.12.0",
    "framer-motion": "^11.0.0",
    "@types/gsap": "^3.0.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

- [ ] **Step 2: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create next.config.js**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

- [ ] **Step 4: Create tailwind.config.ts**

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sambar: '#8B1A1A',
        bisibelebath: '#D4782B',
        puliyogare: '#4A2810',
        rasam: '#C0392B',
      },
      fontFamily: {
        heading: ['"Moonbase Delta"', 'serif'],
        subtitle: ['"Courier Prime"', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 5: Create postcss.config.js**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 6: Create app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

@font-face {
  font-family: 'Moonbase Delta';
  src: url('/fonts/Moonbase Delta.otf') format('opentype'),
       url('/fonts/Moonbase Delta.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Moonbase Delta';
  src: url('/fonts/Moonbase Delta Italic.otf') format('opentype'),
       url('/fonts/Moonbase Delta Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

:root {
  --color-sambar: #8B1A1A;
  --color-bisibelebath: #D4782B;
  --color-puliyogare: #4A2810;
  --color-rasam: #C0392B;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: auto;
}

body {
  font-family: 'Courier Prime', monospace;
  background-color: #8B1A1A;
  color: #f5f0e8;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(245, 240, 232, 0.3);
  border-radius: 3px;
}
```

- [ ] **Step 7: Create minimal app/layout.tsx**

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sriranga Organics',
  description: 'Premium organic spices since 1947',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 8: Create minimal app/page.tsx**

```tsx
'use client';

export default function Home() {
  return (
    <main>
      <h1 className="font-heading text-6xl text-white">Sriranga Organics</h1>
    </main>
  );
}
```

- [ ] **Step 9: Create .gitignore**

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

- [ ] **Step 10: Create next-env.d.ts**

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
```

- [ ] **Step 11: Install dependencies**

```bash
cd "C:\Users\raghu\Desktop\sriranga-web"
npm install
```

- [ ] **Step 12: Create asset directories and copy files**

```bash
New-Item -ItemType Directory -Path "public\fonts" -Force
New-Item -ItemType Directory -Path "public\assets" -Force
New-Item -ItemType Directory -Path "public\products" -Force
New-Item -ItemType Directory -Path "components" -Force
Copy-Item "Moonbase Delta.ttf" "public\fonts\"
Copy-Item "Moonbase Delta Italic.ttf" "public\fonts\"
Copy-Item "Moonbase Delta.otf" "public\fonts\"
Copy-Item "Moonbase Delta Italic.otf" "public\fonts\"
Copy-Item "assets\*.png" "public\assets\"
Copy-Item "product\*.png" "public\products\"
```

- [ ] **Step 13: Run dev server to verify**

```bash
npm run dev
```

Expected: Page loads at localhost:3000 with "Sriranga Organics" in Moonbase Delta font.

- [ ] **Step 14: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Next.js project with GSAP, Framer Motion, Tailwind"
git remote add origin https://github.com/ragwhoo/neo-sriranga.git
```

---

### Task 2: Navigation Component

**Files:**
- Create: `components/Navigation.tsx`

- [ ] **Step 1: Write components/Navigation.tsx**

```tsx
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
```

- [ ] **Step 2: Dev check**

Verify Navigation renders correctly.

- [ ] **Step 3: Commit**

```bash
git add components/Navigation.tsx
git commit -m "feat: add Navigation component with responsive menu"
```

---

### Task 3: Loading Sequence

**Files:**
- Create: `components/LoadingSequence.tsx`

- [ ] **Step 1: Write components/LoadingSequence.tsx**

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

interface LoadingSequenceProps {
  onComplete: () => void;
}

export default function LoadingSequence({ onComplete }: LoadingSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const motifRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      onComplete,
      defaults: { ease: 'power2.inOut' },
    });

    // Motif slowly rotates throughout
    gsap.to(motifRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    // Initial pause to feel the mood
    tl.to({}, { duration: 1.5 });

    // Emblem begins moving toward product position
    tl.to(emblemRef.current, {
      x: '45vw',
      y: '-5vh',
      scale: 0.4,
      duration: 2.5,
      ease: 'power3.inOut',
    }, '-=0.5');

    // Golden trail effect
    tl.to(trailRef.current, {
      opacity: 0.4,
      scaleX: 1.5,
      duration: 1.5,
      ease: 'power2.out',
    }, '-=2');

    // Product fades in behind emblem
    tl.to(productRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
    }, '-=1.8');

    // Golden trail fades
    tl.to(trailRef.current, {
      opacity: 0,
      duration: 0.8,
    }, '-=0.5');

    // Emblem settles into exactly the right position
    tl.to(emblemRef.current, {
      duration: 0.6,
      ease: 'power1.out',
    });

    // Fade out loading screen
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    }, '+=0.3');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#8B1A1A' }}
    >
      {/* Rotating Mayan motif */}
      <div
        ref={motifRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/assets/bbigcircle.png"
          alt=""
          width={800}
          height={800}
          className="opacity-20 w-[80vmin] h-[80vmin] object-contain"
          priority
        />
      </div>

      {/* Golden trail */}
      <div
        ref={trailRef}
        className="absolute w-32 h-32 opacity-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(212,175,55,0.6) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Grandfather emblem */}
      <div ref={emblemRef} className="relative z-10">
        <Image
          src="/assets/loadinggrandfather.png"
          alt="Sriranga Organics"
          width={400}
          height={400}
          className="w-[50vmin] h-[50vmin] object-contain"
          priority
        />
      </div>

      {/* Hero product emerging behind */}
      <div
        ref={productRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-95"
      >
        <Image
          src="/products/sambar.png"
          alt=""
          width={1366}
          height={768}
          className="w-[80vw] max-w-[800px] h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/LoadingSequence.tsx
git commit -m "feat: add LoadingSequence with grandfather to package animation"
```

---

### Task 4: Product World Data + Color Constants

**Files:**
- Create: `lib/worlds.ts`

- [ ] **Step 1: Write lib/worlds.ts**

```ts
export interface World {
  id: string;
  name: string;
  productName: string;
  color: string;
  productImage: string;
  subtitle: string;
}

export const worlds: World[] = [
  {
    id: 'sambar',
    name: 'World 1',
    productName: 'Sambar Powder',
    color: '#8B1A1A',
    productImage: '/products/sambar.png',
    subtitle: 'Deep Heritage Red',
  },
  {
    id: 'bisibelebath',
    name: 'World 2',
    productName: 'Bisibelebath Powder',
    color: '#D4782B',
    productImage: '/products/bisibelebath.png',
    subtitle: 'Warm Turmeric Orange',
  },
  {
    id: 'puliyogare',
    name: 'World 3',
    productName: 'Puliyogare Powder',
    color: '#4A2810',
    productImage: '/products/puliogare.png',
    subtitle: 'Deep Tamarind Brown',
  },
  {
    id: 'rasam',
    name: 'World 4',
    productName: 'Rasam Powder',
    color: '#C0392B',
    productImage: '/products/rasam.png',
    subtitle: 'Bright Chilli Red',
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add lib/worlds.ts
git commit -m "feat: add world data and color constants"
```

---

### Task 5: Pinned Product Scroll Story — Core Experience

**Files:**
- Create: `components/PinnedProductStory.tsx`

- [ ] **Step 1: Write components/PinnedProductStory.tsx**

```tsx
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
  const overlayRef = useRef<HTMLDivElement>(null);

  const [currentWorld, setCurrentWorld] = useState(0);
  const [prevWorld, setPrevWorld] = useState(0);
  const [sweepProgress, setSweepProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const pin = pinRef.current;
    const sections = sectionsRef.current;
    const product = productRef.current;
    const overlay = overlayRef.current;

    if (!container || !pin || !sections || !product || !overlay) return;

    const ctx = gsap.context(() => {
      // Pin the product container throughout the world sections
      ScrollTrigger.create({
        trigger: sections,
        start: 'top top',
        end: 'bottom bottom',
        pin: pin,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      // For each transition between worlds, create a sweeping effect
      worlds.forEach((_, index) => {
        if (index === 0) return;

        const toggleActions = 'play none none reverse';

        // Clip-path sweep: new color enters from left
        ScrollTrigger.create({
          trigger: sections.children[index] as HTMLElement,
          start: 'top bottom',
          end: 'top top',
          scrub: 1.5,
          toggleActions,
          onUpdate: (self) => {
            const progress = self.progress;
            const sweepValue = progress * 100;

            overlay.style.clipPath = `inset(0 ${100 - sweepValue}% 0 0)`;
            overlay.style.backgroundColor = worlds[index].color;

            // Set product sync state
            setPrevWorld(index - 1);
            setSweepProgress(progress);
            setIsTransitioning(progress > 0 && progress < 1);

            // When boundary passes center, swap product
            if (progress > 0.5 && currentWorld !== index) {
              setCurrentWorld(index);
            }
            if (progress < 0.2 && currentWorld === index) {
              setCurrentWorld(index - 1);
            }
          },
        });

        // Product rotation during transition
        ScrollTrigger.create({
          trigger: sections.children[index] as HTMLElement,
          start: 'top bottom',
          end: 'top top',
          scrub: 1.5,
          toggleActions,
          onUpdate: (self) => {
            const rotProgress = self.progress;
            const rotation = rotProgress * 8 - 4; // -4deg to +4deg
            gsap.to(product, {
              rotation,
              duration: 0.1,
              overwrite: 'auto',
            });
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Overlay for color boundary sweep */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          clipPath: 'inset(0 100% 0 0)',
          backgroundColor: worlds[1].color,
        }}
      />

      {/* Pinned product */}
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

          {/* World label */}
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

      {/* Scroll trigger sections */}
      <div ref={sectionsRef}>
        {worlds.map((world) => (
          <section
            key={world.id}
            className="h-screen w-full"
            style={{ backgroundColor: world.color }}
          />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/PinnedProductStory.tsx
git commit -m "feat: add pinned product scroll story with color boundary sweep"
```

---

### Task 6: Hero Section

**Files:**
- Create: `components/HeroSection.tsx`

- [ ] **Step 1: Write components/HeroSection.tsx**

```tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function HeroSection() {
  const productRef = useRef<HTMLDivElement>(null);
  const motifRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!productRef.current) return;

    // Subtle floating animation
    gsap.to(productRef.current, {
      y: 8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Slow motif rotation
    gsap.to(motifRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-sambar">
      {/* Motif behind */}
      <div
        ref={motifRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/assets/bbigcircle.png"
          alt=""
          width={600}
          height={600}
          className="w-[70vmin] h-[70vmin] object-contain opacity-10"
          priority
        />
      </div>

      {/* Floating product */}
      <div ref={productRef} className="relative z-10">
        <Image
          src="/products/sambar.png"
          alt="Sambar Powder"
          width={1366}
          height={768}
          className="w-[80vw] max-w-[700px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Minimal copy */}
      <div
        ref={textRef}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="font-subtitle text-sm text-white/40 tracking-[0.3em] uppercase">
          Since 1947
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/HeroSection.tsx
git commit -m "feat: add HeroSection with floating product and motif"
```

---

### Task 7: Heritage Section

**Files:**
- Create: `components/HeritageSection.tsx`

- [ ] **Step 1: Write components/HeritageSection.tsx**

```tsx
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
          });
          gsap.to(textRef.current, {
            y: 30 * self.progress,
            opacity: 0.3 + 0.7 * self.progress,
            duration: 0.1,
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
          {/* Portrait */}
          <div ref={portraitRef} className="opacity-30">
            <Image
              src="/assets/loadinggrandfather.png"
              alt="Our Founder"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>

          {/* Story text */}
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
```

- [ ] **Step 2: Commit**

```bash
git add components/HeritageSection.tsx
git commit -m "feat: add HeritageSection with grandfather portrait and story"
```

---

### Task 8: Product Collection

**Files:**
- Create: `components/ProductCollection.tsx`

- [ ] **Step 1: Write components/ProductCollection.tsx**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/ProductCollection.tsx
git commit -m "feat: add ProductCollection grid"
```

---

### Task 9: Footer Component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Write components/Footer.tsx**

```tsx
export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full py-16 px-8 border-t border-white/10"
      style={{ backgroundColor: '#0f0805' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl text-white/90 mb-4">
              Sriranga
            </h3>
            <p className="font-subtitle text-xs text-white/40 leading-relaxed">
              Premium organic spices since 1947.
              <br />
              Crafted with tradition. Made with love.
            </p>
          </div>

          <div>
            <h4 className="font-subtitle text-xs text-white/60 tracking-widest uppercase mb-4">
              Contact
            </h4>
            <p className="font-subtitle text-xs text-white/40 leading-relaxed">
              Sriranga Organics
              <br />
              Karnataka, India
              <br />
              hello@srirangaorganic.com
            </p>
          </div>

          <div>
            <h4 className="font-subtitle text-xs text-white/60 tracking-widest uppercase mb-4">
              Follow
            </h4>
            <div className="flex gap-4 font-subtitle text-xs text-white/40">
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="font-subtitle text-xs text-white/20">
            &copy; {new Date().getFullYear()} Sriranga Organics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add Footer component"
```

---

### Task 10: Main Page Assembly

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Rewrite app/page.tsx**

```tsx
'use client';

import { useState } from 'react';
import LoadingSequence from '@/components/LoadingSequence';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PinnedProductStory from '@/components/PinnedProductStory';
import HeritageSection from '@/components/HeritageSection';
import ProductCollection from '@/components/ProductCollection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingSequence onComplete={() => setIsLoading(false)} />;
  }

  return (
    <main>
      <Navigation />
      <HeroSection />
      <PinnedProductStory />
      <HeritageSection />
      <ProductCollection />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Dev check**

Run `npm run dev` and verify:
1. Loading sequence plays (grandfather emblem moves, product appears, nav fades in)
2. Hero section shows sambar product floating
3. Scrolling through worlds: product stays pinned, colors change, boundary sweeps
4. Heritage section appears with grandfather portrait
5. Product grid shows all 4 products
6. Footer renders

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble main page with all sections"
```

---

### Task 11: Product Unpin — Final Moment

**Files:**
- Modify: `components/PinnedProductStory.tsx`

- [ ] **Step 1: Add unpin animation at end of scroll story**

After all 4 worlds, the product should unpin and transition away. Modify the ScrollTrigger at the end of the `useEffect`:

```tsx
// After all ScrollTrigger.create calls, add final unpin
ScrollTrigger.create({
  trigger: sections.children[worlds.length - 1] as HTMLElement,
  start: 'bottom bottom',
  end: 'bottom top',
  scrub: 1,
  onUpdate: (self) => {
    if (self.progress > 0) {
      gsap.to(pin, {
        opacity: 1 - self.progress,
        scale: 1 - self.progress * 0.3,
        y: -self.progress * 200,
        duration: 0.1,
        overwrite: 'auto',
      });
    }
  },
});
```

- [ ] **Step 2: Commit**

```bash
git add components/PinnedProductStory.tsx
git commit -m "feat: add product unpin animation at end of scroll story"
```

---

### Task 12: Polish + Responsive + Performance

**Files:**
- Modify: `app/globals.css`
- Modify: `components/PinnedProductStory.tsx`

- [ ] **Step 1: Add smooth scroll container CSS**

```css
/* In app/globals.css, add: */
.smooth-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(245, 240, 232, 0.3) transparent;
}
```

- [ ] **Step 2: Mobile adjustments for PinnedProductStory**

Add a state check for mobile viewport and simplify transitions:

```tsx
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  setIsMobile(window.innerWidth < 768);
}, []);
```

On mobile, reduce the clip-path sweep to a simple color fade by adjusting the overlay behavior.

- [ ] **Step 3: Optimize images**

Add `loading="lazy"` to all non-critical images (ProductCollection grid items).

- [ ] **Step 4: Full build test**

```bash
npm run build
```

Ensure no TypeScript errors, no lint errors.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "chore: polish responsive layout, optimize images, clean up"
```

---

### Task 13: Git Push to Remote

- [ ] **Step 1: Push to GitHub**

```bash
git push -u origin master
```
