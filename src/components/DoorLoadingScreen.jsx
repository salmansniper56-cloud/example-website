import React, { useState, useEffect } from 'react';
import { Utensils, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function DoorLoadingScreen({ onLoadingComplete }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Wait a brief moment then trigger the waiter hands door push opening sequence
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        if (onLoadingComplete) onLoadingComplete();
      }, 1500);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  // SVG Graphic for Waiter's White Gloved Hand in Tuxedo
  const WaiterHandSVG = () => (
    <svg width="130" height="95" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tuxedo Sleeve */}
      <path d="M0 25 L65 20 L72 70 L0 65 Z" fill="#0b0d10" stroke="#d4af37" strokeWidth="1.5" />
      {/* Gold Cuff Button */}
      <circle cx="55" cy="45" r="4" fill="#f5d77f" stroke="#aa8624" strokeWidth="1" />
      {/* Shirt Cuff */}
      <path d="M65 20 L75 19 L80 71 L72 70 Z" fill="#ffffff" />
      {/* White Gloved Hand pushing door */}
      <path d="M75 22 C85 18, 105 20, 115 28 C120 32, 118 42, 112 46 C116 48, 117 56, 110 60 C114 62, 113 70, 104 72 C96 74, 82 72, 78 70 Z" fill="#f8f9fa" stroke="#d1d5db" strokeWidth="1.5" />
      {/* Glove Details */}
      <path d="M88 32 L102 34" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M86 44 L101 46" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M84 56 L98 58" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className={`door-container ${isOpen ? 'open' : ''}`}>
      {/* Left Door Panel + Waiter Hand */}
      <div className="door-panel door-left">
        <div className="door-handle-left"></div>
        <div className="waiter-hand-left">
          <WaiterHandSVG />
        </div>
      </div>

      {/* Center Spaced Text Seal Box */}
      <div className="door-center-seal">
        <div className="door-crest">
          <Utensils size={36} color="var(--gold-primary)" />
          <span style={{ fontSize: '0.65rem', color: 'var(--gold-primary)', marginTop: '4px', letterSpacing: '2px' }}>
            EST. 2008
          </span>
        </div>

        <h1 className="font-serif text-gold-gradient" style={{ fontSize: '2.4rem', marginBottom: '8px', fontWeight: '800' }}>
          {RESTAURANT_INFO.name}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '16px', letterSpacing: '1px' }}>
          {RESTAURANT_INFO.tagline}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <Sparkles size={14} color="var(--gold-primary)" />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-gold)', fontStyle: 'italic', letterSpacing: '1px' }}>
            Welcoming You to Haute Gastronomy
          </span>
        </div>
      </div>

      {/* Right Door Panel + Waiter Hand */}
      <div className="door-panel door-right">
        <div className="door-handle-right"></div>
        <div className="waiter-hand-right">
          <WaiterHandSVG />
        </div>
      </div>
    </div>
  );
}
