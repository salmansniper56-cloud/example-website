import React from 'react';
import { CHEFS_SPECIALS } from '../data/restaurantData';
import { Star, Plus } from 'lucide-react';

export default function ChefsSpecials({ onAddToCart }) {
  const grandCombo = CHEFS_SPECIALS[0];
  const spicyWrap = CHEFS_SPECIALS[1];
  const grillMix = CHEFS_SPECIALS[2];

  return (
    <section style={{ padding: '40px 4% 60px', maxWidth: '1280px', margin: '0 auto' }}>
      <h2 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '900', color: '#ffffff', marginBottom: '28px' }}>
        CHEF'S SPECIALS
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {/* Left Featured Large Card (FLAMEBOX GRAND COMBO) */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative'
        }}>
          <div>
            <span style={{ color: 'var(--flame-orange)', fontWeight: '900', fontSize: '0.78rem', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
              CHEF'S SPECIAL
            </span>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', fontWeight: '900', color: '#ffffff', marginBottom: '4px' }}>
              {grandCombo.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '18px' }}>
              {grandCombo.subtitle}
            </p>

            {/* Platter Image */}
            <div style={{ position: 'relative', height: '220px', borderRadius: '14px', overflow: 'hidden', marginBottom: '20px' }}>
              <img src={grandCombo.image} alt={grandCombo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: grandCombo.badgeBg,
                color: '#fff',
                fontWeight: '900',
                fontSize: '0.72rem',
                padding: '4px 12px',
                borderRadius: '20px'
              }}>
                {grandCombo.badge}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#ffffff' }}>
              ${grandCombo.price}
            </span>
            <button
              onClick={() => onAddToCart({ id: grandCombo.id, name: grandCombo.title, price: grandCombo.price, image: grandCombo.image })}
              className="btn-orange"
              style={{ padding: '10px 22px' }}
            >
              <Plus size={16} />
              <span>Add</span>
            </button>
          </div>
        </div>

        {/* Right Stack Cards (SPICY WRAP PACK + GRILL MIX PLATTER) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Card 1: Spicy Wrap Pack */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <img src={spicyWrap.image} alt={spicyWrap.title} style={{ width: '110px', height: '110px', objectFit: 'cover', borderRadius: '14px', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '900', color: '#ffffff' }}>
                  {spicyWrap.title}
                </h4>
                <span style={{ background: spicyWrap.badgeBg, color: '#fff', fontSize: '0.65rem', fontWeight: '900', padding: '3px 8px', borderRadius: '12px' }}>
                  {spicyWrap.badge}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--flame-orange)', fontSize: '0.78rem', margin: '4px 0 8px' }}>
                <Star size={13} fill="var(--flame-orange)" />
                <span>4.9 (390)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: '900', color: '#ffffff' }}>
                  ${spicyWrap.price}
                </span>
                <button
                  onClick={() => onAddToCart({ id: spicyWrap.id, name: spicyWrap.title, price: spicyWrap.price, image: spicyWrap.image })}
                  className="btn-red"
                  style={{ padding: '6px 16px', fontSize: '0.78rem' }}
                >
                  <Plus size={14} />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Grill Mix Platter */}
          <div style={{
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <img src={grillMix.image} alt={grillMix.title} style={{ width: '110px', height: '110px', objectFit: 'cover', borderRadius: '14px', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '900', color: '#ffffff' }}>
                  {grillMix.title}
                </h4>
                <span style={{ background: grillMix.badgeBg, color: '#fff', fontSize: '0.65rem', fontWeight: '900', padding: '3px 8px', borderRadius: '12px' }}>
                  {grillMix.badge}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--flame-orange)', fontSize: '0.78rem', margin: '4px 0 8px' }}>
                <Star size={13} fill="var(--flame-orange)" />
                <span>5.0 (620)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: '900', color: '#ffffff' }}>
                  ${grillMix.price}
                </span>
                <button
                  onClick={() => onAddToCart({ id: grillMix.id, name: grillMix.title, price: grillMix.price, image: grillMix.image })}
                  className="btn-red"
                  style={{ padding: '6px 16px', fontSize: '0.78rem' }}
                >
                  <Plus size={14} />
                  <span>Add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
