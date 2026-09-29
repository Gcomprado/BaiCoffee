"use client";

import React, { useState } from "react";
import { Flavor, FLAVORS } from "@/data/sodaData";
import { SodaCan3D } from "./SodaCan3D";
import { Sparkles, Plus, Check, Info, ShieldAlert, HeartHandshake } from "lucide-react";
import { soundManager } from "./SoundEffects";
import confetti from "canvas-confetti";

interface FlavorShowcaseProps {
  onAddToCart: (flavor: Flavor, packSize: "4-pack" | "12-pack" | "24-pack") => void;
  onSelectFlavorForHero: (flavor: Flavor) => void;
}

export const FlavorShowcase: React.FC<FlavorShowcaseProps> = ({
  onAddToCart,
  onSelectFlavorForHero,
}) => {
  const [selectedPackSizes, setSelectedPackSizes] = useState<{
    [flavorId: string]: "4-pack" | "12-pack" | "24-pack";
  }>({
    "yuzu-sunshine": "12-pack",
    "wild-raspberry": "12-pack",
    "cucumber-mint": "12-pack",
    "dark-plum-ginger": "12-pack",
  });

  const [activeNutritionFlavor, setActiveNutritionFlavor] = useState<Flavor | null>(null);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const handlePackChange = (flavorId: string, pack: "4-pack" | "12-pack" | "24-pack") => {
    setSelectedPackSizes((prev) => ({ ...prev, [flavorId]: pack }));
    soundManager.playBubblePop();
  };

  const handleAdd = (flavor: Flavor) => {
    const pack = selectedPackSizes[flavor.id] || "12-pack";
    soundManager.playCanOpen();
    onAddToCart(flavor, pack);
    setRecentlyAddedId(flavor.id);
    setTimeout(() => setRecentlyAddedId(null), 1200);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: [flavor.primaryColor, flavor.secondaryColor],
      });
    } catch {}
  };

  return (
    <section id="flavors" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Pure Botanical Lineup
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Four Complex Flavors.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-emerald-400">
              One Extraordinary Sip.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base">
            Every can is cold-infused with organic botanicals, real cold-pressed fruit puree, and prebiotic agave inulin to nourish your gut microbiome.
          </p>
        </div>

        {/* Flavors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FLAVORS.map((flavor) => {
            const currentPack = selectedPackSizes[flavor.id] || "12-pack";
            const price =
              currentPack === "4-pack"
                ? flavor.prices.pack4
                : currentPack === "12-pack"
                ? flavor.prices.pack12
                : flavor.prices.pack24;

            const pricePerCan = (price / (currentPack === "4-pack" ? 4 : currentPack === "12-pack" ? 12 : 24)).toFixed(2);

            return (
              <div
                key={flavor.id}
                className="group relative rounded-3xl glass-panel p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Flavor Glow on Hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500"
                  style={{ backgroundColor: flavor.primaryColor }}
                />

                {/* Top Badge & Info */}
                <div className="flex items-center justify-between z-10">
                  <span
                    className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-black shadow"
                    style={{ backgroundColor: flavor.accentColor }}
                  >
                    {flavor.badge}
                  </span>
                  <button
                    onClick={() => setActiveNutritionFlavor(flavor)}
                    className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                    title="View Nutrition Facts"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* 3D Can Representation */}
                <div
                  className="my-6 cursor-pointer transform group-hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    onSelectFlavorForHero(flavor);
                    soundManager.playBubblePop();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  title="Click to preview on Hero"
                >
                  <SodaCan3D flavor={flavor} size="md" />
                </div>

                {/* Flavor Title & Notes */}
                <div className="z-10">
                  <h3 className="text-xl font-black text-white leading-snug">{flavor.name}</h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{flavor.subtitle}</p>

                  {/* Sensory Intensity Meter */}
                  <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                    <div className="flex justify-between text-[11px] text-zinc-400">
                      <span>Fizziness</span>
                      <span className="font-semibold text-zinc-200">{flavor.metrics.fizziness}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${flavor.metrics.fizziness}%`,
                          backgroundColor: flavor.primaryColor,
                        }}
                      />
                    </div>

                    <div className="flex justify-between text-[11px] text-zinc-400 pt-1">
                      <span>Tartness & Citrus</span>
                      <span className="font-semibold text-zinc-200">{flavor.metrics.tartness}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${flavor.metrics.tartness}%`,
                          backgroundColor: flavor.secondaryColor,
                        }}
                      />
                    </div>
                  </div>

                  {/* Pack Size Selector */}
                  <div className="mt-5 grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-black/40 border border-white/5">
                    {(["4-pack", "12-pack", "24-pack"] as const).map((pack) => (
                      <button
                        key={pack}
                        onClick={() => handlePackChange(flavor.id, pack)}
                        className={`py-1.5 text-[11px] font-bold rounded-lg transition-all ${
                          currentPack === pack
                            ? "bg-white/20 text-white shadow"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        {pack === "4-pack" ? "4 Cans" : pack === "12-pack" ? "12 Cans" : "24 Cans"}
                      </button>
                    ))}
                  </div>

                  {/* Price & Add to Cart Button */}
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xl font-black text-white">${price}</div>
                      <div className="text-[10px] text-zinc-400">${pricePerCan}/can</div>
                    </div>

                    <button
                      onClick={() => handleAdd(flavor)}
                      className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 shadow-lg ${
                        recentlyAddedId === flavor.id
                          ? "bg-emerald-400 text-black scale-95"
                          : "bg-white hover:bg-zinc-200 text-black active:scale-95"
                      }`}
                    >
                      {recentlyAddedId === flavor.id ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" /> Added
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 stroke-[3]" /> Add to Crate
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nutrition Facts Modal */}
      {activeNutritionFlavor && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Nutritional Transparency
                </span>
                <h3 className="text-2xl font-black text-white">{activeNutritionFlavor.name}</h3>
              </div>
              <button
                onClick={() => setActiveNutritionFlavor(null)}
                className="text-zinc-400 hover:text-white p-1 rounded-full bg-white/5"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-sm border-t border-b border-white/10 py-4 my-4 font-mono">
              <div className="flex justify-between font-bold text-white text-base">
                <span>Serving Size</span>
                <span>{activeNutritionFlavor.nutrition.servingSize}</span>
              </div>
              <div className="flex justify-between font-bold text-amber-400 text-lg border-b border-white/10 pb-1">
                <span>Calories</span>
                <span>{activeNutritionFlavor.calories}</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Total Fat</span>
                <span>{activeNutritionFlavor.nutrition.totalFat}</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Sodium</span>
                <span>{activeNutritionFlavor.nutrition.sodium}</span>
              </div>
              <div className="flex justify-between text-zinc-300 font-bold text-white">
                <span>Total Carbohydrates</span>
                <span>{activeNutritionFlavor.nutrition.totalCarb}</span>
              </div>
              <div className="flex justify-between text-emerald-400 pl-4 font-bold">
                <span>Dietary Prebiotic Fiber</span>
                <span>{activeNutritionFlavor.nutrition.dietaryFiber}</span>
              </div>
              <div className="flex justify-between text-zinc-300 pl-4">
                <span>Total Sugars</span>
                <span>{activeNutritionFlavor.nutrition.totalSugars}</span>
              </div>
              <div className="flex justify-between text-emerald-400 pl-8">
                <span>Added Sugars</span>
                <span>0g (0% DV)</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Protein</span>
                <span>{activeNutritionFlavor.nutrition.protein}</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Vitamin C</span>
                <span>{activeNutritionFlavor.nutrition.vitaminC}</span>
              </div>
            </div>

            <div className="text-xs text-zinc-400 mb-6">
              <span className="font-semibold text-white">Ingredients: </span>
              Triple-Filtered Carbonated Water, Organic Blue Agave Inulin (Prebiotic Fiber), Real Fruit Puree & Cold-Pressed Juices, Organic Fruit Essences, Citric Acid, Himalayan Pink Mineral Salt.
            </div>

            <button
              onClick={() => setActiveNutritionFlavor(null)}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm"
            >
              Close Nutrition Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
