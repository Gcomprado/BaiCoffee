"use client";

import React, { useState } from "react";
import { ProductFlavor, FLAVORS_DATA } from "@/data/productData";
import { TactileCanIllustration } from "./TactileCanIllustration";

interface TastingBoxBuilderProps {
  onAddTastingBox: () => void;
}

export const TastingBoxBuilder: React.FC<TastingBoxBuilderProps> = ({ onAddTastingBox }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddTastingBox();
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <section id="tasting-box" className="py-24 border-b border-[#E3DDD2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-[#E3DDD2] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-sm">
          {/* Left Column: Tasting Box Description */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold text-[#5C625D] mb-3">
              The Curated Collection
            </span>

            <h2 className="text-3xl sm:text-4xl font-display text-[#171A18] tracking-tight mb-4">
              The Season Three Tasting Box
            </h2>

            <p className="text-sm sm:text-base text-[#5C625D] leading-relaxed mb-6 font-normal">
              Four cans of each seasonal release in a single recycled kraft box. Includes detailed botanical tasting cards written by our head distiller.
            </p>

            <div className="space-y-3 mb-8 w-full">
              {FLAVORS_DATA.map((flavor) => (
                <div
                  key={flavor.id}
                  className="flex items-center justify-between p-3 rounded-xl border border-[#E3DDD2] text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: flavor.color.accent }}
                    />
                    <span className="font-semibold text-[#171A18]">{flavor.name}</span>
                  </div>
                  <span className="text-[#5C625D]">4 cans (355ml)</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full pt-4 border-t border-[#E3DDD2]">
              <div>
                <div className="text-2xl font-display font-bold text-[#171A18]">
                  $42
                </div>
                <div className="text-xs text-[#5C625D]">12 cans total • Free US shipping</div>
              </div>

              <button
                onClick={handleAdd}
                className={`w-full sm:w-auto px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  added
                    ? "bg-[#3D5A45] text-[#F6F4EF]"
                    : "bg-[#171A18] hover:bg-[#2D332F] text-[#F6F4EF]"
                }`}
              >
                {added ? "Added tasting box" : "Order tasting box"}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Trio Representation */}
          <div className="lg:col-span-6 flex items-center justify-center gap-3 sm:gap-4 p-4 sm:p-8 bg-[#F6F4EF] rounded-2xl border border-[#E3DDD2]">
            {FLAVORS_DATA.map((flavor, index) => (
              <div
                key={flavor.id}
                className={`transform transition-all ${
                  index === 1 ? "scale-105 z-10" : "scale-95 opacity-90"
                }`}
              >
                <TactileCanIllustration flavor={flavor} size="sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
