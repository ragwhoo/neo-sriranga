# Sriranga Organics — Scroll-Driven Storytelling Website

## Overview

A premium scroll-driven storytelling website for Sriranga Organics. The site feels like an interactive brand film — combining Indian heritage branding with the visual language of Apple product reveals and Aesop editorial sophistication.

## Tech Stack

- **Framework:** Next.js 14+ (App Router) + React
- **Animation:** GSAP + ScrollTrigger (primary), Framer Motion (UI micro-interactions)
- **Fonts:**
  - Headings: Moonbase Delta (self-hosted TTF/OTF)
  - Subtitles: Courier Prime (Google Fonts)

## Assets

### Products (1366×768, same canvas, same positioning)
| File | Product |
|------|---------|
| `product/sambar.png` | Sambar Powder |
| `product/bisibelebath.png` | Bisibelebath Powder |
| `product/puliogare.png` | Puliyogare Powder |
| `product/rasam.png` | Rasam Powder |

### Brand Assets (1366×768)
| File | Usage |
|------|-------|
| `assets/loadinggrandfather.png` | Loading emblem + Heritage section |
| `assets/bbigcircle.png` | Mayan/Sun motif behind hero |
| `assets/circlebehindgrandpa.png` | Circle behind grandfather |
| `assets/grainbg.png` | Grain texture background |

### Fonts (in project root → move to `public/fonts/`)
| File | Usage |
|------|-------|
| `Moonbase Delta.ttf` | Heading font |
| `Moonbase Delta Italic.ttf` | Heading italic variant |
| `Moonbase Delta.otf` | Heading font (alt format) |
| `Moonbase Delta Italic.otf` | Heading italic (alt format) |

## Color Worlds

| # | World | Product | Color | Hex |
|---|-------|---------|-------|-----|
| 1 | Heritage Red | Sambar Powder | Deep Heritage Red | `#8B1A1A` |
| 2 | Turmeric Orange | Bisibelebath Powder | Warm Turmeric Orange | `#D4782B` |
| 3 | Tamarind Brown | Puliyogare Powder | Deep Tamarind Brown | `#4A2810` |
| 4 | Chilli Red | Rasam Powder | Bright Chilli Red | `#C0392B` |

## Sections

### 1. Loading Sequence

- Background: Deep heritage red (`#8B1A1A`)
- Center: Grandfather emblem (`loadinggrandfather.png`)
- Behind emblem: Large faded Mayan/sun motif (`bbigcircle.png`), slowly rotating
- No navigation, no text, no buttons, no product
- Mood: Mysterious, premium, ceremonial

### 2. Loading → Hero Transition

After assets load:
- Grandfather emblem moves toward product position
- Camera subtly pushes forward (scale transform)
- Sambar product starts emerging behind
- Emblem aligns perfectly with the circle/logo position on the sambar package
- Golden motion trail follows the emblem
- Symbolism: Legacy → Knowledge → Recipe → Product
- Once complete: product fully visible, navigation fades in

### 3. Hero Section (Sambar Powder)

- Product centered, large faded motif behind
- Navigation at top (minimal)
- Minimal copy: product name + tagline
- Gentle floating parallax (±5px, slow sine wave)
- No constant spinning or dramatic rotation

### 4. Pinned Product Scroll Storytelling (Core mechanic)

**The product remains pinned/fixed on screen while the world changes around it.**

Implementation:
- `ScrollTrigger` pin with 4 section panels
- Each panel is a full-viewport color world
- Product image stays fixed in center
- Background color transitions as scroll progresses between sections

### 5. Color World Transitions

**DO NOT:** sliders, carousels, tab switching, fade in/out

**DO:** Moving vertical boundary that sweeps across the viewport

At each world boundary (e.g., Red → Orange):
- A vertical clip-path line travels across the screen (left to right)
- The boundary physically passes THROUGH the fixed product
- While crossing: product rotates ~5°, product image swaps, shadows update, color world changes
- The user perceives the product *transforming*, not one image replacing another

### 6. Rasam Powder (Final World)

- Bright Chilli Red atmosphere
- Final pinned product moment
- At end of section: product finally unpins
- Product moves away / scales down / transitions upward
- Feeling: "The story is complete"

### 7. Heritage Section

- Bring back grandfather emblem (`loadinggrandfather.png`)
- Dark, editorial layout
- Large typography ("Our Story", origins, heritage, values)
- Beautiful spacing, premium storytelling layout
- No product visible — this is about the people

### 8. Product Collection

- Clean premium grid (2×2 or 4-column)
- Show all 4 products with consistent visual language
- Product name + brief description per card
- Normal browsing, no scroll-driven tricks

### 9. Footer

- Brand info, social links, contact
- Clean, minimal

## Animation System

### GSAP + ScrollTrigger

```
ScrollTrigger configuration:
- start: "top top"
- end: "bottom bottom" (for each world section)
- pin: product container
- scrub: 1 (smooth scroll-linked animation)
- anticipatePin: 1
```

### Loading Animation Timeline
1. Motif rotates (CSS animation, infinite slow spin)
2. After load: GSAP timeline runs
3. Emblem moves to product logo position (motion path)
4. Golden trail (CSS pseudo-element or canvas)
5. Product opacity 0→1
6. Nav fades in

### Scroll-Driven Timeline
```
Progress 0.0-0.25: World 1 (Sambar) - Heritage Red
  → at 0.25: clip-path sweeps, product transforms to Bisibelebath
Progress 0.25-0.50: World 2 (Bisibelebath) - Turmeric Orange
  → at 0.50: clip-path sweeps, product transforms to Puliyogare
Progress 0.50-0.75: World 3 (Puliyogare) - Tamarind Brown
  → at 0.75: clip-path sweeps, product transforms to Rasam
Progress 0.75-1.0: World 4 (Rasam) - Chilli Red
  → at 1.0: product unpins, transitions upward
```

### Boundary Sweep Effect
```css
clip-path: inset(0 {progress}% 0 0);
/* {progress} goes from 100 → 0 across the transition */
/* This creates a vertical line sweeping left to right */
```

## Responsive Strategy

- **Desktop (primary target):** Full scroll experience, pinned product, boundary transitions
- **Tablet:** Same mechanics, adjusted viewport heights, smaller product scale
- **Mobile:** Simplified — scroll distances reduced, boundary becomes opacity-based transform, product stacks vertically

## Success Criteria

Users should remember:
1. The grandfather becoming the package logo
2. The product remaining fixed while the world changed
3. The premium transformation from one product to another
