"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { soundManager } from "./SoundEffects";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Lumina Spritz different from diet sodas and flavored seltzers?",
      a: "Unlike traditional diet sodas that rely on synthetic sweeteners (like aspartame or sucralose) or overpowering stevia extracts, Lumina uses real botanical essences, cold-pressed fruit puree, and organic blue agave inulin. It delivers full, rich flavor with only 3g of natural fruit sugar and zero chemical aftertaste.",
    },
    {
      q: "What is prebiotic fiber, and how does it support gut health?",
      a: "Prebiotics are non-digestible plant fibers that nourish the good probiotic bacteria already living in your digestive tract. Each can contains 5g of organic agave inulin (18% of your daily fiber need), promoting microbiome diversity, regular digestion, and overall cellular vitality.",
    },
    {
      q: "Is Lumina Spritz keto-friendly and diabetic-safe?",
      a: "Yes! With only 7-8g total carbs (5g of which are dietary fiber, yielding just 2-3g net carbs) and zero added refined sugars, Lumina Spritz has an ultra-low glycemic response and fits into keto, low-carb, and paleo lifestyles.",
    },
    {
      q: "Is it safe for pregnant women and children?",
      a: "Yes! All 4 of our core flavors are 100% caffeine-free, non-GMO, vegan, gluten-free, and pasteurized with clean organic ingredients.",
    },
    {
      q: "How does the custom 12-pack crate shipping work?",
      a: "All orders of $35 or more (including any 12-pack or 24-pack) qualify for 100% Free Express Climate-Neutral Shipping across the continental US. Your cans arrive securely chilled in recyclable insulated packaging within 2-3 business days.",
    },
    {
      q: "What is your satisfaction guarantee policy?",
      a: "We offer a 100% Sip-Happy Guarantee. If you don't fall in love with your first sip, let us know within 30 days and we will issue a full refund—no return hassle required.",
    },
  ];

  const handleToggle = (i: number) => {
    soundManager.playBubblePop();
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-zinc-400 text-base">
            Everything you need to know about our craft botanical soda.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02]"
                >
                  <span className="text-base font-bold text-white">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-500/20 text-amber-300 border-amber-500/30" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-zinc-300 leading-relaxed border-t border-white/5 bg-black/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
