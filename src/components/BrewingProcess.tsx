"use client";

import React from "react";

export const BrewingProcess: React.FC = () => {
  const steps = [
    {
      phase: "First phase",
      title: "Whole fruit & botanical selection",
      description:
        "We source unpasteurized Seville orange peels, young coastal spruce tips, and sour Montmorency cherries directly from dedicated growers and foragers.",
    },
    {
      phase: "Second phase",
      title: "48-Hour cold spring extraction",
      description:
        "Botanicals steep gently in Vermont mountain spring water at 38°F. Cold extraction captures delicate volatile aroma compounds without extracting harsh tannins.",
    },
    {
      phase: "Third phase",
      title: "Pin-point champagne carbonation",
      description:
        "Lightly sweetened with 3 grams of organic Mexican agave nectar, then pressurized with micro-bubbles for an ultra-fine, champagne-style mousse.",
    },
  ];

  return (
    <section id="process" className="py-24 border-b border-[#E3DDD2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-[#5C625D] block mb-2">
            The Brewing Chronicle
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#171A18] tracking-tight">
            Cold Extraction Over Heat Concentration
          </h2>
          <p className="mt-4 text-base text-[#5C625D] leading-relaxed font-normal">
            Most commercial sodas use boiled syrups or synthetic aroma isolates. We brew our soda with the same discipline applied to craft wine and single-origin coffee.
          </p>
        </div>

        {/* 3 Steps Process Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E3DDD2] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-[#5C625D] font-medium block mb-3">
                  {step.phase}
                </span>
                <h3 className="text-lg font-display text-[#171A18] font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-[#5C625D] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E3DDD2] text-[11px] text-[#7A807B]">
                Brewed in batches of 1,200 liters
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
