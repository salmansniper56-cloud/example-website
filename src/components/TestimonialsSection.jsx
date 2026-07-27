import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/restaurantData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" style={{ padding: '100px 4%', background: 'rgba(18, 22, 31, 0.5)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <Quote size={48} color="var(--gold-primary)" style={{ opacity: 0.25, marginBottom: '16px' }} />

        <div style={{ minHeight: '200px' }}>
          <p className="font-serif" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.8rem)', color: '#fff', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '24px' }}>
            "{item.comment}"
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '16px' }}>
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={18} fill="var(--gold-primary)" color="var(--gold-primary)" />
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
            <img src={item.avatar} alt={item.name} style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--gold-primary)' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: 'var(--gold-light)', fontWeight: '700', fontSize: '1.05rem' }}>{item.name}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{item.role}</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px' }}>
          <button
            onClick={prevTestimonial}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-gold)',
              color: '#fff',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-gold)',
              color: '#fff',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
