"use client";

import React from "react";
import { Check, X, Sparkles, HeartPulse, Flame, Droplets, ShieldCheck, Award } from "lucide-react";

export const ComparisonSection: React.FC = () => {
  const comparisonData = [
    {
      feature: "Gut-Loving Prebiotics",
      lumina: "5g Plant Inulin Fiber",
      legacy: "0g (Harms Gut Microbiome)",
      seltzer: "0g",
      luminaWin: true,
    },
    {
      feature: "Calories Per Can",
      lumina: "25 - 35 Calories",
      legacy: "140 - 180 Empty Calories",
      seltzer: "0 Calories",
      luminaWin: true,
    },
    {
      feature: "Added Cane Sugar / HFCS",
      lumina: "0g Added Sugar",
      legacy: "39g - 44g Sugar Bomb",
      seltzer: "0g",
      luminaWin: true,
    },
    {
      feature: "Artificial Sweeteners (Stevia/Sucralose)",
      lumina: "100% Free (No chemical aftertaste)",
      legacy: "Often loaded with Aspartame",
      seltzer: "None",
      luminaWin: true,
    },
    {
      feature: "Real Cold-Pressed Botanicals & Fruit",
      lumina: "Yes (Rare Yuzu, Hibiscus, Mint)",
      legacy: "Synthetic Artificial Flavors",
      seltzer: "Trace Lab Flavorings",
      luminaWin: true,
    },
    {
      feature: "Carbonation Profile",
      lumina: "Champagne Micro-Bubbles (Gentle)",
      legacy: "Aggressive & Bloating",
      seltzer: "Variable",
      luminaWin: true,
    },
    {
      feature: "Can Liners & Packaging",
      lumina: "BPA-Free • Infinitely Recyclable",
      legacy: "Standard Industrial Plastic/Aluminum",
      seltzer: "Standard",
      luminaWin: true,
    },
  ];

  return (
    <section id="comparison" className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">
            <HeartPulse className="w-3.5 h-3.5" />
            The Superior Choice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How Lumina Spritz Reinvents Soda.
          </h2>
          <p className="mt-4 text-zinc-400 text-base">
            Never compromise between vibrant, craveable flavor and wholesome metabolic wellness.
          </p>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="overflow-x-auto">
          <div className="min-w-[700px] glass-panel-glow rounded-3xl overflow-hidden border border-white/10">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-white/[0.04] p-6 border-b border-white/10 items-center">
              <div className="col-span-4 text-xs font-bold uppercase tracking-wider text-zinc-400">
                Ingredients & Science
              </div>
              <div className="col-span-3 text-center">
                <div className="inline-flex flex-col items-center">
                  <span className="text-base font-black text-amber-400 flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> LUMINA SPRITZ
                  </span>
                  <span className="text-[10px] text-zinc-400 font-semibold uppercase">The New Standard</span>
                </div>
              </div>
              <div className="col-span-3 text-center">
                <div className="text-sm font-bold text-zinc-400">Traditional Big Soda</div>
                <div className="text-[10px] text-zinc-500">High Sugar / Diet Brands</div>
              </div>
              <div className="col-span-2 text-center">
                <div className="text-sm font-bold text-zinc-400">Plain Seltzer</div>
                <div className="text-[10px] text-zinc-500">Sparkling Water</div>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/5">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 p-5 items-center hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-4 text-sm font-semibold text-white">
                    {row.feature}
                  </div>

                  {/* Lumina (Highlight Column) */}
                  <div className="col-span-3 text-center px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-300 flex items-center justify-center gap-1.5 shadow-sm">
                    <Check className="w-4 h-4 text-emerald-400 stroke-[3] shrink-0" />
                    <span>{row.lumina}</span>
                  </div>

                  {/* Traditional Big Soda */}
                  <div className="col-span-3 text-center text-xs text-zinc-400 flex items-center justify-center gap-1.5 px-2">
                    <X className="w-4 h-4 text-rose-500 stroke-[2] shrink-0" />
                    <span>{row.legacy}</span>
                  </div>

                  {/* Plain Seltzer */}
                  <div className="col-span-2 text-center text-xs text-zinc-400">
                    {row.seltzer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars Summary Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Droplets className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Organic Agave Inulin</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Acts as nourishment for the beneficial bacteria in your microbiome, enhancing digestion, mood, and nutrient absorption.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Cold-Pressed Botanicals</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Real whole plant essences and fruit extracts rich in bioflavonoids, polyphenols, and gentle natural antioxidants.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Zero Synthetic Aftertaste</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              We never use stevia, monkfruit, erythritol, or sucralose. Pure natural flavor that finishes clean and crisp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
