"use client";

import React, { useState } from "react";
import { Sparkles, Dna, Activity, RefreshCw, Leaf, Check } from "lucide-react";
import { soundManager } from "./SoundEffects";

export const GutHealthScience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      title: "Organic Agave Inulin",
      subtitle: "The Microbiome Fuel",
      icon: Dna,
      color: "#f59e0b",
      description:
        "Agave Inulin is a soluble prebiotic plant fiber that bypasses stomach acid intact, feeding the beneficial Bifidobacteria and Lactobacilli in your lower colon.",
      points: [
        "Stimulates production of beneficial Short-Chain Fatty Acids (SCFAs)",
        "Zero spikes in blood glucose or insulin levels",
        "Supports calcium absorption & digestive regularity",
      ],
    },
    {
      title: "Cold-Extracted Botanicals",
      subtitle: "Cellular Polyphenol Infusion",
      icon: Leaf,
      color: "#ec4899",
      description:
        "We never use boiled flavor concentrates. Our cold-steeped botanicals (Japanese Yuzu, Damask Rose, Hibiscus Calyces) retain 98% of their natural bioflavonoids.",
      points: [
        "Rich in active plant polyphenols and anthocyanins",
        "Natural gentle calming effect on the gut lining",
        "Complex aromatic bouquet without artificial enhancers",
      ],
    },
    {
      title: "Triple-Purified Artisan Water",
      subtitle: "Gentle Micro-Carbonation",
      icon: Activity,
      color: "#10b981",
      description:
        "Infused with fine champagne-grade bubbles at optimal pressure. Unlike aggressive commercial sodas that induce bloating and acid reflux, our fizz is silky smooth.",
      points: [
        "Zero bloating or heavy gas sensation",
        "Infused with trace Himalayan pink minerals for electrolyte balance",
        "Optimally pH-balanced for gentle enamel protection",
      ],
    },
  ];

  return (
    <section id="science" className="py-24 relative bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Microbiome Science
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Engineered For Your Gut.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Validated By Modern Biology.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base">
            70% of your immune system resides in your gut. Lumina Spritz transforms your daily soda ritual into microbiome therapy.
          </p>
        </div>

        {/* Interactive Pillar Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  soundManager.playBubblePop();
                }}
                className={`p-6 rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? "bg-white/[0.08] border-white/30 shadow-2xl scale-[1.02]"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] text-zinc-400"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: `${pillar.color}22`,
                      borderColor: `${pillar.color}44`,
                      borderWidth: 1,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <span className="text-xs font-mono text-zinc-500 font-bold">0{idx + 1}</span>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-lg font-black text-white">{pillar.title}</h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed View */}
        <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: pillars[activeTab].color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span
                className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full text-black inline-block mb-3"
                style={{ backgroundColor: pillars[activeTab].color }}
              >
                Pillar {activeTab + 1}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                {pillars[activeTab].title}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                {pillars[activeTab].description}
              </p>

              <div className="space-y-3">
                {pillars[activeTab].points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${pillars[activeTab].color}33` }}
                    >
                      <Check className="w-3.5 h-3.5" style={{ color: pillars[activeTab].color }} />
                    </div>
                    <span className="text-sm font-medium text-zinc-200">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/50 p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-4xl font-black text-white mb-1">5,000 mg</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
                Prebiotic Agave Inulin Per Can
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Provides 18% of your recommended daily dietary fiber intake in a single deliciously effervescent beverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
