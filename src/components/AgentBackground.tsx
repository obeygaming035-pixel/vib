import React from 'react';
import { VPPackage } from '../types';

interface AgentBackgroundProps {
  packages: VPPackage[];
  activeIndex: number;
}

export const AgentBackground: React.FC<AgentBackgroundProps> = ({
  packages,
  activeIndex,
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Base Dark Void Canvas */}
      <div className="absolute inset-0 bg-[#06090e]" />

      {/* Futuristic Grid Layer */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* 3D Isometric Cyber City Geometry Elements (CSS/SVG Vector) */}
      <div className="absolute inset-x-0 bottom-0 top-12 opacity-35 overflow-hidden">
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grid-fade" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="pillar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0a0f18" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Perspective City Blocks & Columns */}
          {/* Left Columns */}
          <path d="M120 280 L220 230 L220 720 L120 770 Z" fill="url(#pillar-grad)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <path d="M220 230 L290 260 L290 700 L220 720 Z" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          
          <path d="M260 340 L340 300 L340 760 L260 800 Z" fill="url(#pillar-grad)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <path d="M340 300 L400 330 L400 740 L340 760 Z" fill="rgba(15,23,42,0.5)" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* Center-Left Box Pillars */}
          <path d="M420 420 L480 390 L480 780 L420 810 Z" fill="url(#pillar-grad)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <path d="M480 390 L530 410 L530 765 L480 780 Z" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

          {/* Right Columns */}
          <path d="M1300 240 L1420 190 L1420 750 L1300 800 Z" fill="url(#pillar-grad)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <path d="M1420 190 L1490 220 L1490 720 L1420 750 Z" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

          <path d="M1180 320 L1260 280 L1260 760 L1180 800 Z" fill="url(#pillar-grad)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <path d="M1260 280 L1320 310 L1320 740 L1260 760 Z" fill="rgba(15,23,42,0.5)" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* Perspective Ground Runway Lines */}
          <line x1="300" y1="880" x2="680" y2="520" stroke="url(#grid-fade)" strokeWidth="2" strokeDasharray="16 8" />
          <line x1="500" y1="880" x2="740" y2="520" stroke="url(#grid-fade)" strokeWidth="2" />
          <line x1="1100" y1="880" x2="860" y2="520" stroke="url(#grid-fade)" strokeWidth="2" />
          <line x1="1300" y1="880" x2="920" y2="520" stroke="url(#grid-fade)" strokeWidth="2" strokeDasharray="16 8" />
        </svg>
      </div>

      {/* Layered Smooth Dissolve for Each Character's Atmosphere */}
      {packages.map((pkg, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={pkg.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-out"
            style={{
              opacity: isActive ? 1 : 0,
              pointerEvents: 'none',
            }}
          >
            {/* Primary Radial Glow Atmosphere */}
            <div
              className="absolute inset-0"
              style={{
                background: pkg.theme.bgGradient,
              }}
            />

            {/* Volumetric Center Spotlight */}
            <div
              className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[900px] h-[700px] rounded-full blur-[140px] opacity-40 mix-blend-screen"
              style={{
                backgroundColor: pkg.theme.primaryColor,
              }}
            />

            {/* Subtle Ground Reflections & Neon Laser Strip */}
            <div
              className="absolute bottom-16 left-0 right-0 h-40 opacity-30 blur-2xl"
              style={{
                background: `radial-gradient(ellipse at center, ${pkg.theme.primaryColor} 0%, transparent 70%)`,
              }}
            />

            {/* Official Riot Agent Graphic Watermark Layer */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[650px] opacity-10 mix-blend-screen flex items-center justify-center pointer-events-none">
              <img
                src={pkg.characterBgAsset}
                alt=""
                className="max-h-[85%] object-contain filter brightness-125"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        );
      })}

      {/* Vignette Edge Shading */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#06080d_98%)] opacity-85" />
    </div>
  );
};
