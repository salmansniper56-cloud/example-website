import React from 'react';
import { POPULAR_CATEGORIES } from '../data/restaurantData';

export default function PopularCategories({ onSelectCategory }) {
  return (
    <section style={{ padding: '60px 4% 40px', maxWidth: '1280px', margin: '0 auto' }}>
      <h2 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '900', color: '#ffffff', marginBottom: '32px', textAlign: 'center' }}>
        POPULAR CATEGORIES
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '24px',
        justifyItems: 'center'
      }}>
        {POPULAR_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory && onSelectCategory(cat.id)}
            style={{
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.25s ease'
            }}
          >
            {/* Circular Avatar Container with Ring */}
            <div style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              padding: '5px',
              border: `3px solid ${cat.ringColor}`,
              margin: '0 auto 12px',
              boxShadow: `0 8px 20px rgba(0,0,0,0.4)`
            }}>
              <img
                src={cat.image}
                alt={cat.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>

            <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#ffffff' }}>
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
