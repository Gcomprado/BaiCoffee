"use client";

import React, { useState } from "react";
import { REVIEWS_DATA, PRESS_MENTIONS, FLAVORS } from "@/data/sodaData";
import { Star, CheckCircle, Quote, Sparkles } from "lucide-react";
import { soundManager } from "./SoundEffects";

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredReviews =
    filter === "all"
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.flavorId === filter);

  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Press Quotes Marquee Banner */}
        <div className="mb-20">
          <div className="text-center text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-8">
            As Acclaimed In Global Media
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {PRESS_MENTIONS.map((item, i) => (
              <div
                key={i}
                className="glass-panel p-4 rounded-2xl flex flex-col items-center text-center justify-center hover:border-white/20 transition-colors"
              >
                <span className="font-black text-sm tracking-wider text-zinc-200 mb-1">
                  {item.name}
                </span>
                <p className="text-[11px] text-zinc-400 italic line-clamp-2">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Sippers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Loved By Over 14,000+ Sippers.
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Read authentic reviews from foodies, mixologists, and wellness lovers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => {
              setFilter("all");
              soundManager.playBubblePop();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === "all"
                ? "bg-white text-black font-bold shadow-lg"
                : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5"
            }`}
          >
            All Flavors
          </button>
          {FLAVORS.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setFilter(f.id);
                soundManager.playBubblePop();
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === f.id
                  ? "bg-white/20 text-white border border-white/30 shadow-lg"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: f.primaryColor }} />
              {f.name.split("&")[0]}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReviews.map((review, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500">{review.date}</span>
                </div>

                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  &ldquo;{review.title}&rdquo;
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  {review.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    {review.author}
                    <CheckCircle className="w-3 h-3 text-emerald-400 fill-emerald-400/20" />
                  </div>
                  <div className="text-[10px] text-zinc-400">{review.role}</div>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-amber-300 font-semibold">
                  {review.flavorName.split(" ")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
