"use client";

import React, { useState } from "react";
import { FLAVORS_DATA, ProductFlavor } from "@/data/productData";
import { TactileCanIllustration } from "./TactileCanIllustration";

interface FlavorDissectionProps {
  onAddToCart: (flavor: ProductFlavor, size: "12-pack") => void;
  onSelectHeroFlavor: (flavor: ProductFlavor) => void;
}

export const FlavorDissection: React.FC<FlavorDissectionProps> = ({
  onAddToCart,
  onSelectHeroFlavor,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(FLAVORS_DATA[0].id);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const activeFlavor = FLAVORS_DATA.find((f) => f.id === activeTabId) || FLAVORS_DATA[0];

  const handleAdd = (flavor: ProductFlavor) => {
    onAddToCart(flavor, "12-pack");
    setRecentlyAddedId(flavor.id);
    setTimeout(() => setRecentlyAddedId(null), 1400);
  };

  return (
    <section id="batches" className="py-24 border-b border-[#E3DDD2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold text-[#5C625D] block mb-2">
              The Current Ledger
            </span>
            <h2 className="text-3xl sm:text-4xl font-display text-[#171A18] tracking-tight">
              Three Distinct Botanical Formulations
            </h2>
          </div>
          <p className="text-sm text-[#5C625D] max-w-md font-normal leading-relaxed">
            Each recipe is developed around a single wild or orchard harvest, balanced with culinary herbs and unrefined agave.
          </p>
        </div>

        {/* 3 Batch Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {FLAVORS_DATA.map((flavor) => {
            const isActive = flavor.id === activeTabId;
            return (
              <button
                key={flavor.id}
                onClick={() => setActiveTabId(flavor.id)}
                className={`p-5 rounded-2xl text-left border transition-all ${
                  isActive
                    ? "bg-white border-[#171A18] shadow-sm"
                    : "bg-transparent border-[#E3DDD2] hover:border-[#B5ADA0]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: flavor.color.accent }}
                  />
                  <span className="text-xs text-[#5C625D] font-medium">
                    {flavor.harvestNotes}
                  </span>
                </div>
                <h3 className="text-lg font-display text-[#171A18] font-bold leading-snug">
                  {flavor.name}
                </h3>
                <p className="text-xs text-[#5C625D] mt-1 line-clamp-1">
                  {flavor.botanicalSubtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Breakdown Card for Active Flavor */}
        <div
          className="p-8 sm:p-12 rounded-3xl border transition-colors grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          style={{
            backgroundColor: activeFlavor.color.bgTint,
            borderColor: activeFlavor.color.borderTint,
          }}
        >
          {/* Can visual */}
          <div className="lg:col-span-4 flex justify-center">
            <TactileCanIllustration flavor={activeFlavor} size="md" />
          </div>

          {/* Flavor narrative & ingredients */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-[#5C625D] mb-3">
                <span>{activeFlavor.provenance}</span>
                <span>•</span>
                <span>{activeFlavor.metrics.calories} calories</span>
                <span>•</span>
                <span>{activeFlavor.metrics.sugar} fruit sugar</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display text-[#171A18] font-bold mb-3">
                {activeFlavor.name}
              </h3>

              <p className="text-sm sm:text-base text-[#171A18] leading-relaxed mb-6 font-normal">
                {activeFlavor.fullNotes}
              </p>

              {/* Complete Transparent Ingredient List */}
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-[#E3DDD2] mb-6">
                <span className="text-xs font-semibold text-[#171A18] block mb-2">
                  Complete Ingredient Ledger:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C625D]">
                  {activeFlavor.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-baseline gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171A18]/40 shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E3DDD2]">
              <div>
                <span className="text-xl font-display font-bold text-[#171A18]">
                  ${activeFlavor.price12Pack}
                </span>
                <span className="text-xs text-[#5C625D] ml-2">12-pack crate • Free shipping</span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => onSelectHeroFlavor(activeFlavor)}
                  className="px-4 py-2.5 rounded-full text-xs font-medium text-[#171A18] border border-[#171A18] hover:bg-white transition-colors"
                >
                  Inspect in hero
                </button>
                <button
                  onClick={() => handleAdd(activeFlavor)}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all ${
                    recentlyAddedId === activeFlavor.id
                      ? "bg-[#3D5A45] text-[#F6F4EF]"
                      : "bg-[#171A18] hover:bg-[#2D332F] text-[#F6F4EF]"
                  }`}
                >
                  {recentlyAddedId === activeFlavor.id ? "Added to order" : "Add 12-pack"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
