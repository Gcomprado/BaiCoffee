"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Heart, Globe, Shield, Recycle, Check } from "lucide-react";
import { soundManager } from "./SoundEffects";
import confetti from "canvas-confetti";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    soundManager.playCanOpen();
    setSubscribed(true);
    try {
      confetti({ particleCount: 50, spread: 70 });
    } catch {}
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter CTA Box */}
        <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl border border-white/10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
              Join The Botanical Club
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Get 20% Off Your First 12-Pack Crate
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              Receive secret seasonal drops, microbiome tips, and subscriber-only discounts right in your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-sm">
                <Check className="w-5 h-5 stroke-[3]" />
                You&apos;re on the VIP list! Use code <strong>FIZZ20</strong> at checkout.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-xs uppercase tracking-wider hover:from-amber-300 hover:to-orange-400 transition-all flex items-center justify-center gap-1.5 shadow-lg"
                >
                  Claim 20% <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Sustainability & Quality Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-white/5 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Recycle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">100% Recyclable</div>
              <div className="text-[10px] text-zinc-400">Infinitely reusable aluminum</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Carbon Neutral</div>
              <div className="text-[10px] text-zinc-400">100% offset cold shipping</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Clean Label Project</div>
              <div className="text-[10px] text-zinc-400">Purity Award Certified</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">1% For The Planet</div>
              <div className="text-[10px] text-zinc-400">Dedicated conservation fund</div>
            </div>
          </div>
        </div>

        {/* Links & Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-pink-500 p-[1.5px]">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="text-lg font-black text-white">LUMINA SPRITZ</span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Crafted in small batches with cold-pressed fruit botanicals and organic prebiotic agave inulin. Clean effervescence with zero artificial compromise.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Shop Flavors</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#flavors" className="hover:text-amber-400 transition-colors">Yuzu Sunshine</a></li>
              <li><a href="#flavors" className="hover:text-pink-400 transition-colors">Wild Raspberry</a></li>
              <li><a href="#flavors" className="hover:text-emerald-400 transition-colors">Cucumber Lime</a></li>
              <li><a href="#flavors" className="hover:text-purple-400 transition-colors">Smoked Plum</a></li>
              <li><a href="#crate-builder" className="hover:text-white transition-colors font-semibold">Custom 12-Pack</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">About & Science</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#science" className="hover:text-white transition-colors">Prebiotic Inulin</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Why Better</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Press & Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Stay Connected</h4>
            <p className="text-xs text-zinc-400">
              Follow our aesthetic beverage journeys and seasonal secret releases:
            </p>
            <div className="flex gap-3 pt-1">
              {["Instagram", "TikTok", "X / Twitter", "Pinterest"].map((social) => (
                <span
                  key={social}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-zinc-300 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Lumina Spritz Beverage Co. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-300 cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
