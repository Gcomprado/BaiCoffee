"use client";

import React from "react";
import { ProductFlavor } from "@/data/productData";

interface TactileCanProps {
  flavor: ProductFlavor;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const TactileCanIllustration: React.FC<TactileCanProps> = ({
  flavor,
  size = "lg",
  className = "",
}) => {
  const dimensions = {
    sm: "w-28 h-56",
    md: "w-44 h-80",
    lg: "w-56 h-[390px] md:w-64 md:h-[450px]",
  };

  return (
    <div className={`relative flex items-center justify-center ${dimensions[size]} ${className}`}>
      <svg
        viewBox="0 0 200 360"
        className="w-full h-full drop-shadow-xl select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle aluminum rim reflection */}
          <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8C918D" />
            <stop offset="25%" stopColor="#D2D6D3" />
            <stop offset="60%" stopColor="#F0F2F1" />
            <stop offset="85%" stopColor="#BAC0BC" />
            <stop offset="100%" stopColor="#696E6A" />
          </linearGradient>

          {/* Cylinder shade overlay */}
          <linearGradient id="cylinderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="15%" stopColor="#000000" stopOpacity="0.0" />
            <stop offset="75%" stopColor="#000000" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
          </linearGradient>

          {/* Label clipping mask */}
          <clipPath id="canBodyClip">
            <rect x="25" y="36" width="150" height="300" rx="6" />
          </clipPath>
        </defs>

        {/* Top Rim */}
        <ellipse cx="100" cy="24" rx="55" ry="12" fill="url(#rimGrad)" />
        <ellipse cx="100" cy="22" rx="46" ry="8" fill="#525754" />
        <ellipse cx="100" cy="21" rx="42" ry="6.5" fill="#383C39" />
        
        {/* Tab */}
        <rect x="94" y="16" width="12" height="10" rx="2" fill="#D2D6D3" />
        <circle cx="100" cy="21" r="2" fill="#202221" />

        {/* Can Upper Neck */}
        <path
          d="M45 24 L25 40 L175 40 L155 24 Z"
          fill="url(#rimGrad)"
        />

        {/* Can Main Body Container */}
        <g clipPath="url(#canBodyClip)">
          {/* Base Label Background */}
          <rect x="25" y="36" width="150" height="300" fill={flavor.color.bgTint} />

          {/* Top Label Color Band */}
          <rect x="25" y="36" width="150" height="85" fill={flavor.color.accent} />

          {/* Brand Wordmark on Label */}
          <text
            x="100"
            y="75"
            textAnchor="middle"
            fill="#F6F4EF"
            fontSize="18"
            fontFamily="Fraunces, serif"
            fontWeight="700"
            letterSpacing="-0.5"
          >
            KORU
          </text>
          <text
            x="100"
            y="92"
            textAnchor="middle"
            fill="#F6F4EF"
            fontSize="6.5"
            fontFamily="sans-serif"
            fontWeight="500"
            letterSpacing="0.8"
            opacity="0.9"
          >
            BOTANICAL SODA
          </text>

          {/* Flavor Name in Body */}
          <text
            x="100"
            y="170"
            textAnchor="middle"
            fill={flavor.color.textTint}
            fontSize="12"
            fontFamily="Fraunces, serif"
            fontWeight="700"
            letterSpacing="-0.3"
          >
            {flavor.name.split("&")[0].trim()}
          </text>
          {flavor.name.includes("&") && (
            <text
              x="100"
              y="186"
              textAnchor="middle"
              fill={flavor.color.textTint}
              fontSize="10"
              fontFamily="Fraunces, serif"
              fontWeight="600"
              letterSpacing="-0.2"
            >
              & {flavor.name.split("&")[1].trim()}
            </text>
          )}

          {/* Botanical Subtitle text on can */}
          <text
            x="100"
            y="218"
            textAnchor="middle"
            fill="#5C625D"
            fontSize="6"
            fontFamily="sans-serif"
            fontWeight="400"
          >
            {flavor.botanicalSubtitle.split(",").slice(0, 2).join(" • ")}
          </text>

          {/* Minimalist Botanical Motif / Seal */}
          <circle cx="100" cy="254" r="16" fill="none" stroke={flavor.color.accent} strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="100" cy="254" r="12" fill={flavor.color.accent} opacity="0.15" />
          <path
            d="M100 244 C96 250, 96 258, 100 264 C104 258, 104 250, 100 244 Z"
            fill={flavor.color.accent}
          />

          {/* Volume and Calorie Spec on Bottom */}
          <text
            x="100"
            y="300"
            textAnchor="middle"
            fill="#7A807B"
            fontSize="6"
            fontFamily="sans-serif"
            fontWeight="500"
          >
            355 ML • {flavor.metrics.calories} CAL • 3G SUGAR
          </text>
          <text
            x="100"
            y="312"
            textAnchor="middle"
            fill="#9BA19C"
            fontSize="5"
            fontFamily="sans-serif"
          >
            BREWED IN VERMONT
          </text>

          {/* Soft Physical Shading Overlay */}
          <rect x="25" y="36" width="150" height="300" fill="url(#cylinderGrad)" />
        </g>

        {/* Bottom Rim */}
        <path
          d="M25 336 L40 350 L160 350 L175 336 Z"
          fill="url(#rimGrad)"
        />
        <ellipse cx="100" cy="350" rx="60" ry="6" fill="#464A47" />
      </svg>
    </div>
  );
};
