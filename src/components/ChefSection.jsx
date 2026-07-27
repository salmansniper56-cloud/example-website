import React from 'react';
import { Award, Sparkles, Quote, CheckCircle } from 'lucide-react';
import { CHEF_PROFILE } from '../data/restaurantData';

export default function ChefSection() {
  return (
    <section id="chef" style={{ padding: '80px 4%', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px',
        alignItems: 'center'
      }}>
        {/* Left: Image Container */}
        <div style={{ position: 'relative' }}>
          <div style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--gold-primary)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.8)'
          }}>
            <img
              src={CHEF_PROFILE.image}
              alt={CHEF_PROFILE.name}
              style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover' }}
            />
          </div>

          {/* Floating Badge */}
          <div style={{
            position: 'absolute',
            bottom: '-16px',
            right: '16px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--gold-primary)',
            padding: '12px 18px',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <Award size={26} color="var(--gold-primary)" />
            <div>
              <div style={{ color: '#fff', fontWeight: '700', fontSize: '0.9rem' }}>3 Michelin Stars</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>Consecutive (2020 - 2026)</div>
            </div>
          </div>
        </div>

        {/* Right: Text Story */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--gold-primary)',
            fontSize: '0.8rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '10px'
          }}>
            <Sparkles size={14} />
            <span>Culinary Philosophy</span>
          </div>

          <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: '700', marginBottom: '12px', lineHeight: 1.2 }}>
            {CHEF_PROFILE.name}
          </h2>
          <h4 style={{ color: 'var(--text-gold)', fontWeight: '600', fontSize: '1rem', marginBottom: '20px' }}>
            {CHEF_PROFILE.title}
          </h4>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
            {CHEF_PROFILE.bio}
          </p>

          {/* Quote */}
          <div style={{
            background: 'rgba(212, 175, 55, 0.08)',
            borderLeft: '3px solid var(--gold-primary)',
            padding: '16px 20px',
            borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            marginBottom: '24px'
          }}>
            <Quote size={20} color="var(--gold-primary)" style={{ opacity: 0.5, marginBottom: '6px' }} />
            <p style={{ color: '#fff', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.5 }}>
              "{CHEF_PROFILE.quote}"
            </p>
          </div>

          {/* Awards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {CHEF_PROFILE.awards.map((award, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '0.85rem' }}>
                <CheckCircle size={15} color="var(--gold-primary)" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
