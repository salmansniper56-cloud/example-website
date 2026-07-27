import React, { useState } from 'react';
import { BROLL_VIDEOS } from '../data/restaurantData';
import { Play, Volume2, VolumeX, Flame, Sparkles, ShoppingBag } from 'lucide-react';

export default function VideoBRollSection({ onAddToCart }) {
  const [muted, setMuted] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const currentVideo = BROLL_VIDEOS[activeVideoIndex];

  return (
    <section style={{ padding: '80px 4%', maxWidth: '1300px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--gold-primary)',
          fontSize: '0.8rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontWeight: '700',
          marginBottom: '8px'
        }}>
          <Flame size={16} color="var(--crimson-accent)" />
          <span>Live Kitchen B-Roll Showcase</span>
        </div>
        <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800' }}>
          Sizzle, Melt & Ultimate Crunch
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '10px auto 0', fontSize: '0.95rem' }}>
          Watch our 100% Angus smash beef hit the grill, 4-cheese pizza pulls, and 11-spice golden chicken frying live.
        </p>
      </div>

      {/* Main Video B-Roll Player Box */}
      <div style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '2px solid var(--gold-primary)',
        boxShadow: '0 20px 50px rgba(230, 57, 70, 0.3)',
        background: '#000',
        aspectRatio: '16 / 9',
        maxHeight: '520px',
        margin: '0 auto 28px'
      }}>
        <video
          key={currentVideo.videoUrl}
          src={currentVideo.videoUrl}
          poster={currentVideo.poster}
          autoPlay
          loop
          muted={muted}
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Video Controls Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(15, 17, 23, 0.85) 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '24px'
        }}>
          {/* Top Bar inside Video */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              background: 'rgba(230, 57, 70, 0.9)',
              color: '#fff',
              fontWeight: '800',
              fontSize: '0.75rem',
              padding: '6px 14px',
              borderRadius: '20px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              🔥 LIVE B-ROLL LOOP
            </span>

            <button
              onClick={() => setMuted(!muted)}
              style={{
                background: 'rgba(15, 17, 23, 0.8)',
                border: '1px solid var(--border-gold)',
                color: 'var(--gold-primary)',
                padding: '8px 14px',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span>{muted ? 'Unmute B-Roll' : 'Sound On'}</span>
            </button>
          </div>

          {/* Bottom Info inside Video */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ color: 'var(--gold-primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
                Category: {currentVideo.category}
              </span>
              <h3 className="font-serif" style={{ color: '#fff', fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', fontWeight: '800' }}>
                {currentVideo.title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Video Selector Thumbnails Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px'
      }}>
        {BROLL_VIDEOS.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveVideoIndex(index)}
            className="glass-card"
            style={{
              padding: '12px',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              border: '1px solid ' + (activeVideoIndex === index ? 'var(--crimson-accent)' : 'var(--border-subtle)'),
              background: activeVideoIndex === index ? 'rgba(230, 57, 70, 0.15)' : 'rgba(22, 26, 36, 0.7)'
            }}
          >
            <div style={{ position: 'relative', width: '80px', height: '60px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
              <img src={item.poster} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={18} fill="var(--gold-primary)" color="var(--gold-primary)" />
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--gold-primary)', fontWeight: '700', textTransform: 'uppercase' }}>
                {item.category}
              </span>
              <h4 style={{ color: '#fff', fontSize: '0.88rem', fontWeight: '700', lineHeight: 1.3 }}>
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
