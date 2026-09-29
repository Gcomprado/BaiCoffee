"use client";

import React, { useState } from "react";
import { FLAVORS, CartItem } from "@/data/sodaData";
import { Plus, Minus, Package, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";
import { soundManager } from "./SoundEffects";
import confetti from "canvas-confetti";

interface CustomPackBuilderProps {
  onAddCustomCrate: (item: CartItem) => void;
}

export const CustomPackBuilder: React.FC<CustomPackBuilderProps> = ({ onAddCustomCrate }) => {
  const TOTAL_SLOTS = 12;
  const CRATE_PRICE = 36;

  const [counts, setCounts] = useState<{ [flavorId: string]: number }>({
    "yuzu-sunshine": 3,
    "wild-raspberry": 3,
    "cucumber-mint": 3,
    "dark-plum-ginger": 3,
  });

  const [added, setAdded] = useState(false);

  const currentTotal = Object.values(counts).reduce((a, b) => a + b, 0);
  const remaining = TOTAL_SLOTS - currentTotal;

  const handleIncrement = (flavorId: string) => {
    if (currentTotal < TOTAL_SLOTS) {
      setCounts((prev) => ({
        ...prev,
        [flavorId]: (prev[flavorId] || 0) + 1,
      }));
      soundManager.playBubblePop();
    }
  };

  const handleDecrement = (flavorId: string) => {
    if ((counts[flavorId] || 0) > 0) {
      setCounts((prev) => ({
        ...prev,
        [flavorId]: (prev[flavorId] || 0) - 1,
      }));
      soundManager.playBubblePop();
    }
  };

  const handleReset = () => {
    setCounts({
      "yuzu-sunshine": 3,
      "wild-raspberry": 3,
      "cucumber-mint": 3,
      "dark-plum-ginger": 3,
    });
    soundManager.playBubblePop();
  };

  const handleAddToCart = () => {
    if (currentTotal !== TOTAL_SLOTS) return;

    soundManager.playCanOpen();
    const customItem: CartItem = {
      id: `custom-crate-${Date.now()}`,
      flavorId: "custom-crate",
      flavorName: "Custom Variety 12-Pack Crate",
      packSize: "custom-crate",
      quantity: 1,
      price: CRATE_PRICE,
      color: "#f59e0b",
      customDetails: counts,
    };

    onAddCustomCrate(customItem);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);

    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.8 },
      });
    } catch {}
  };

  // Generate visual representation of all 12 cans
  const filledSlots: { flavorId: string; color: string; name: string }[] = [];
  FLAVORS.forEach((f) => {
    const count = counts[f.id] || 0;
    for (let i = 0; i < count; i++) {
      filledSlots.push({ flavorId: f.id, color: f.primaryColor, name: f.name });
    }
  });

  return (
    <section id="crate-builder" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Package className="w-3.5 h-3.5" />
            Interactive Custom Crate
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Build Your Perfect 12-Pack.
          </h2>
          <p className="mt-4 text-zinc-400 text-base">
            Mix and match your favorite botanical flavors in a custom curated wooden crate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Flavor Selector Controls */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex justify-between items-center px-1">
              <span className="text-sm font-semibold text-zinc-300">
                Choose {TOTAL_SLOTS} cans ({remaining === 0 ? "Crate is Full!" : `${remaining} remaining`})
              </span>
              <button
                onClick={handleReset}
                className="text-xs text-zinc-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Equal Split (3 each)
              </button>
            </div>

            {FLAVORS.map((flavor) => {
              const count = counts[flavor.id] || 0;
              return (
                <div
                  key={flavor.id}
                  className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center justify-between hover:border-white/15 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-4 h-4 rounded-full border border-white/20 shrink-0"
                      style={{ backgroundColor: flavor.primaryColor }}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{flavor.name}</h4>
                      <p className="text-xs text-zinc-400 line-clamp-1">{flavor.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10">
                    <button
                      onClick={() => handleDecrement(flavor.id)}
                      disabled={count <= 0}
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm font-black text-white">{count}</span>
                    <button
                      onClick={() => handleIncrement(flavor.id)}
                      disabled={currentTotal >= TOTAL_SLOTS}
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual 12-Slot Crate Preview */}
          <div className="lg:col-span-6 glass-panel-glow p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-black text-white">Your Custom 12-Pack Crate</h3>
                  <p className="text-xs text-zinc-400">
                    {remaining === 0 ? "Ready to ship in recyclable thermal box" : `Add ${remaining} more cans to complete`}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-amber-400">${CRATE_PRICE}</div>
                  <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                    Free US Shipping
                  </div>
                </div>
              </div>

              {/* Visual 12 Cans Grid Preview */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5 p-4 rounded-2xl bg-black/50 border border-white/5 min-h-[160px] items-center">
                {Array.from({ length: TOTAL_SLOTS }).map((_, index) => {
                  const filled = filledSlots[index];
                  return (
                    <div
                      key={index}
                      className={`h-24 rounded-xl border flex flex-col items-center justify-center relative transition-all duration-300 ${
                        filled
                          ? "border-white/30 shadow-lg scale-95"
                          : "border-dashed border-white/15 bg-white/[0.02]"
                      }`}
                      style={{
                        backgroundColor: filled ? `${filled.color}22` : undefined,
                        borderColor: filled ? filled.color : undefined,
                      }}
                    >
                      {filled ? (
                        <>
                          <div
                            className="w-4 h-12 rounded-sm mb-1 shadow-md"
                            style={{ backgroundColor: filled.color }}
                          />
                          <span className="text-[9px] font-bold text-white text-center line-clamp-1 px-1">
                            {filled.name.split(" ")[0]}
                          </span>
                        </>
                      ) : (
                        <span className="text-[10px] text-zinc-600 font-mono">Slot {index + 1}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Crate CTA Button */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-400 text-center sm:text-left">
                <span className="font-bold text-white">100% Satisfaction Guarantee</span> • Cancel or pause anytime.
              </div>

              <button
                onClick={handleAddToCart}
                disabled={remaining > 0}
                className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-xl ${
                  remaining > 0
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5"
                    : added
                    ? "bg-emerald-400 text-black scale-95"
                    : "bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black hover:scale-105 active:scale-95"
                }`}
              >
                {added ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Crate Added to Cart!
                  </>
                ) : remaining > 0 ? (
                  `Select ${remaining} More`
                ) : (
                  <>
                    <Plus className="w-4 h-4 stroke-[3]" /> Add Custom Crate • $36
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
