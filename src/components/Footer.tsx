"use client";

import React, { useState } from "react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSignedUp(true);
    }
  };

  return (
    <footer className="bg-[#171A18] text-[#F6F4EF] pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2D332F]">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-display text-3xl font-bold tracking-tight block">
              KORU
            </span>
            <p className="text-xs sm:text-sm text-[#A5ABA6] max-w-md leading-relaxed font-normal">
              Small-batch botanical sparkling soda brewed in the Green Mountains of Vermont. Cold-extracted whole fruit, wild mountain herbs, and unrefined agave.
            </p>
            <div className="text-xs text-[#7A807B]">
              Facility & Bottling: Waterbury, VT 05676
            </div>
          </div>

          {/* Seasonal Release Dispatch Signup */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold mb-2">Seasonal Bottling Dispatches</h4>
              <p className="text-xs text-[#A5ABA6] mb-4">
                We release three limited botanical runs per season. Subscribe to receive notice when new batches are drawn from the tanks.
              </p>

              {signedUp ? (
                <div className="text-xs text-[#3D5A45] bg-[#EEF3EF] p-3 rounded-xl font-medium inline-block">
                  You are registered for Season Four harvest announcements.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    required
                    className="flex-1 px-4 py-2.5 rounded-full bg-[#242A25] border border-[#3A423C] text-xs text-[#F6F4EF] placeholder-[#7A807B] focus:outline-none focus:border-[#F6F4EF]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#F6F4EF] text-[#171A18] text-xs font-semibold hover:bg-[#E3DDD2] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className="flex gap-6 text-xs text-[#7A807B] pt-6">
              <a href="#batches" className="hover:text-[#F6F4EF] transition-colors">Batches</a>
              <a href="#process" className="hover:text-[#F6F4EF] transition-colors">Process</a>
              <a href="#ingredients" className="hover:text-[#F6F4EF] transition-colors">Ingredient Ledger</a>
              <a href="#tasting-box" className="hover:text-[#F6F4EF] transition-colors">Tasting Box</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A807B] gap-4">
          <div>
            © {new Date().getFullYear()} KORU Botanical Soda Company. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>Clean Extraction Standard</span>
            <span>100% Recyclable Aluminum</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
