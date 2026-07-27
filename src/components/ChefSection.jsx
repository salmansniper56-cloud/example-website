import React from 'react';
import { Award, Sparkles, Quote, CheckCircle } from 'lucide-react';
import { CHEF_PROFILE } from '../data/restaurantData';

export default function ChefSection() {
  return (
    <section id="chef" style={{ padding: '100px 4%', maxWidth: '1300px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '50px',
        alignItems: 'center'
      }}>
        {/* Left: Image Container with Glass Frame */}
        <div style={{ position: 'relative' }}>
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--gold-primary)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
          }}>
            <img
              src={CHEF_PROFILE.image}
              alt={CHEF_PROFILE.name}
              style={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
          </div>

          {/* Floating Badge */}
          <div style={{
            position: 'absolute',
            bottom: '-25px',
            right: '-20px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--gold-primary)',
            padding: '16px 24px',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Award size={32} color="var(--gold-primary)" />
            <div>
              <div style={{ color: '#fff', fontWeight: '700', fontSize: '1rem' }}>3 Michelin Stars</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Consecutive (2020 - 2026)</div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--gold-primary)',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '12px'
          }}>
            <Sparkles size={16} />
            <span>Culinary Philosophy</span>
          </div>

          <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: '700', marginBottom: '16px', lineHeight: 1.2 }}>
            {CHEF_PROFILE.name}
          </h2>
          <h4 style={{ color: 'var(--text-gold)', fontWeight: '600', fontSize: '1.1rem', marginBottom: '24px' }}>
            {CHEF_PROFILE.title}
          </h4>

          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
            {CHEF_PROFILE.bio}
          </p>

          {/* Quote Block */}
          <div style={{
            background: 'rgba(212, 175, 55, 0.08)',
            borderLeft: '3px solid var(--gold-primary)',
            padding: '20px 24px',
            borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            marginBottom: '32px',
            position: 'relative'
          }}>
            <Quote size={24} color="var(--gold-primary)" style={{ opacity: 0.5, marginBottom: '8px' }} />
            <p style={{ color: '#fff', fontStyle: 'italic', fontSize: '0.98rem', lineHeight: 1.6 }}>
              "{CHEF_PROFILE.quote}"
            </p>
          </div>

          {/* Awards List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {CHEF_PROFILE.awards.map((award, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)', fontSize: '0.92rem' }}>
                <CheckCircle size={16} color="var(--gold-primary)" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
