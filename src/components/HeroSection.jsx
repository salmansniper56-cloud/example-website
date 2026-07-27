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
      background: '#121418'
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

      {/* Dark Overlay Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(18, 20, 24, 0.4) 0%, rgba(18, 20, 24, 0.92) 85%, #121418 100%)',
        zIndex: 2
      }}></div>

      {/* Hero Audio Toggle */}
      <button
        onClick={() => setIsVideoMuted(!isVideoMuted)}
        style={{
          position: 'absolute',
          top: '95px',
          right: '28px',
          zIndex: 20,
          background: 'rgba(24, 27, 32, 0.85)',
          border: '1px solid var(--border-subtle)',
          color: 'var(--brand-yellow)',
          padding: '8px 16px',
          borderRadius: '30px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.78rem',
          fontWeight: '700',
          backdropFilter: 'blur(12px)'
        }}
      >
        {isVideoMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        <span>{isVideoMuted ? 'UNMUTE B-ROLL' : 'AUDIO ON'}</span>
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
          background: 'rgba(230, 57, 70, 0.2)',
          border: '1px solid var(--brand-red)',
          padding: '6px 20px',
          borderRadius: '30px',
          marginBottom: '24px',
          backdropFilter: 'blur(12px)'
        }}>
          <Flame size={15} color="var(--brand-yellow)" />
          <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            VOTED #1 FAST-CASUAL SPOT IN NEW YORK
          </span>
        </div>

        {/* Big Crisp Headline */}
        <h1 className="font-serif" style={{
          fontSize: 'clamp(2.4rem, 6.5vw, 5.4rem)',
          fontWeight: '900',
          lineHeight: 1.08,
          marginBottom: '20px',
          color: '#ffffff',
          letterSpacing: '-0.5px'
        }}>
          UNBEATABLE CRUNCH. <br />
          <span style={{ color: 'var(--brand-yellow)' }}>SUPREME BURGERS & PIZZAS.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(0.98rem, 2vw, 1.18rem)',
          color: '#a0aec0',
          maxWidth: '640px',
          margin: '0 auto 36px',
          fontWeight: '400',
          lineHeight: 1.65
        }}>
          100% Angus smash beef, 11-spice mega crispy chicken buckets, and hand-tossed cheese crust pizzas. Delivered hot & fast.
        </p>

        {/* CTA Group */}
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
            className="btn-red"
            style={{ fontSize: '0.95rem', padding: '14px 34px' }}
          >
            <Flame size={18} />
            <span>ORDER MENU NOW</span>
          </a>

          <button
            onClick={onOpenReserve}
            className="btn-yellow"
            style={{ fontSize: '0.95rem', padding: '14px 34px' }}
          >
            <span>EXPRESS DELIVERY</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onToggleAIChat}
            className="btn-outline-clean"
            style={{ fontSize: '0.95rem', padding: '14px 28px' }}
          >
            <Sparkles size={16} color="var(--brand-yellow)" />
            <span>AI ASSISTANT</span>
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
          background: 'rgba(30, 34, 41, 0.85)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          backdropFilter: 'blur(16px)'
        }}>
          {RESTAURANT_INFO.stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div className="font-serif" style={{ fontSize: '1.7rem', fontWeight: '900', color: 'var(--brand-yellow)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down */}
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
          fontWeight: '700'
        }}
      >
        <span>SCROLL DOWN</span>
        <ChevronDown size={15} />
      </a>
    </section>
  );
}
