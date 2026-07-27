import React from 'react';
import { ChevronDown, Sparkles, Utensils, Star, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function HeroSection({ onOpenReserve, onToggleAIChat }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 16px 60px',
      overflow: 'hidden',
      width: '100%'
    }}>
      {/* Background Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(180deg, rgba(11, 13, 16, 0.75) 0%, rgba(11, 13, 16, 0.92) 80%, #0b0d10 100%), url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.85)',
        zIndex: 1
      }}></div>

      {/* Decorative Glow */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(90vw, 400px)',
        height: 'min(90vw, 400px)',
        background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 2,
        pointerEvents: 'none'
      }}></div>

      {/* Main Hero Card Container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '960px',
        width: '100%',
        textAlign: 'center',
        margin: '0 auto'
      }}>
        {/* Michelin Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(212, 175, 55, 0.12)',
          border: '1px solid var(--border-gold)',
          padding: '6px 16px',
          borderRadius: '30px',
          marginBottom: '20px',
          backdropFilter: 'blur(10px)',
          maxWidth: '100%'
        }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            <Star size={12} fill="var(--gold-primary)" color="var(--gold-primary)" />
            <Star size={12} fill="var(--gold-primary)" color="var(--gold-primary)" />
            <Star size={12} fill="var(--gold-primary)" color="var(--gold-primary)" />
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--gold-light)', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Michelin Guide 3-Star Awardee 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-gold-gradient" style={{
          fontSize: 'clamp(2rem, 5.5vw, 4.8rem)',
          fontWeight: '800',
          lineHeight: 1.15,
          marginBottom: '18px',
          textShadow: '0 10px 30px rgba(0,0,0,0.8)'
        }}>
          Haute Cuisine & <br />
          Modern Gastronomy
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(0.92rem, 2vw, 1.15rem)',
          color: 'var(--text-muted)',
          maxWidth: '680px',
          margin: '0 auto 32px',
          fontWeight: '300',
          lineHeight: 1.6
        }}>
          Step inside Manhattan's most celebrated restaurant. Immerse your senses in French culinary artistry, rare salt-cave vintages, and a personal sommelier experience.
        </p>

        {/* CTA Action Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <a
            href="#menu"
            className="btn-gold"
            data-cursor="TASTE"
          >
            <Utensils size={16} />
            <span>Explore Menu</span>
          </a>

          <button
            onClick={onOpenReserve}
            className="btn-outline-gold"
            data-cursor="RESERVE"
          >
            <span>Book Table</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onToggleAIChat}
            data-cursor="AI SOMMELIER"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 21, 56, 0.4), rgba(212, 175, 55, 0.2))',
              border: '1px solid var(--gold-primary)',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '50px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontWeight: '600',
              backdropFilter: 'blur(12px)',
              fontSize: '0.9rem'
            }}
          >
            <Sparkles size={16} color="var(--gold-primary)" />
            <span>Ask AI Sommelier</span>
          </button>
        </div>

        {/* Statistics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: '12px',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '16px',
          background: 'rgba(18, 22, 31, 0.6)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-md)',
          backdropFilter: 'blur(16px)'
        }}>
          {RESTAURANT_INFO.stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div className="font-serif text-gold-gradient" style={{ fontSize: '1.6rem', fontWeight: '800' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#menu"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          color: 'var(--gold-primary)',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.7rem',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}
      >
        <span>Scroll Down</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}
