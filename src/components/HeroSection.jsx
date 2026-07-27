import React, { useState } from 'react';
import { ChevronDown, Sparkles, Flame, Star, ArrowRight, Volume2, VolumeX } from 'lucide-react';
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
      padding: '100px 16px 60px',
      overflow: 'hidden',
      width: '100%',
      background: '#000'
    }}>
      {/* Pexels HD Video Background Loop */}
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
          filter: 'brightness(0.55) contrast(1.1)',
          zIndex: 1
        }}
      >
        <source src="https://videos.pexels.com/video-files/4929488/4929488-hd_1280_720_30fps.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(15, 17, 23, 0.4) 0%, rgba(15, 17, 23, 0.85) 80%, #0f1117 100%)',
        zIndex: 2
      }}></div>

      {/* Hero Sound Toggle Button */}
      <button
        onClick={() => setIsVideoMuted(!isVideoMuted)}
        style={{
          position: 'absolute',
          top: '90px',
          right: '24px',
          zIndex: 20,
          background: 'rgba(15, 17, 23, 0.85)',
          border: '1px solid var(--border-gold)',
          color: 'var(--gold-primary)',
          padding: '8px 14px',
          borderRadius: '20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '0.8rem',
          fontWeight: '700',
          backdropFilter: 'blur(10px)'
        }}
      >
        {isVideoMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        <span>{isVideoMuted ? 'Unmute Video' : 'Audio On'}</span>
      </button>

      {/* Main Hero Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '960px',
        width: '100%',
        textAlign: 'center',
        margin: '0 auto'
      }}>
        {/* Rating & Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(230, 57, 70, 0.25)',
          border: '1px solid var(--crimson-accent)',
          padding: '6px 18px',
          borderRadius: '30px',
          marginBottom: '20px',
          backdropFilter: 'blur(12px)'
        }}>
          <Flame size={16} color="var(--gold-primary)" />
          <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Voted #1 Burger & Pizza Spot in NY 2026
          </span>
        </div>

        {/* Big Headline */}
        <h1 className="font-serif text-gold-gradient" style={{
          fontSize: 'clamp(2.2rem, 6vw, 5.2rem)',
          fontWeight: '900',
          lineHeight: 1.1,
          marginBottom: '18px',
          textShadow: '0 10px 40px rgba(0,0,0,0.9)'
        }}>
          UNBEATABLE CRUNCH. <br />
          <span className="text-crimson-gradient">SUPREME BURGERS & PIZZAS.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
          color: '#e2e8f0',
          maxWidth: '680px',
          margin: '0 auto 32px',
          fontWeight: '400',
          lineHeight: 1.6,
          textShadow: '0 4px 15px rgba(0,0,0,0.9)'
        }}>
          100% Angus smash beef, 11-spice mega crispy chicken buckets, and hand-tossed cheese stuffed crust pizzas delivered express to your door.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <a
            href="#menu"
            className="btn-crimson"
            data-cursor="ORDER"
            style={{ fontSize: '1rem', padding: '14px 32px' }}
          >
            <Flame size={18} />
            <span>Order Sizzling Menu</span>
          </a>

          <button
            onClick={onOpenReserve}
            className="btn-gold"
            data-cursor="BUILD"
            style={{ fontSize: '1rem', padding: '14px 32px' }}
          >
            <span>Express Delivery</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onToggleAIChat}
            data-cursor="AI CRAVE"
            style={{
              background: 'rgba(15, 17, 23, 0.85)',
              border: '1.5px solid var(--gold-primary)',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '50px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontWeight: '700',
              backdropFilter: 'blur(12px)',
              fontSize: '0.92rem'
            }}
          >
            <Sparkles size={18} color="var(--gold-primary)" />
            <span>Ask AI Crave Assistant</span>
          </button>
        </div>

        {/* Live Stats Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: '12px',
          maxWidth: '820px',
          margin: '0 auto',
          padding: '16px',
          background: 'rgba(15, 17, 23, 0.75)',
          border: '1px solid var(--border-gold)',
          borderRadius: 'var(--radius-md)',
          backdropFilter: 'blur(16px)'
        }}>
          {RESTAURANT_INFO.stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div className="font-serif text-gold-gradient" style={{ fontSize: '1.6rem', fontWeight: '900' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '700' }}>
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
          textTransform: 'uppercase',
          fontWeight: '700'
        }}
      >
        <span>Scroll for Food B-Rolls</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}
