import React from 'react';
import { Award, ChevronDown, Sparkles, Utensils, Star, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function HeroSection({ onOpenReserve, onToggleAIChat }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 20px 60px',
      overflow: 'hidden'
    }}>
      {/* Background Image Overlay with subtle zoom effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(180deg, rgba(11, 13, 16, 0.7) 0%, rgba(11, 13, 16, 0.9) 80%, #0b0d10 100%), url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.85)',
        zIndex: 1
      }}></div>

      {/* Decorative Golden Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 2,
        pointerEvents: 'none'
      }}></div>

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1000px',
        textAlign: 'center',
        margin: '0 auto'
      }}>
        {/* Michelin Star Award Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(212, 175, 55, 0.12)',
          border: '1px solid var(--border-gold)',
          padding: '8px 20px',
          borderRadius: '30px',
          marginBottom: '28px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            <Star size={14} fill="var(--gold-primary)" color="var(--gold-primary)" />
            <Star size={14} fill="var(--gold-primary)" color="var(--gold-primary)" />
            <Star size={14} fill="var(--gold-primary)" color="var(--gold-primary)" />
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--gold-light)', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Michelin Guide 3-Star Awardee 2026
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-gold-gradient" style={{
          fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
          fontWeight: '800',
          lineHeight: 1.1,
          marginBottom: '24px',
          textShadow: '0 10px 30px rgba(0,0,0,0.8)'
        }}>
          Haute Cuisine & <br />
          Modern Gastronomy
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
          color: 'var(--text-muted)',
          maxWidth: '720px',
          margin: '0 auto 40px',
          fontWeight: '300',
          lineHeight: 1.6
        }}>
          Step inside Manhattan's most celebrated restaurant. Immerse your senses in French culinary artistry, rare salt-cave vintages, and an AI-driven personal sommelier experience.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '18px',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          <a
            href="#menu"
            className="btn-gold"
            data-cursor="TASTE"
            style={{ fontSize: '1rem', padding: '14px 32px' }}
          >
            <Utensils size={18} />
            <span>Explore Menu</span>
          </a>

          <button
            onClick={onOpenReserve}
            className="btn-outline-gold"
            data-cursor="RESERVE"
            style={{ fontSize: '1rem', padding: '14px 32px' }}
          >
            <span>Book A Table</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onToggleAIChat}
            data-cursor="AI SOMMELIER"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 21, 56, 0.4), rgba(212, 175, 55, 0.2))',
              border: '1px solid var(--gold-primary)',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '50px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '600',
              backdropFilter: 'blur(12px)',
              transition: 'var(--transition-smooth)'
            }}
          >
            <Sparkles size={18} color="var(--gold-primary)" />
            <span>Ask AI Sommelier</span>
          </button>
        </div>

        {/* Live Statistics Counter Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '20px',
          maxWidth: '850px',
          margin: '0 auto',
          padding: '24px',
          background: 'rgba(18, 22, 31, 0.5)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-md)',
          backdropFilter: 'blur(16px)'
        }}>
          {RESTAURANT_INFO.stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div className="font-serif text-gold-gradient" style={{ fontSize: '2rem', fontWeight: '800' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
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
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          color: 'var(--gold-primary)',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.75rem',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}
      >
        <span>Scroll to Discover</span>
        <ChevronDown size={18} style={{ animation: 'bounce 2s infinite' }} />
      </a>
    </section>
  );
}
