"use client";

import React, { useState } from "react";
import { Flavor, FLAVORS } from "@/data/sodaData";
import { SodaCan3D } from "./SodaCan3D";
import { Sparkles, Star, Plus, ShieldCheck, Zap, Heart, CheckCircle2 } from "lucide-react";
import { soundManager } from "./SoundEffects";
import confetti from "canvas-confetti";

interface HeroSectionProps {
  onAddToCart: (flavor: Flavor, packSize: "12-pack") => void;
  selectedFlavor: Flavor;
  onSelectFlavor: (flavor: Flavor) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onAddToCart,
  selectedFlavor,
  onSelectFlavor,
}) => {
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleFlavorChange = (f: Flavor) => {
    onSelectFlavor(f);
    soundManager.playCanOpen();
  };

  const handleHeroAddToCart = () => {
    soundManager.playCanOpen();
    onAddToCart(selectedFlavor, "12-pack");
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);

    // Confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: [selectedFlavor.primaryColor, selectedFlavor.secondaryColor, "#ffffff"],
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[500px] rounded-full blur-[140px] opacity-40 pointer-events-none transition-colors duration-1000 -z-10"
        style={{
          background: `radial-gradient(ellipse at center, ${selectedFlavor.primaryColor} 0%, ${selectedFlavor.secondaryColor} 40%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Interactive Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Top Rating & Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6 animate-pulse-glow">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-zinc-200">
                {selectedFlavor.rating} Rating • 14,000+ Sippers
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                {selectedFlavor.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white">
              SODA WITH{" "}
              <span
                className="text-transparent bg-clip-text transition-all duration-700"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${selectedFlavor.accentColor} 0%, #ffffff 50%, ${selectedFlavor.primaryColor} 100%)`,
                }}
              >
                BENEFITS.
              </span>
              <br />
              ZERO GUILT.
            </h1>

            {/* Flavor Tagline */}
            <p className="mt-4 text-lg sm:text-xl font-medium text-zinc-300 max-w-xl">
              {selectedFlavor.tagline}
            </p>

            <p className="mt-2 text-sm text-zinc-400 max-w-lg leading-relaxed">
              {selectedFlavor.description}
            </p>

            {/* Flavor Switcher Pills */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5">
              {FLAVORS.map((flavor) => {
                const isActive = flavor.id === selectedFlavor.id;
                return (
                  <button
                    key={flavor.id}
                    onClick={() => handleFlavorChange(flavor)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                      isActive
                        ? "bg-white/15 border-white/40 text-white scale-105 shadow-lg shadow-black/40"
                        : "bg-white/[0.04] border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-white/30"
                      style={{ backgroundColor: flavor.primaryColor }}
                    />
                    {flavor.name.split("&")[0]}
                  </button>
                );
              })}
            </div>

            {/* Tasting Notes Cloud */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              <span className="text-xs font-medium text-zinc-400 self-center mr-1">Notes:</span>
              {selectedFlavor.tastingNotes.map((note, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300 font-medium"
                >
                  {note}
                </span>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={handleHeroAddToCart}
                className={`relative w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl hover:scale-105 active:scale-95 text-black ${
                  addedAnimation ? "bg-emerald-400" : "bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300"
                }`}
                style={{
                  boxShadow: `0 10px 30px ${selectedFlavor.glowColor}`,
                }}
              >
                {addedAnimation ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Added to Crate!
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5 stroke-[3]" />
                    Order 12-Pack • ${selectedFlavor.prices.pack12}
                  </>
                )}
              </button>

              <a
                href="#crate-builder"
                onClick={() => soundManager.playBubblePop()}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-semibold text-sm tracking-wide transition-all duration-200 text-center"
              >
                Build Custom 12-Pack
              </a>
            </div>

            {/* Key Value Micro Badges */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center sm:text-left w-full max-w-md">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-white">{selectedFlavor.fiber}</span>
                <span className="text-[11px] text-zinc-400 uppercase font-medium">Prebiotic Fiber</span>
              </div>
              <div className="flex flex-col border-x border-white/10 px-3">
                <span className="text-xl sm:text-2xl font-black text-white">{selectedFlavor.calories}</span>
                <span className="text-[11px] text-zinc-400 uppercase font-medium">Calories/Can</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-white">{selectedFlavor.sugar}</span>
                <span className="text-[11px] text-zinc-400 uppercase font-medium">Real Fruit Sugar</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic 3D Soda Can Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative z-10 py-6">
              <SodaCan3D flavor={selectedFlavor} size="xl" />
            </div>

            {/* Micro Feature Bubbles surrounding can */}
            <div className="hidden sm:flex absolute -right-2 top-16 glass-panel-glow px-3.5 py-2 rounded-2xl items-center gap-2 text-xs font-semibold text-white animate-float" style={{ animationDelay: "1s" }}>
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Real Botanical Infusions</span>
            </div>

            <div className="hidden sm:flex absolute -left-4 bottom-24 glass-panel-glow px-3.5 py-2 rounded-2xl items-center gap-2 text-xs font-semibold text-white animate-float" style={{ animationDelay: "2.5s" }}>
              <Heart className="w-4 h-4 text-pink-400" />
              <span>Happy Gut Microbiome</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
