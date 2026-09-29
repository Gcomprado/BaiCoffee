"use client";

import React from "react";
import { Flavor } from "@/data/sodaData";
import { Sparkles } from "lucide-react";

interface SodaCan3DProps {
  flavor: Flavor;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}

export const SodaCan3D: React.FC<SodaCan3DProps> = ({
  flavor,
  size = "lg",
  className = "",
  animate = true,
}) => {
  const scaleMap = {
    sm: "w-[120px] h-[240px]",
    md: "w-[170px] h-[340px]",
    lg: "w-[240px] h-[460px] md:w-[280px] md:h-[520px]",
    xl: "w-[300px] h-[580px] md:w-[340px] md:h-[640px]",
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background Radial Glow */}
      <div
        className="absolute w-[130%] h-[120%] rounded-full blur-3xl opacity-60 pointer-events-none transition-all duration-700 animate-pulse-glow"
        style={{
          background: `radial-gradient(circle, ${flavor.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Floating Floating Droplet Orbs */}
      <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center animate-bounce duration-1000">
        <Sparkles className="w-5 h-5 text-amber-200" style={{ color: flavor.accentColor }} />
      </div>

      <div className="absolute -bottom-4 -left-6 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-white shadow-xl flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: flavor.primaryColor }} />
        {flavor.fiber} PREBIOTICS
      </div>

      {/* 3D Can Container with Float Animation */}
      <div
        className={`relative ${scaleMap[size]} transition-all duration-500 ${
          animate ? "animate-float" : ""
        } group`}
        style={{
          filter: "drop-shadow(0 25px 35px rgba(0, 0, 0, 0.7))",
        }}
      >
        <svg
          viewBox="0 0 200 380"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic Aluminum Top / Bottom Gradients */}
            <linearGradient id="metalRim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#71717a" />
              <stop offset="15%" stopColor="#e4e4e7" />
              <stop offset="35%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#a1a1aa" />
              <stop offset="85%" stopColor="#e4e4e7" />
              <stop offset="100%" stopColor="#52525b" />
            </linearGradient>

            <linearGradient id="metalTab" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f4f4f5" />
              <stop offset="100%" stopColor="#71717a" />
            </linearGradient>

            {/* Dynamic Flavor Can Body Wrap */}
            <linearGradient id={`flavorBody-${flavor.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#111827" stopOpacity="0.85" />
              <stop offset="12%" stopColor={flavor.primaryColor} />
              <stop offset="35%" stopColor={flavor.accentColor} />
              <stop offset="55%" stopColor={flavor.primaryColor} />
              <stop offset="80%" stopColor={flavor.secondaryColor} />
              <stop offset="100%" stopColor="#030712" stopOpacity="0.95" />
            </linearGradient>

            {/* Specular Light Reflection */}
            <linearGradient id="specularGlint" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="28%" stopColor="#ffffff" stopOpacity="0.03" />
              <stop offset="32%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="36%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Cylinder Shadow Overlay */}
            <linearGradient id="cylinderShadow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.6" />
              <stop offset="18%" stopColor="#000000" stopOpacity="0" />
              <stop offset="80%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.75" />
            </linearGradient>

            {/* Clip path for can body */}
            <clipPath id="canClip">
              <path d="M25 40 Q25 32 40 32 L160 32 Q175 32 175 40 L172 345 Q172 355 155 355 L45 355 Q28 355 28 345 Z" />
            </clipPath>
          </defs>

          {/* TOP METAL RIM & LID */}
          {/* Outer Neck Bevel */}
          <path
            d="M38 32 C38 20, 162 20, 162 32 C162 38, 38 38, 38 32 Z"
            fill="url(#metalRim)"
          />
          {/* Inner Rim Lip */}
          <ellipse cx="100" cy="28" rx="58" ry="10" fill="url(#metalRim)" stroke="#3f3f46" strokeWidth="1" />
          <ellipse cx="100" cy="27" rx="52" ry="7.5" fill="#27272a" />

          {/* Metal Pull Tab */}
          <path
            d="M85 24 C85 22, 115 22, 115 24 L110 31 C110 33, 90 33, 90 31 Z"
            fill="url(#metalTab)"
            stroke="#18181b"
            strokeWidth="0.8"
          />
          <circle cx="100" cy="28" r="2.5" fill="#18181b" />

          {/* MAIN CAN BODY (Clipped) */}
          <g clipPath="url(#canClip)">
            {/* Base Flavor Gradient */}
            <rect x="20" y="30" width="160" height="330" fill={`url(#flavorBody-${flavor.id})`} />

            {/* Organic Artistic Wave Pattern */}
            <path
              d="M20 120 Q60 90 100 130 T180 110 L180 270 Q140 300 100 260 T20 280 Z"
              fill={flavor.secondaryColor}
              opacity="0.35"
            />
            <path
              d="M20 160 Q70 200 100 150 T180 180 L180 230 Q130 210 100 240 T20 210 Z"
              fill={flavor.accentColor}
              opacity="0.25"
            />

            {/* Botanical Ring Motif */}
            <circle cx="100" cy="180" r="46" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="180" r="38" fill="rgba(0, 0, 0, 0.25)" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.2" />

            {/* Brand Logo & Typography on Can */}
            <text
              x="100"
              y="110"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="10"
              fontWeight="800"
              letterSpacing="3"
            >
              LUMINA SPRITZ
            </text>
            <text
              x="100"
              y="122"
              textAnchor="middle"
              fill="rgba(255, 255, 255, 0.7)"
              fontSize="6"
              fontWeight="600"
              letterSpacing="1.5"
            >
              PREBIOTIC BOTANICAL SODA
            </text>

            {/* Flavor Central Graphic Icon */}
            <g transform="translate(86, 166)">
              <circle cx="14" cy="14" r="14" fill={flavor.accentColor} opacity="0.3" />
              <path
                d="M14 4 C8 10 7 18 14 24 C21 18 20 10 14 4 Z"
                fill="#ffffff"
                opacity="0.9"
              />
              <circle cx="14" cy="14" r="3" fill={flavor.primaryColor} />
            </g>

            {/* Flavor Name on Can */}
            <text
              x="100"
              y="245"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="12"
              fontWeight="900"
              letterSpacing="0.5"
            >
              {flavor.name.toUpperCase().split("&")[0]}
            </text>
            {flavor.name.includes("&") && (
              <text
                x="100"
                y="258"
                textAnchor="middle"
                fill={flavor.accentColor}
                fontSize="9"
                fontWeight="700"
                letterSpacing="1"
              >
                & {flavor.name.split("&")[1]?.toUpperCase()}
              </text>
            )}

            {/* Badges on Bottom of Can */}
            <text
              x="100"
              y="290"
              textAnchor="middle"
              fill="rgba(255, 255, 255, 0.85)"
              fontSize="7"
              fontWeight="600"
              letterSpacing="1"
            >
              30 CAL • 5g FIBER • 0g SUGAR ADDED
            </text>
            <text
              x="100"
              y="320"
              textAnchor="middle"
              fill="rgba(255, 255, 255, 0.6)"
              fontSize="6"
              fontWeight="500"
              letterSpacing="1"
            >
              12 FL OZ (355 ML)
            </text>

            {/* CONDENSATION WATER DROPLETS ON CAN */}
            <g opacity="0.75">
              {/* Droplet 1 */}
              <ellipse cx="60" cy="140" rx="2.5" ry="4" fill="rgba(255, 255, 255, 0.6)" />
              <ellipse cx="59" cy="139" rx="0.8" ry="1.2" fill="#ffffff" />
              {/* Droplet 2 */}
              <circle cx="145" cy="160" r="2" fill="rgba(255, 255, 255, 0.55)" />
              <circle cx="144" cy="159" r="0.6" fill="#ffffff" />
              {/* Droplet 3 */}
              <ellipse cx="75" cy="270" rx="3" ry="5.5" fill="rgba(255, 255, 255, 0.6)" />
              <ellipse cx="74" cy="268" rx="1" ry="1.5" fill="#ffffff" />
              {/* Droplet 4 */}
              <circle cx="130" cy="295" r="2.8" fill="rgba(255, 255, 255, 0.5)" />
              <circle cx="129" cy="294" r="0.8" fill="#ffffff" />
              {/* Droplet 5 */}
              <ellipse cx="55" cy="210" rx="2" ry="3" fill="rgba(255, 255, 255, 0.6)" />
              {/* Droplet 6 */}
              <circle cx="150" cy="220" r="2.2" fill="rgba(255, 255, 255, 0.5)" />
            </g>

            {/* Specular Light Reflection Strip (Vertical glossy shine) */}
            <rect x="20" y="30" width="160" height="330" fill="url(#specularGlint)" />

            {/* 3D Curved Cylinder Shadows */}
            <rect x="20" y="30" width="160" height="330" fill="url(#cylinderShadow)" />
          </g>

          {/* BOTTOM RIM & BASE */}
          <path
            d="M30 345 C30 358, 170 358, 170 345 L160 360 C160 368, 40 368, 40 360 Z"
            fill="url(#metalRim)"
          />
          <ellipse cx="100" cy="360" rx="60" ry="7" fill="url(#metalRim)" stroke="#3f3f46" strokeWidth="0.8" />
        </svg>
      </div>
    </div>
  );
};
