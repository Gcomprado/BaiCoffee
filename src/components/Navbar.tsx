"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ShoppingBag, Volume2, VolumeX, Menu, X, ArrowRight } from "lucide-react";
import { soundManager } from "./SoundEffects";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundManager.enabled = nextState;
    if (nextState) {
      soundManager.playBubblePop();
    }
  };

  const navLinks = [
    { label: "Flavors", href: "#flavors" },
    { label: "Gut Science", href: "#science" },
    { label: "Why Us", href: "#comparison" },
    { label: "Build a Crate", href: "#crate-builder" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={() => soundManager.playBubblePop()}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-emerald-400 p-[1.5px] shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: "8s" }} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                LUMINA <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-emerald-400">SPRITZ</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-zinc-400 -mt-1">
                Prebiotic Botanical Soda
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                onClick={() => soundManager.playBubblePop()}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Mute sound FX" : "Enable sound FX"}
              className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-zinc-500" />
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => {
                soundManager.playBubblePop();
                onOpenCart();
              }}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-semibold text-xs tracking-wide shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
              Explore Lumina Spritz
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  soundManager.playBubblePop();
                }}
                className="text-2xl font-bold text-zinc-200 hover:text-amber-400 flex items-center justify-between py-2 border-b border-white/5"
              >
                {link.label}
                <ArrowRight className="w-5 h-5 text-zinc-600" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <a
              href="#flavors"
              onClick={() => {
                setMobileMenuOpen(false);
                soundManager.playCanOpen();
              }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold text-center block shadow-xl"
            >
              Taste The Lineup
            </a>
          </div>
        </div>
      )}
    </>
  );
};
