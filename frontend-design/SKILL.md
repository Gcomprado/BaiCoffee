---
name: frontend-design
description: Design system, interactive component guidelines, aesthetic tokens, and architectural standards for high-converting beverage & eCommerce landing pages.
---

# Frontend Design System & Craft Guidelines

## 1. Visual & Aesthetic Principles
- **Color Palette & Lighting**:
  - Dark Mode Base: `#07090e` with deep slate/zinc tones (`#121622`, `#18181b`).
  - Dynamic Accent Radiance: Ambient glow filters matching active beverage flavor hues (Amber `#f59e0b`, Magenta `#ec4899`, Emerald `#10b981`, Violet `#8b5cf6`).
  - Glassmorphism: `backdrop-filter: blur(16px)` with delicate white translucent borders (`rgba(255, 255, 255, 0.08)`).

- **Typography**:
  - Primary Font: **Plus Jakarta Sans** (weights 400 through 900) for clean modern high-fashion editorial feel.
  - Heading Hierarchies: Ultra-bold tracking-tight headlines with gradient text fills.

## 2. Interactive Components
1. **Procedural Web Audio Engine** (`src/components/SoundEffects.ts`):
   - Real-time synthesis of can opening snap/fizz and sparkling bubble pops using Web Audio API oscillators and noise buffers without external audio files.
2. **Dynamic 3D Can Renderer** (`src/components/SodaCan3D.tsx`):
   - SVG cylinder gradient lighting with metallic brushed rims, condensation water beads, gloss highlights, and floating badge physics.
3. **Micro-Bubble Particle Canvas** (`src/components/FizzCanvas.tsx`):
   - Continuous 60fps rising bubbles with glint reflections.
4. **Interactive Custom Crate Builder** (`src/components/CustomPackBuilder.tsx`):
   - Live visual 12-slot crate that fills in real-time as users mix and match flavors.
5. **Slide-Out Cart Drawer** (`src/components/CartDrawer.tsx`):
   - Free shipping progress bar ($35 threshold), promo code discounts (`FIZZ20` for 20% off), instant confetti bursts, and simulated 1-click checkout.
6. **Comparison Matrix & Gut Science** (`src/components/ComparisonSection.tsx`, `src/components/GutHealthScience.tsx`):
   - Side-by-side comparison with legacy sodas and 3-pillar microbiome health breakdown.
