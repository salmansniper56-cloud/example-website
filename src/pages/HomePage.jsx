import React from 'react';
import HeroSection from '../components/HeroSection';
import PopularCategories from '../components/PopularCategories';
import ChefsSpecials from '../components/ChefsSpecials';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutBrand from '../components/AboutBrand';
import OffersBanner from '../components/OffersBanner';
import KitchenVideoMarquee from '../components/KitchenVideoMarquee';
import { Flame, Sparkles } from 'lucide-react';

export default function HomePage({ onAddToCart, onOpenReserve, onToggleAIChat, onReplayDoors }) {
  return (
    <div className="page-fade-enter">
      {/* 1. Hero Section (Matching Reference Screenshot) */}
      <HeroSection onOpenReserve={onOpenReserve} onToggleAIChat={onToggleAIChat} />

      {/* 2. Popular Categories (Circular Avatars Grid) */}
      <PopularCategories />

      {/* 3. Chef's Specials (Grand Combo + Spicy Wrap + Grill Mix) */}
      <ChefsSpecials onAddToCart={onAddToCart} />

      {/* 4. Why Food Lovers Choose Us (4 White Cards) */}
      <WhyChooseUs />

      {/* 5. About The Brand (Photo Grid + Copy) */}
      <AboutBrand />

      {/* 6. Special Combos & Offers Banner */}
      <OffersBanner />

      {/* 7. Live Kitchen Video B-Roll Stream */}
      <KitchenVideoMarquee />

      {/* 8. Bottom CTA Banner (Matching Reference Screenshot: TASTE THE FIRE TODAY) */}
      <section style={{
        padding: '80px 4%',
        textAlign: 'center',
        background: 'radial-gradient(circle at center, rgba(255, 107, 0, 0.15) 0%, #121419 75%)',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Flame size={44} color="var(--flame-orange)" style={{ marginBottom: '16px' }} />
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: '900', color: '#ffffff', marginBottom: '16px' }}>
            TASTE THE <span style={{ color: 'var(--flame-orange)' }}>FIRE TODAY</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '32px', maxWidth: '540px', margin: '0 auto 32px' }}>
            Order online now for 25-30 minute express delivery straight to your door.
          </p>

          <button onClick={onOpenReserve} className="btn-red" style={{ fontSize: '1rem', padding: '14px 38px' }}>
            <span>Order Now</span>
          </button>
        </div>
      </section>

      {/* Entrance Door Replay Trigger */}
      <div style={{ textAlign: 'center', padding: '20px 0 40px' }}>
        <button
          onClick={onReplayDoors}
          style={{
            background: 'none',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)',
            padding: '6px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '0.78rem'
          }}
        >
          <Sparkles size={12} color="var(--flame-orange)" style={{ marginRight: '6px' }} />
          Replay Entrance Doors
        </button>
      </div>
    </div>
  );
}
