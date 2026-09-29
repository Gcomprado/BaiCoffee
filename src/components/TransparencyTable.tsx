"use client";

import React from "react";

export const TransparencyTable: React.FC = () => {
  const ledger = [
    {
      metric: "Primary sweetening agent",
      koru: "3 grams unrefined organic agave nectar",
      industrial: "39 grams high-fructose corn syrup",
    },
    {
      metric: "Aromatic & flavor base",
      koru: "Cold-steeped whole citrus rinds & foraged spruce tips",
      industrial: "Synthetic aroma compounds & food coloring",
    },
    {
      metric: "Water source",
      koru: "Vermont mountain spring water",
      industrial: "Municipal tap water with added minerals",
    },
    {
      metric: "Carbonation style",
      koru: "Slow pin-point micro-bubble (gentle digestion)",
      industrial: "High-pressure coarse carbonation (induces bloating)",
    },
    {
      metric: "Preservatives & stabilizers",
      koru: "None (fresh cold sterile bottled)",
      industrial: "Sodium benzoate, phosphoric acid, potassium sorbate",
    },
  ];

  return (
    <section id="ingredients" className="py-24 border-b border-[#E3DDD2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-[#5C625D] block mb-2">
            Formulation Honesty
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#171A18] tracking-tight">
            The Ingredient Ledger
          </h2>
          <p className="mt-3 text-sm text-[#5C625D] leading-relaxed font-normal">
            We publish every ingredient and its origin. No hidden natural flavoring trade secrets.
          </p>
        </div>

        {/* Ledger Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse bg-white rounded-2xl border border-[#E3DDD2] overflow-hidden">
            <thead>
              <tr className="border-b border-[#E3DDD2] bg-[#FAF8F5] text-[#5C625D]">
                <th className="p-4 sm:p-5 font-semibold">Standard specification</th>
                <th className="p-4 sm:p-5 font-semibold text-[#171A18]">KORU Botanical Soda</th>
                <th className="p-4 sm:p-5 font-semibold">Standard commercial soda</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E3DDD2]">
              {ledger.map((row, index) => (
                <tr key={index} className="hover:bg-[#FAF8F5]/50 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-[#171A18]">{row.metric}</td>
                  <td className="p-4 sm:p-5 text-[#3D5A45] font-semibold">{row.koru}</td>
                  <td className="p-4 sm:p-5 text-[#5C625D]">{row.industrial}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
