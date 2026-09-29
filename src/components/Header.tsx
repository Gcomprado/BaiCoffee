"use client";

import React from "react";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F6F4EF]/90 backdrop-blur-md border-b border-[#E3DDD2] transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Mark */}
        <a href="#" className="flex items-baseline gap-2.5">
          <span className="font-display text-2xl font-bold tracking-tight text-[#171A18]">
            KORU
          </span>
          <span className="text-xs text-[#5C625D] font-normal hidden sm:inline">
            Botanical Soda Co. • Vermont
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#5C625D]">
          <a href="#batches" className="hover:text-[#171A18] transition-colors">
            Current Batches
          </a>
          <a href="#process" className="hover:text-[#171A18] transition-colors">
            Cold Extraction
          </a>
          <a href="#tasting-box" className="hover:text-[#171A18] transition-colors">
            Tasting Box
          </a>
          <a href="#ingredients" className="hover:text-[#171A18] transition-colors">
            Ingredient Ledger
          </a>
        </nav>

        {/* Cart Trigger */}
        <button
          onClick={onOpenCart}
          className="flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium text-[#171A18] border border-[#171A18] rounded-full hover:bg-[#171A18] hover:text-[#F6F4EF] transition-all"
        >
          <span>Order</span>
          <span className="w-5 h-5 rounded-full bg-[#E3DDD2] text-[#171A18] text-xs flex items-center justify-center font-bold">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
};
