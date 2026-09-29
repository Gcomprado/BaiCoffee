"use client";

import React, { useState } from "react";
import { ProductFlavor, FLAVORS_DATA } from "@/data/productData";
import { TactileCanIllustration } from "./TactileCanIllustration";

interface HeroProps {
  selectedFlavor: ProductFlavor;
  onSelectFlavor: (flavor: ProductFlavor) => void;
  onAddToCart: (flavor: ProductFlavor, size: "12-pack") => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedFlavor,
  onSelectFlavor,
  onAddToCart,
}) => {
  const [packOption, setPackOption] = useState<"12-pack" | "24-pack">("12-pack");
  const [justAdded, setJustAdded] = useState(false);

  const price = packOption === "12-pack" ? selectedFlavor.price12Pack : selectedFlavor.price24Pack;

  const handleOrder = () => {
    onAddToCart(selectedFlavor, "12-pack");
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <section className="pt-12 pb-20 border-b border-[#E3DDD2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Direct Statement & Provenance */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-semibold text-[#5C625D] mb-4">
              Current seasonal bottling • Vermont small batch
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-[#171A18] tracking-tight leading-[1.08] max-w-xl">
              Botanical soda brewed with whole cold-pressed fruit and wild herbs.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#5C625D] max-w-lg font-normal leading-relaxed">
              We extract fresh citrus peel, mountain spruce tips, and sour cherries over two days in mountain spring water. Three grams of organic agave, zero refined sugar, and fine carbonation.
            </p>

            {/* Flavor Switcher Selector */}
            <div className="mt-8 w-full max-w-lg">
              <span className="text-xs font-medium text-[#5C625D] block mb-2.5">
                Select a batch release:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {FLAVORS_DATA.map((flavor) => {
                  const isSelected = flavor.id === selectedFlavor.id;
                  return (
                    <button
                      key={flavor.id}
                      onClick={() => onSelectFlavor(flavor)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        isSelected
                          ? "bg-white border-[#171A18] shadow-sm text-[#171A18] font-semibold"
                          : "bg-transparent border-[#E3DDD2] text-[#5C625D] hover:border-[#B5ADA0] hover:text-[#171A18]"
                      }`}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full mb-2"
                        style={{ backgroundColor: flavor.color.accent }}
                      />
                      <div className="leading-tight">{flavor.name.split("&")[0]}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Flavor Tasting Note & Ordering */}
            <div className="mt-8 pt-6 border-t border-[#E3DDD2] w-full max-w-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-2xl font-display font-bold text-[#171A18]">
                  ${price}
                </div>
                <div className="text-xs text-[#5C625D]">
                  {packOption === "12-pack" ? "12 cans (355ml each)" : "24 cans (355ml each)"} • Free US shipping
                </div>
              </div>

              <button
                onClick={handleOrder}
                className={`w-full sm:w-auto px-7 py-3 rounded-full text-sm font-semibold transition-all ${
                  justAdded
                    ? "bg-[#3D5A45] text-[#F6F4EF]"
                    : "bg-[#171A18] hover:bg-[#2D332F] text-[#F6F4EF] active:scale-95"
                }`}
              >
                {justAdded ? "Added to order" : `Order 12-pack`}
              </button>
            </div>
          </div>

          {/* Right Column: Physical Can Display with Botanical Ledger */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              className="p-8 rounded-3xl border transition-colors duration-500 w-full flex flex-col items-center justify-center relative"
              style={{
                backgroundColor: selectedFlavor.color.bgTint,
                borderColor: selectedFlavor.color.borderTint,
              }}
            >
              {/* Can Graphic */}
              <TactileCanIllustration flavor={selectedFlavor} size="lg" />

              {/* Botanical Ledger card below can */}
              <div className="mt-6 w-full bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#E3DDD2] text-xs">
                <div className="flex justify-between items-baseline mb-2 pb-2 border-b border-[#E3DDD2]">
                  <span className="font-semibold text-[#171A18]">{selectedFlavor.name}</span>
                  <span className="text-[#5C625D]">{selectedFlavor.harvestNotes}</span>
                </div>
                <p className="text-[#5C625D] leading-relaxed mb-3">
                  {selectedFlavor.tasteSummary}
                </p>
                <div className="grid grid-cols-3 gap-2 text-[11px] text-[#171A18] font-medium pt-1">
                  <div>
                    <span className="text-[#7A807B] block text-[10px]">Calories</span>
                    {selectedFlavor.metrics.calories}
                  </div>
                  <div>
                    <span className="text-[#7A807B] block text-[10px]">Natural fruit sugar</span>
                    {selectedFlavor.metrics.sugar}
                  </div>
                  <div>
                    <span className="text-[#7A807B] block text-[10px]">Bubble texture</span>
                    {selectedFlavor.metrics.carbonation.split(" ")[0]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
