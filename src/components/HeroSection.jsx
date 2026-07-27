import React, { useState } from 'react';
import { ChevronDown, Sparkles, Flame, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function HeroSection({ onOpenReserve, onToggleAIChat }) {
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      overflow: 'hidden',
      width: '100%',
      background: '#090a0f'
    }}>
      {/* Pexels HD Video Background */}
      <video
        autoPlay
        loop
        muted={isVideoMuted}
        playsInline
        poster="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.35) contrast(1.15)',
          zIndex: 1
        }}
      >
        <source src="https://videos.pexels.com/video-files/4929488/4929488-hd_1280_720_30fps.mp4" type="video/mp4" />
      </video>

      {/* Dark Backdrop Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(9, 10, 15, 0.4) 0%, rgba(9, 10, 15, 0.92) 85%, #090a0f 100%)',
        zIndex: 2
      }}></div>

      {/* Hero Video Audio Toggle */}
      <button
        onClick={() => setIsVideoMuted(!isVideoMuted)}
        style={{
          position: 'absolute',
          top: '95px',
          right: '28px',
          zIndex: 20,
          background: 'rgba(15, 17, 23, 0.85)',
          border: '1px solid var(--border-gold)',
          color: 'var(--gold-light)',
          padding: '8px 16px',
          borderRadius: '30px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.78rem',
          fontWeight: '600',
          backdropFilter: 'blur(12px)'
        }}
      >
        {isVideoMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        <span>{isVideoMuted ? 'UNMUTE B-ROLL' : 'SOUND ON'}</span>
      </button>

      {/* Hero Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '960px',
        width: '100%',
        textAlign: 'center',
        margin: '0 auto'
      }}>
        {/* Top Tagline */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(212, 175, 55, 0.1)',
          border: '1px solid var(--border-gold)',
          padding: '6px 20px',
          borderRadius: '30px',
          marginBottom: '24px',
          backdropFilter: 'blur(12px)'
        }}>
          <Sparkles size={14} color="var(--gold-primary)" />
          <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--gold-light)', letterSpacing: '2px', textTransform: 'uppercase' }}>
            HAUTE FAST-CASUAL GASTRONOMY
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h1 className="font-serif text-gold-gradient" style={{
          fontSize: 'clamp(2.4rem, 6.5vw, 5.4rem)',
          fontWeight: '900',
          lineHeight: 1.08,
          marginBottom: '20px',
          letterSpacing: '-1px'
        }}>
          THE ART OF <br />
          <span className="text-ember-gradient">SMASH & CRUNCH</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(0.98rem, 2vw, 1.18rem)',
          color: '#cbd5e1',
          maxWidth: '640px',
          margin: '0 auto 36px',
          fontWeight: '400',
          lineHeight: 1.65
        }}>
          100% Angus smash patties, 11-spice mega crispy chicken, and hand-tossed mozzarella cheese crust pizzas. Crafted fresh daily.
        </p>

        {/* CTA Button Group */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          <a
            href="#menu"
            className="btn-gold"
            style={{ fontSize: '0.95rem', padding: '14px 34px' }}
          >
            <span>EXPLORE MENU</span>
            <ArrowRight size={16} />
          </a>

          <button
            onClick={onOpenReserve}
            className="btn-outline-gold"
            style={{ fontSize: '0.95rem', padding: '14px 34px' }}
          >
            <span>EXPRESS DELIVERY</span>
          </button>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '16px',
          maxWidth: '840px',
          margin: '0 auto',
          padding: '20px 24px',
          background: 'rgba(17, 20, 29, 0.75)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          backdropFilter: 'blur(16px)'
        }}>
          {RESTAURANT_INFO.stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div className="font-serif text-gold-gradient" style={{ fontSize: '1.7rem', fontWeight: '800' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Hint */}
      <a
        href="#menu"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          color: 'var(--text-muted)',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.68rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontWeight: '600'
        }}
      >
        <span>SCROLL DOWN</span>
        <ChevronDown size={15} />
      </a>
    </section>
  );
}
